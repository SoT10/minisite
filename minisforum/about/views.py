from django.shortcuts import render


def about(request):
    context = {
        'title': 'О нас',
    }
    template_name = 'about/about.html'
    return render(request, template_name, context)