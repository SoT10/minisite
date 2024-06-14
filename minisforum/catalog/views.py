from django.shortcuts import render, redirect
from django.db.models import Count
from .models import Product
from .forms import NumberForm


def catalog(request):
    categories = Product.objects.values('category').annotate(count=Count('product_id'))
    category_name = request.GET.get('category')
    if category_name:
        products = Product.objects.filter(category=category_name)
    else:
        products = Product.objects.all()

    context = {
        'title': 'Каталог',
        'products': products,
        'categories': categories
    }
    template_name = 'catalog/catalog.html'
    return render(request, template_name, context)

def product(request):
    product_name = request.GET.get('product')
    product = Product.objects.filter(product_name=product_name).first()

    if 'product_form_submit' in request.POST:
        product_form=NumberForm(request.POST)
        if product_form.is_valid():
            number = product_form.cleaned_data['number']
            if number>999:
                number=999
            elif number<1:
                number=1
            return redirect('/catalog/product?product=' + product_name)
    else:
        product_form=NumberForm()

    context = {
        'title': 'Продукт',
        'product_form': product_form,
        'product': product
    }
    template_name = 'catalog/product.html'
    return render(request, template_name, context)