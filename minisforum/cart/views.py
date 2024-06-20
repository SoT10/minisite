from django.shortcuts import render


def cart(request):
    context = {
        'title': 'Корзина',
    }
    template_name = 'cart/cart.html'
    return render(request, template_name, context)