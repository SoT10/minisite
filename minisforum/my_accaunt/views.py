from django.shortcuts import render

def my_accaunt(request):
    context = {
        'title': 'Мой аккаунт',
    }
    template_name = 'my_accaunt/my_accaunt.html'
    return render(request, template_name, context)