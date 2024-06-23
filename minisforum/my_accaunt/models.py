from django.db import models
from django.contrib.auth.models import User

class Adress(models.Model):
    username = models.CharField(max_length=30, unique=True)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    oblast = models.CharField(max_length=30)
    city = models.CharField(max_length=15)
    adress = models.CharField(max_length=80)
    postal_code = models.CharField(max_length=8)

    class Meta:
        db_table = 'adress'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


