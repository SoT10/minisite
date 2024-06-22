from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import AdressForm
from my_accaunt.models import Adress
from .models import Order


@login_required
def buy(request):
    user_adress_instance = Adress.objects.filter(username=request.user.username).first()
    buy_form = AdressForm(instance=user_adress_instance)

    if request.method == 'POST':
        buy_form = AdressForm(request.POST)
        if buy_form.is_valid():
            print(2)

    context = {
        'title': 'Покупка',
        'buy_form': buy_form
    }
    template_name = 'buy/buy.html'
    return render(request, template_name, context)



