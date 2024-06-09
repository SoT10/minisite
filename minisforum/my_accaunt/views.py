from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login
from .forms import UserRegisterForm
from .validators import CustomAuthenticationForm
from .models import Zakazi

def my_accaunt(request):
    reg_form = UserRegisterForm()
    login_form = AuthenticationForm()

    if request.method == 'POST':
        if 'register_form_submit' in request.POST:
            reg_form = UserRegisterForm(request.POST)
            if reg_form.is_valid():
                reg_form.save()
                messages.success(request, 'Ваш аккаунт был создан! Теперь вы можете войти.')
                return redirect('/my_accaunt')
        elif 'login_form_submit' in request.POST:
            login_form = CustomAuthenticationForm(data=request.POST)
            if login_form.is_valid():
                username = login_form.cleaned_data.get('username')
                password = login_form.cleaned_data['password']
                user = authenticate(request, username=username, password=password)
                login(request, user)
                request.session['username'] = username
                return redirect('/my_accaunt')
    else:
        reg_form=UserRegisterForm()
        login_form = CustomAuthenticationForm()
    
    context = {
        'title': 'Мой аккаунт',
        'reg_form': reg_form,
        'login_form': login_form
    }
    template_name = 'my_accaunt/my_accaunt.html'
    user_orders = Zakazi.objects.filter(username=request.user.username)
    print(user_orders)

    return render(request, template_name, context)

    

