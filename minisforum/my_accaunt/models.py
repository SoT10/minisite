from django.db import models
from django.contrib.auth.models import User


class Zakazi(models.Model):
    username = models.CharField(max_length=30, null=True)  
    date = models.DateField(null=True)  
    status = models.CharField(max_length=15, null=True)
    itogo = models.CharField(max_length=20, null=True)

    class Meta:
        db_table = 'zakazi'  # Указание правильного имени таблицы

    def __str__(self):
        return f"Order {self.id} by {self.username}"

class Adress(models.Model):
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    oblast = models.CharField(max_length=30)
    city = models.CharField(max_length=15)
    adress = models.CharField(max_length=15)
    postal_code = models.CharField(max_length=8)

    class Meta:
        db_table = 'adress'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
