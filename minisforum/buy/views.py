from django.shortcuts import render


def buy(request):
    context = {
        'title': 'Покупка',
    }
    template_name = 'buy/buy.html'
    return render(request, template_name, context)