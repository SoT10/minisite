from django.shortcuts import render
from django.core.mail import send_mail


def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        subject = request.POST.get('subject')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Отправка письма
        send_mail(
            'Обратная связь',
            f'От: {name}\nEmail: {email}\n\nТема: {subject}\n\nСообщение: {message}',
            'minisforum-russia@yandex.ru',
            ['minisforum-russia@yandex.ru'],  # Это список адресов, на которые нужно отправить письмо
            fail_silently=False,
        )

    context = {
        'title': 'Контакты',
    }
    template_name = 'contact/contact.html'
    return render(request, template_name, context)