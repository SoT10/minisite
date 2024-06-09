from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _
from django.contrib.auth.password_validation import CommonPasswordValidator
from django.contrib.auth.password_validation import UserAttributeSimilarityValidator
from django.core.validators import validate_email as django_validate_email
from django.contrib.auth.forms import AuthenticationForm


class CustomCommonPasswordValidator(CommonPasswordValidator):
    def validate(self, password, user=None):
        try:
            super().validate(password, user)
        except ValidationError:
            raise ValidationError(
                _("Этот пароль слишком распространён. Пожалуйста, выберите другой пароль."),
                code='password_too_common',
            )

class CustomNumericPasswordValidator(CommonPasswordValidator):
    def validate(self, password, user=None):
        try:
            super().validate(password, user)
        except ValidationError:
            raise ValidationError(
                _("Пароль не должен состоять только из цифр."),
                code='password_entirely_numeric',
            )

class CustomPasswordMinValidator(CommonPasswordValidator):
    def validate(self, password, user=None):
        try:
            super().validate(password, user)
        except ValidationError:
            raise ValidationError(
                _("Пароль должен содержать как минимум 8 символов."),
                code='password_too_short',
            )

def validate_custom_email(value):
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError(
            _("Введите действительный адрес электронной почты."),
            code='invalid',
        )

class CustomAuthenticationForm(AuthenticationForm):
    error_messages = {
        'invalid_login': _(
            "Неверное имя пользователя или пароль. Обратите внимание, что оба поля могут быть чувствительны к регистру."
        ),
        'inactive': _("Ваш аккаунт неактивен."),
    }
