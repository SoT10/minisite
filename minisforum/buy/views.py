from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import AdressForm
from my_accaunt.models import Adress
from .models import Order
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect
import json
from django.http import JsonResponse

@login_required
def buy(request):
    if request.method=='POST':
        tovar_list = get_json_from_storage(request)
        if isinstance(tovar_list, list):  # Проверяем, что test является словарем
            tovar_dict = {index: tovar for index, tovar in enumerate(tovar_list)}

    user_adress_instance = Adress.objects.filter(username=request.user.username).first()
    buy_form = AdressForm(instance=user_adress_instance)

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

@csrf_protect
@require_POST
def get_json_from_storage(request):
    try:
        data_list = json.loads(request.body)
        result = []  # Создаем пустой список для сохранения данных

        for data in data_list:
            # Проверяем, что есть данные для загрузки
            if data:
                # Обрабатываем данные JSON
                id = data.get('id')
                product_name = data.get('product_name')
                quantity = data.get('quantity')
                
                # Делаем что-то с данными, например, сохраняем в базу данных
                # В данном случае добавляем данные в список result
                result.append(data)
            else:
                pass
        
        return result  # Возвращаем список собранных данных
    except json.JSONDecodeError as e:
        pass