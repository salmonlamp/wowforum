# Generated by Django 3.1.5 on 2021-03-29 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tuning', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='sitesettings',
            options={'verbose_name': 'Настройки сайта', 'verbose_name_plural': 'Настройки сайта'},
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='facebook',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Facebook'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='instagram',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Instagram'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='twitter',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Twitter'),
        ),
    ]
