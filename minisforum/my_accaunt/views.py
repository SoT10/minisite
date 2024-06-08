from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm

def my_accaunt(request):
    reg_form = UserRegisterForm()
    login_form = AuthenticationForm()

    if request.method == 'POST':
        if 'register_form_submit' in request.POST:
            reg_form = UserRegisterForm(request.POST)
            if reg_form.is_valid():
                reg_form.save()
                messages.success(request, 'Ваш аккаунт был создан! Теперь вы можете войти.')
                return redirect('/')
        elif 'login_form_submit' in request.POST:
            login_form = AuthenticationForm(request, request.POST)
            print(0)
            if login_form.is_valid():
                # Обработка успешного входа
                print(1)
                return redirect('/')
            else:
                print(2)
    
    context = {
        'title': 'Мой аккаунт',
        'reg_form': reg_form,
        'login_form': login_form
    }
    template_name = 'my_accaunt/my_accaunt.html'
    return render(request, template_name, context)
