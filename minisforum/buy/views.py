from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import OrderForm  
from my_accaunt.models import Adress  
from .models import Order
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect
import json
from django.http import JsonResponse

@csrf_protect
@login_required
def buy(request):
    user_adress_instance = Adress.objects.filter(username=request.user.username).first()
    buy_form = OrderForm(instance=user_adress_instance)

    if request.method == 'POST':
        buy_form = OrderForm(request.POST)
        if buy_form.is_valid():       
            tovar_list = get_json_from_storage(request)
            print(type(tovar_list))
            adress_instance = buy_form.save(commit=False)
            adress_instance.username = request.user.username
            adress_instance.user_id = request.user.id
            adress_instance.save()
            

            
            
            # if isinstance(tovar_list, list):
            #     print(tovar_list)
            #     for tovar_data in tovar_list:
            #         Order.objects.create(
            #             username=request.user.username,
            #             product_name=tovar_data.get('product_name'),
            #             quantity=tovar_data.get('quantity'),
            #         )

            # clear_storage_data(request)

            
            return redirect('/buy') 
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
        
        return JsonResponse({'data': result}, safe=False)  # Возврат JSON-ответа с результатом
    except json.JSONDecodeError as e:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)  # Возврат JSON-ответа с ошибкой


def clear_storage_data(request):
    pass





































# from django.shortcuts import render, redirect
# from django.contrib.auth.decorators import login_required
# from .forms import OrderForm  
# from my_accaunt.models import Adress  
# from .models import Order
# from django.views.decorators.http import require_POST
# from django.views.decorators.csrf import csrf_protect
# import json
# from django.http import JsonResponse

# @csrf_protect
# @login_required
# def buy(request):
#     user_adress_instance = Adress.objects.filter(username=request.user.username).first()
#     buy_form = OrderForm(instance=user_adress_instance)

#     if request.method == 'POST':
#         buy_form = OrderForm(request.POST)
#         if buy_form.is_valid():
#             # Сохраняем форму адреса, если данные валидны
#             adress_instance = buy_form.save(commit=False)
#             adress_instance.username = request.user.username
#             adress_instance.user_id = request.user.id
#             adress_instance.save()

#             # Получаем данные о товарах из сессии или локального хранилища
#             tovar_list = get_json_from_storage(request)
#             if isinstance(tovar_list, list):  # Проверяем, что получен список товаров
#                 for tovar_data in tovar_list:
#                     print(tovar_data)
#                     # Создаем запись в таблице Order для каждого товара
#                     Order.objects.create(
#                         username=request.user.username,
#                         product_name=tovar_data.get('product_name'),
#                         quantity=tovar_data.get('quantity'),
#                         # Другие поля, которые могут быть необходимы
#                     )

#             # Очищаем данные из сессии или локального хранилища
#             clear_storage_data(request)

#             # После сохранения данных редиректим на страницу подтверждения покупки или другую страницу
#             return redirect('/buy')  # Замените на свой URL

#     context = {
#         'title': 'Покупка',
#         'buy_form': buy_form
#     }
#     template_name = 'buy/buy.html'
#     return render(request, template_name, context)

# @csrf_protect
# @require_POST
# def get_json_from_storage(request):
#     try:
#         data_list = json.loads(request.body)
#         result = []  # Создаем пустой список для сохранения данных

#         for data in data_list:
#             # Проверяем, что есть данные для загрузки
#             if data:
#                 result.append(data)
#             else:
#                 pass
        
#         return result  # Возвращаем список собранных данных
#     except json.JSONDecodeError as e:
#         pass

# def clear_storage_data(request):
#     # Реализуйте функцию для очистки данных из сессии или локального хранилища, если это необходимо
#     pass
