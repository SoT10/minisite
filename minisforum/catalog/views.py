from django.shortcuts import render, redirect
from django.db.models import Count
from .models import Product, Review, LikedProduct
from django.contrib.auth.models import User
from .forms import NumberForm, ReviewForm
from django.db.models import Avg
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.decorators import login_required
from django.contrib.sessions.models import Session
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

def catalog(request):
    categories = Product.objects.values('category').annotate(count=Count('product_id'))
    category_name = request.GET.get('category')
    if category_name:
        products = Product.objects.filter(category=category_name)
    else:
        products = Product.objects.all()

    liked_products = []
    if request.user.is_authenticated:
        liked_products = LikedProduct.objects.filter(user=request.user).values_list('product_id', flat=True)

    context = {
        'title': 'Каталог',
        'products': products,
        'categories': categories,
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

    context = {
        'title': 'Продукт',
        'product_form': product_form,
        'review_form': review_form,
        'product': product,
        'review_count': review_count,
        'reviews': reviews,
    }
    template_name = 'catalog/product.html'
    return render(request, template_name, context)


def update_product_rating(product):
    # Вычисляем средний рейтинг для данного продукта
    avg_rating = Review.objects.filter(product=product).aggregate(Avg('rating'))['rating__avg']
    
    # Обновляем рейтинг продукта
    if avg_rating is not None:
        product.rating = avg_rating
        product.save()






@receiver([post_save, post_delete], sender=Review)
def update_product_rating_on_review_change(sender, instance, **kwargs):
    product = instance.product
    update_product_rating(product)




@csrf_exempt
@login_required  # Гарантирует, что пользователь авторизован
def add_to_favorites(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            user = request.user

            if not product_id:
                return JsonResponse({'success': False, 'error': 'Missing product_id'})

            try:
                product = Product.objects.get(pk=product_id)
            except Product.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Product does not exist'})

            # Проверка на дублирование
            liked_product, created = LikedProduct.objects.get_or_create(user=user, product=product)

            if created:
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'error': 'Product already liked'})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return JsonResponse({'success': False, 'error': 'Invalid request'})