# Generated by Django 2.2.4 on 2019-08-15 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playlist', '0003_auto_20190815_0414'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersettings',
            name='user',
            field=models.TextField(default=''),
        ),
    ]
