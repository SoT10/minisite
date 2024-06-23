from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login
from .forms import UserRegisterForm, AdressForm, AnketaForm
from .validators import CustomAuthenticationForm
from .models import Adress
from buy.models import Order
from catalog.models import LikedProduct
from django.contrib.auth import update_session_auth_hash


def my_accaunt(request):
    user = request.user
    reg_form = UserRegisterForm()
    login_form = AuthenticationForm()
    adress_form = AdressForm()
    anketa_form = AnketaForm()
    

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
                return redirect('/my_accaunt/?href=zakazi')
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
                return redirect('/my_accaunt/?href=address')
        elif 'anketa_form_submit' in request.POST:
            anketa_form = AnketaForm(request.POST, instance=request.user)
            if anketa_form.is_valid():
                username = request.user.username
                email = anketa_form.cleaned_data['email']
                new_username = anketa_form.cleaned_data['username']
                old_password = anketa_form.cleaned_data['old_password']
                new_password1 = anketa_form.cleaned_data['new_password1']
                new_password2 = anketa_form.cleaned_data['new_password2']

                user.email = email
                user.username = new_username if new_username else user.username

                if new_password1 and new_password2:
                    if user.check_password(old_password):
                        if new_password1 == new_password2:
                            user.set_password(new_password1)
                            update_session_auth_hash(request, user)
                            messages.success(request, 'Пароль обновлен')

                messages.success(request, 'Электронная почта и логин успешно обновлены')
                user.save()

                return redirect('/my_accaunt/?href=anketa')
                
    else:
        reg_form = UserRegisterForm()
        login_form = CustomAuthenticationForm()
        try:
            anketa_form = AnketaForm(instance=user, initial={'email': user.email, 'username': user.username})
        except AttributeError as e:
            pass

    
    user_adress_instance = Adress.objects.filter(username=request.user.username).first()

    if user_adress_instance:
        adress_form = AdressForm(instance=user_adress_instance)

        user_adress = f"Адрес заказчика: {user_adress_instance.first_name} {user_adress_instance.last_name}, {user_adress_instance.oblast}, {user_adress_instance.city}, {user_adress_instance.adress}, {user_adress_instance.postal_code}<hr>"
    else:
        user_adress = "Вы еще не добавили ваш адрес доставки. <button onclick='show_adress()'>Добавить?</button>"

    context = {
        'title': 'Мой аккаунт',
        'reg_form': reg_form,
        'login_form': login_form,
        'adress_form': adress_form,
        'user_adress': user_adress,
    }

    if request.user.is_authenticated:
        liked_products = LikedProduct.objects.filter(user=request.user)
        context.update({'liked_products':liked_products})
        user_orders = Order.objects.filter(user=user).order_by('-date')
        context.update({'user_orders':user_orders})

    try:
        context.update({'anketa_form':anketa_form})
    except AttributeError as e:
        pass
    
    return render(request, 'my_accaunt/my_accaunt.html', context)