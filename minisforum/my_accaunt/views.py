from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

def my_accaunt(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Ваш аккаунт был создан! Теперь вы можете войти.')
            return redirect('/')
    else:
        form = UserRegisterForm()

    context = {
        'title': 'Мой аккаунт',
        'form': form
    }
    template_name = 'my_accaunt/my_accaunt.html'
    return render(request, template_name, context)
