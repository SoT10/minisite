from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Count
from .models import Product, Review, LikedProduct
from django.contrib.auth.models import User
from .forms import NumberForm, ReviewForm
from django.db.models import Avg
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.decorators import login_required
from django.contrib.sessions.models import Session

def catalog(request):
    sort = request.GET.get('sort', 'default')
    category_name = request.GET.get('category', 'default')

    # Получаем все продукты
    products = Product.objects.all()

    # Фильтрация по категории, если указана
    if category_name and category_name != 'default':
        products = products.filter(category=category_name)

    # Сортировка продуктов
    if sort == 'rating':
        products = products.order_by('-rating')
    elif sort == 'newest':
        products = products.order_by('-date_added')
    elif sort == 'price_asc':
        products = products.order_by('price')
    elif sort == 'price_desc':
        products = products.order_by('-price')

    categories = Product.objects.values('category').annotate(count=Count('product_id'))

    liked_products = []
    if request.user.is_authenticated:
        liked_products = LikedProduct.objects.filter(user=request.user).values_list('product_id', flat=True)

    context = {
        'title': 'Каталог',
        'products': products,
        'categories': categories,
        'sort': sort,
        'category_name': category_name,
        'liked_products': liked_products
    }
    template_name = 'catalog/catalog.html'
    return render(request, template_name, context)

def product(request):
    product_name = request.GET.get('product')
    product = Product.objects.get(product_name=product_name)
    review_count = Review.objects.filter(product=product, is_approved=True).count()
    reviews = Review.objects.filter(product=product, is_approved=True)

    if request.user.is_authenticated:
        user = request.user
    else:
        user = "Аноним"

    if 'product_form_submit' in request.POST:
        product_form=NumberForm(request.POST)
        if product_form.is_valid():
            number = product_form.cleaned_data['number']
            if number>999:
                number=999
            elif number<1:
                number=1
            return redirect('/catalog/product?product=' + product_name)
    elif 'review_form_submit' in request.POST:
        review_form=ReviewForm(request.POST)
        if review_form.is_valid():
            review=review_form.save(commit=False)
            review.product=product
            if user == "Аноним":
                review.user_username = "Аноним"
            else:
                review.user_username = user.username
            review.save()
            update_product_rating(product)
            return redirect('/catalog/product?product=' + product_name)
    else:
        product_form=NumberForm()
        review_form=ReviewForm()

    liked_products = []
    if request.user.is_authenticated:
        liked_products = LikedProduct.objects.filter(user=request.user).values_list('product_id', flat=True)

    context = {
        'title': 'Продукт',
        'product_form': product_form,
        'review_form': review_form,
        'product': product,
        'review_count': review_count,
        'reviews': reviews,
        'liked_products': liked_products
    }
    template_name = 'catalog/product.html'
    return render(request, template_name, context)


def update_product_rating(product):
    avg_rating = Review.objects.filter(product=product).aggregate(Avg('rating'))['rating__avg']
    
    if avg_rating is not None:
        product.rating = avg_rating
        product.save()



@receiver([post_save, post_delete], sender=Review)
def update_product_rating_on_review_change(sender, instance, **kwargs):
    product = instance.product
    update_product_rating(product)