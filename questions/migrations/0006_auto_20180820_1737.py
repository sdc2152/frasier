# Generated by Django 2.0.7 on 2018-08-20 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0005_auto_20180730_1917'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='question',
            options={'ordering': ('created', 'difficulty', 'category')},
        ),
        migrations.AlterField(
            model_name='question',
            name='difficulty',
            field=models.IntegerField(choices=[(1, 'Easy'), (2, 'Medium'), (3, 'Hard')], default=1),
        ),
    ]