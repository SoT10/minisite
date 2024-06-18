from django import forms
from .models import Review

class NumberForm(forms.Form):
    number = forms.IntegerField(
        min_value=1,
        max_value=999,
        initial=1,
        widget=forms.NumberInput()
    )

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['feedback', 'rating']

        widgets = {
            'feedback': forms.Textarea(attrs={'placeholder': 'Ваш отзыв*', 'name': 'feedback'}),
            'rating': forms.NumberInput(attrs={'style': 'display: none;'}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['rating'].required = False