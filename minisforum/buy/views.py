from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import OrderForm  
from my_accaunt.models import Adress  
from catalog.models import Product  
from .models import Order, OrderItem
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect
import json
from django.http import JsonResponse
from decimal import Decimal
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string

@csrf_protect
@login_required
def buy(request):
    user_adress_instance = Adress.objects.filter(username=request.user.username).first()
    buy_form = OrderForm(instance=user_adress_instance)

    if request.method == 'POST':
        buy_form = OrderForm(request.POST)
        if buy_form.is_valid():
            tovar_list = request.session['tovar_list']
            tovar_dict = {index: tovar for index, tovar in enumerate(tovar_list)}

            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            oblast = request.POST.get('oblast')
            city = request.POST.get('city')
            adress = request.POST.get('adress')
            postal_code = request.POST.get('postal_code')
            phone = request.POST.get('phone')
            details = request.POST.get('details', '')
            email = request.user.email

            order = Order.objects.create(
                first_name=first_name,
                last_name=last_name,
                oblast=oblast,
                city=city,
                adress=adress,
                postal_code=postal_code,
                phone=phone,
                details=details,
                email=email,
                total=0,
                user=request.user
            )

            total_amount = 0
            ordered_items = []

            for key, product_data in tovar_dict.items():
                product_id = product_data['id']
                quantity = int(product_data['quantity'])

                product = Product.objects.get(pk=product_id)

                product_price_str = product_data['product_price']
                cleaned_price_str = ''.join(filter(lambda x: x.isdigit() or x == '.', product_price_str))
                cleaned_price_str = cleaned_price_str.replace(',', '.')

                unit_price = Decimal(cleaned_price_str)

                order_item = OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=quantity,
                    unit_price=unit_price / 100
                )

                total_amount += order_item.subtotal()
                ordered_items.append({
                    'product_name': product.product_name,
                    'quantity': quantity,
                    'unit_price': unit_price / 100,
                    'subtotal': order_item.subtotal()
                })

            order.total = total_amount
            order.save()

            subject = 'Ваш заказ принят'
            from_email = 'minisforum-russia@yandex.ru'
            recipient_list = [email]

            adress_full = f'{oblast}, {city}, {adress}, {postal_code}'
            html_message = render_to_string('buy/order_email.html', {
                'name': first_name,
                'order_id': order.id,
                'order_date': order.date.strftime('%d.%m.%Y'),
                'ordered_items': ordered_items,
                'total_amount': total_amount,
                'adress': adress_full,
            })

            message = EmailMultiAlternatives(subject, '', from_email, recipient_list)
            message.attach_alternative(html_message, "text/html")
            message.send()

            clear_storage_data(request)

            return redirect('/buy/clear_storage_data')
        else:
            print(buy_form.errors.as_json())
            print(buy_form.errors)
            for field, errors in buy_form.errors.items():
                print(f"Поле '{field}': {', '.join(errors)}")

    context = {
        'title': 'Покупка',
        'buy_form': buy_form
    }
    template_name = 'buy/buy.html'
    return render(request, template_name, context)

# @csrf_protect
# @require_POST
def get_json_from_storage(request):
    try:
        data_list = json.loads(request.body)
        result = [] 

        for data in data_list:
            if data:
                result.append(data)

        request.session['tovar_list'] = result        
        return JsonResponse({'data': result}, safe=False) 
    except json.JSONDecodeError as e:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)


def clear_storage_data(request):
    return render(request, 'buy/clear_storage_data.html')
