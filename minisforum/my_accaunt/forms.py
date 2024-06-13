from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from .validators import validate_custom_email
from django.contrib.auth import authenticate, login
from django.forms import ModelForm
from .models import Adress
from django.contrib.auth.forms import UserChangeForm

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

class AnketaForm(UserChangeForm):
    old_password = forms.CharField(label="Старый пароль", widget=forms.PasswordInput, required=False)
    username = forms.CharField(label="Логин", required=False)
    new_password1 = forms.CharField(label="Новый пароль", widget=forms.PasswordInput, required=False)
    new_password2 = forms.CharField(label="Подтвердите новый пароль", widget=forms.PasswordInput, required=False)

    class Meta:
        model = User
        fields = ['email', 'username', 'old_password', 'new_password1', 'new_password2']
        labels = {
            'email': 'Электронная почта','username': 'Логин',
        }