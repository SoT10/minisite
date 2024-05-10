from django.shortcuts import render


def contact(request):
    context = {
        'title': 'Контакты',
    }
    template_name = 'contact/contact.html'
    return render(request, template_name, context)