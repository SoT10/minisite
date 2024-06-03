from django.http import HttpResponse
import uuid

def set_cookie_view(request):
    # Генерация уникального значения куки
    unique_id = str(uuid.uuid4())
    response = HttpResponse("Unique cookie has been set")
    response.set_cookie(
        key='my_unique_cookie',
        value=unique_id,
        max_age=3600,  # 1 hour
        path='/',
        secure=False,
        httponly=True,
        samesite='Lax'
    )
    return response

def get_cookie_view(request):
    my_unique_cookie = request.COOKIES.get('my_unique_cookie')
    if my_unique_cookie:
        return HttpResponse(f'Cookie value: {my_unique_cookie}')
    else:
        return HttpResponse('No cookie found')

def delete_cookie_view(request):
    response = HttpResponse("Cookie has been deleted")
    response.delete_cookie('my_unique_cookie')
    return response