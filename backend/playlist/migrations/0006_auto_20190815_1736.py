# Generated by Django 2.2.4 on 2019-08-15 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playlist', '0005_auto_20190815_1551'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='name',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='playlist',
            name='user',
            field=models.TextField(default=''),
        ),
        migrations.DeleteModel(
            name='UserSettings',
        ),
    ]