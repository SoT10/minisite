from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from .validators import validate_custom_email
from django.contrib.auth import authenticate, login
from django.forms import ModelForm
from .models import Adress
from django.contrib.auth.forms import UserChangeForm
from django.core.exceptions import ValidationError

from .validators import CustomCommonPasswordValidator, CustomNumericPasswordValidator, CustomPasswordMinValidator

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
    old_password = forms.CharField(label="Старый пароль", widget=forms.PasswordInput, required=True)
    username = forms.CharField(label="Логин", required=True)
    email = forms.CharField(label="Электронная почта", required=True)
    new_password1 = forms.CharField(label="Новый пароль", widget=forms.PasswordInput, required=False)
    new_password2 = forms.CharField(label="Подтвердите новый пароль", widget=forms.PasswordInput, required=False)

    class Meta:
        model = User
        fields = ['email', 'username', 'old_password', 'new_password1', 'new_password2']
        labels = {
            'email': 'Электронная почта',
            'username': 'Логин',
        }

    def clean_old_password(self):
        old_password = self.cleaned_data.get('old_password')
        if old_password:
            user = self.instance
            if not user.check_password(old_password):
                self.add_error('old_password', "Неверный старый пароль")
        return old_password

    def clean(self):
        cleaned_data = super().clean()
        new_password1 = cleaned_data.get('new_password1')
        new_password2 = cleaned_data.get('new_password2')

        if new_password1 and new_password2:
            if new_password1 != new_password2:
                self.add_error('new_password2', "Новые пароли не совпадают.")

            try:
                CustomCommonPasswordValidator().validate(new_password1)
            except ValidationError as e:
                self.add_error('new_password1', e.messages[0])

            try:
                CustomNumericPasswordValidator().validate(new_password1)
            except ValidationError as e:
                self.add_error('new_password1', e.messages[0])

            try:
                CustomPasswordMinValidator().validate(new_password1)
            except ValidationError as e:
                self.add_error('new_password1', e.messages[0])

        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        new_password = self.cleaned_data.get('new_password1')
        if new_password:
            user.set_password(new_password)
        if commit:
            user.save()
        return user