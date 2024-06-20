from django.shortcuts import render
from catalog.models import Product, Review, LikedProduct

def home(request):
    products = Product.objects.all()
    top_products = products.order_by('-rating')[:4]

    liked_products = []
    if request.user.is_authenticated:
        liked_products = LikedProduct.objects.filter(user=request.user).values_list('product_id', flat=True)

    context = {
        'title': 'Minisforum',
        'liked_products': liked_products,
        'top_products': top_products
    }
    template_name = 'home/home.html'
    return render(request, template_name, context)

