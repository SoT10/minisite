from django.db import models

class Product(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
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
    

    def __str__(self):
        return self.product_name

    class Meta:
        db_table = 'products'  