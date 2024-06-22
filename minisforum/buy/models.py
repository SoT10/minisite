from django.db import models
from django.contrib.auth.models import User

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    oblast = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    adress = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    details = models.TextField(blank=True, null=True)
    email = models.EmailField()
    product_name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()    # Цена товара за единицу товара
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending') #статус доставки
    total = models.DecimalField(max_digits=10, decimal_places=2) #Итоговая сумма заказа
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"

    class Meta:
        ordering = ['-date']
        db_table = 'order'  
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
