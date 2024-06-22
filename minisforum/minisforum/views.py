from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from catalog.models import Product, LikedProduct
from django.contrib.auth import authenticate, login
import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect

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

            liked_product, created = LikedProduct.objects.get_or_create(user=user, product=product)

            if created:
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'error': 'Product already liked'})

        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return JsonResponse({'success': False, 'error': 'Invalid request'})

