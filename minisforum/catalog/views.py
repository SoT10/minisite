from django.shortcuts import render
from django.db.models import Count
from .models import Product


def catalog(request):
    products = Product.objects.all()

    categories = Product.objects.values('category').annotate(count=Count('product_id'))


    context = {
        'title': 'Каталог',
        'products': products,
        'categories': categories
    }
    template_name = 'catalog/catalog.html'
    return render(request, template_name, context)