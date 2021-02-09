# Generated by Django 3.1.5 on 2021-02-07 13:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('memes', '0004_auto_20210206_2115'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='memecomment',
            options={'verbose_name': 'Комменатрий под мемом', 'verbose_name_plural': 'Комменатрии под мемами'},
        ),
        migrations.AlterField(
            model_name='memecommentlike',
            name='comment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='memes.memecomment', verbose_name='Комментарий'),
        ),
    ]
