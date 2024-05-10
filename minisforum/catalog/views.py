from django.shortcuts import render


def catalog(request):
    context = {
        'title': 'Каталог',
    }
    template_name = 'catalog/catalog.html'
    return render(request, template_name, context)