from django import forms
from my_accaunt.models import Adress

class AdressForm(forms.ModelForm):
    class Meta:
        model = Adress
        fields = ['first_name', 'last_name', 'oblast', 'city', 'adress', 'postal_code']
        labels = {
            'first_name': 'Имя',
            'last_name': 'Фамилия',
            'oblast': 'Область/край',
            'city': 'Населенный пункт',
            'adress': 'Название улицы, номер дома, номер квартиры',
            'postal_code': 'Почтовый индекс',
        }