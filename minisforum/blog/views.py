from django.shortcuts import render


def blog(request):
    context = {
        'title': 'Блог',
    }
    template_name = 'blog/blog.html'
    return render(request, template_name, context)