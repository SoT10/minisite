from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import AdressForm

@login_required
def buy(request):
    buy_form = AdressForm()

    context = {
        'title': 'Покупка',
        'buy_form': buy_form
    }
    template_name = 'buy/buy.html'
    return render(request, template_name, context)