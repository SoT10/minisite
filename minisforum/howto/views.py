from django.shortcuts import render


def howto(request):
    context = {
        'title': 'Как сделать',
    }
    template_name = 'howto/howto.html'
    return render(request, template_name, context)