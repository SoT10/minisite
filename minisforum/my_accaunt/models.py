from django.db import models

class Zakazi(models.Model):
    username = models.CharField(max_length=30, null=True)  
    date = models.DateField(null=True)  
    status = models.CharField(max_length=15, null=True)
    itogo = models.CharField(max_length=20, null=True)

    class Meta:
        db_table = 'zakazi'  # Указание правильного имени таблицы

    def __str__(self):
        return f"Order {self.id} by {self.username}"
