# Generated by Django 5.0.4 on 2024-06-28 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buy', '0006_alter_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('Отправка', 'Отправка'), ('В процессе доставки', 'В процессе отправки'), ('Доставлено', 'Доставлено'), ('Отменено', 'Отменено')], default='в процессе доставки', max_length=20),
        ),
    ]