from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from .validators import validate_custom_email
from django.contrib.auth import authenticate, login
from django.forms import ModelForm
from .models import Adress

class UserRegisterForm(UserCreationForm):
    email = forms.CharField(required=True, validators=[validate_custom_email])

    class Meta:
        model = User
        fields = ['email', 'username', 'password1', 'password2']

    def clean_password2(self):
        email = self.cleaned_data.get("email")
        username = self.cleaned_data.get("username")
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            self.add_error('password2', "Пароли не совпадают.")
        if password1==email:
            self.add_error('password2', "Ваш пароль похож на вашу почту.")
        if password1==username:
            self.add_error('password2', "Ваш пароль похож на ваш Логин.")
        return password2

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if User.objects.filter(username=username).exists():
            self.add_error('username', "Пользователь с таким именем уже существует. Пожалуйста, выберите другое имя.")
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            self.add_error('email', "Этот email уже используется.")
        return email

class UserLoginForm(AuthenticationForm):
    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                self.add_error('username', "Неверное имя пользователя или пароль.")
            elif not user.is_active:
                self.add_error('username', "Ваш аккаунт неактивен.")

        print(self.cleaned_data)
        return self.cleaned_data

class AdressForm(ModelForm):
    class Meta:
        model = Adress
        fields = ['first_name', 'last_name', 'oblast', 'city', 'adress', 'postal_code']
        labels = {
            'first_name': 'Имя',
            'last_name': 'Фамилия',
            'oblast': 'Область',
            'city': 'Населенный пункт',
            'adress': 'Адрес',
            'postal_code': 'Почтовый индекс',
        }