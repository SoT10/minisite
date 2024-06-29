# Generated by Django 5.0.4 on 2024-06-28 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buy', '0005_alter_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('pending', 'Доставка'), ('в процессе доставки', 'В процессе отправки'), ('completed', 'Доставлено'), ('cancelled', 'Отменено')], default='в процессе доставки', max_length=20),
        ),
    ]