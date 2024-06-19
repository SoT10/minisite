from django.db import models
from django.contrib.auth.models import User
from django.db.models import Count


class Product(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    product_name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    kolvo = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.CharField(max_length=255, blank=True, null=True)
    back_image = models.CharField(max_length=255, blank=True, null=True)
    image1 = models.CharField(max_length=255, blank=True, null=True)
    image2 = models.CharField(max_length=255, blank=True, null=True)
    image3 = models.CharField(max_length=255, blank=True, null=True)
    image4 = models.CharField(max_length=255, blank=True, null=True)
    image5 = models.CharField(max_length=255, blank=True, null=True)
    image6 = models.CharField(max_length=255, blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    in_stock = models.BooleanField(default=True)
    rating = models.FloatField(blank=True, null=True)
    
    def get_review_count(self):
        return self.reviews.filter(is_approved=True).count()

    def __str__(self):
        return self.product_name

    class Meta:
        db_table = 'products'  
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    user_username = models.CharField(max_length=150)
    feedback = models.TextField()
    rating = models.IntegerField()  # Можно выбрать тип поля в зависимости от того, как хранится рейтинг
    date_added = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.feedback

    class Meta:
        db_table = 'review'  
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'


class LikedProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'like_product'
