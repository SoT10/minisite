from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import AdressForm
from my_accaunt.models import Adress
from .models import Order
import json
from django.http import JsonResponse

@login_required
def buy(request):
    user_adress_instance = Adress.objects.filter(username=request.user.username).first()
    buy_form = AdressForm(instance=user_adress_instance)

    try:
        data = json.loads(request.body)
        id = data.get('id')
        product_name = data.get('product_name')
        quantity = data.get('quantity')
        print(product_name)
    except json.JSONDecodeError as e:
        pass

    if request.method == 'POST':
        buy_form = AdressForm(request.POST)
        if buy_form.is_valid():
            pass

    context = {
        'title': 'Покупка',
        'buy_form': buy_form
    }
    template_name = 'buy/buy.html'
    return render(request, template_name, context)