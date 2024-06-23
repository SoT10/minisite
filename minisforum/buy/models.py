from django.db import models
from django.contrib.auth.models import User
from catalog.models import Product

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Доставка'),
        ('processing', 'В процессе отправки'),
        ('completed', 'Доставлено'),
        ('cancelled', 'Отменено'),
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
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='processing') #статус доставки
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

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.product} ({self.quantity})"

    def subtotal(self):
        return self.quantity * self.unit_price

    class Meta:
        db_table = 'orderitem'  