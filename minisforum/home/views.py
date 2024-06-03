from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {
        'title': 'Minisforum',
    }
    template_name = 'home/home.html'
    return render(request, template_name, context)
