from django import forms

class NumberForm(forms.Form):
    number = forms.IntegerField(
        min_value=1,
        max_value=999,
        initial=1,
        widget=forms.NumberInput()
    )