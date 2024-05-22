from django.shortcuts import render


def home(request):
    context = {
        'title': 'Minisforum',
    }
    template_name = 'home/home.html'
    return render(request, template_name, context)