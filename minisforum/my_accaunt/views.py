from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login
from .forms import UserRegisterForm
from .validators import CustomAuthenticationForm
from .models import Zakazi
from .forms import AdressForm
from .models import Adress

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
        elif 'adress_form_submit' in request.POST:
            adress_form = AdressForm(request.POST)
            if adress_form.is_valid():
                username = request.user.username
                adress_data = adress_form.cleaned_data
                Adress.objects.update_or_create(
                    username=username,
                    defaults={
                        'first_name': adress_data['first_name'],
                        'last_name': adress_data['last_name'],
                        'oblast': adress_data['oblast'],
                        'city': adress_data['city'],
                        'adress': adress_data['adress'],
                        'postal_code': adress_data['postal_code']
                    })
                return redirect('/my_accaunt')

                
    else:
        reg_form=UserRegisterForm()
        login_form = CustomAuthenticationForm()
        adress_form = AdressForm()
    
    user_orders = Zakazi.objects.filter(username=request.user.username)

    context = {
        'title': 'Мой аккаунт',
        'reg_form': reg_form,
        'login_form': login_form,
        'adress_form': adress_form,

        'user_orders': user_orders
    }
    template_name = 'my_accaunt/my_accaunt.html'

    return render(request, template_name, context)

    

