# Generated by Django 3.1.5 on 2021-02-12 12:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Meme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, verbose_name='Подпись')),
                ('image', models.ImageField(upload_to='memes/%Y/%m/%d/', verbose_name='Изображение')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
            ],
            options={
                'verbose_name': 'Мем',
                'verbose_name_plural': 'Мемы',
            },
        ),
        migrations.CreateModel(
            name='MemeComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('text', models.TextField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('meme', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='memes.meme', verbose_name='Мем')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='memes.memecomment', verbose_name='Радительский комментарий')),
            ],
            options={
                'verbose_name': 'Комменатрий под мемом',
                'verbose_name_plural': 'Комменатрии под мемами',
            },
        ),
        migrations.CreateModel(
            name='MemeLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('meme', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='memes.meme', verbose_name='Мем')),
            ],
            options={
                'verbose_name': 'Лайк мема',
                'verbose_name_plural': 'Лайки мемов',
            },
        ),
        migrations.CreateModel(
            name='MemeCommentLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='memes.memecomment', verbose_name='Комментарий')),
            ],
            options={
                'verbose_name': 'Лайк комменатрия под мемом',
                'verbose_name_plural': 'Лайки комменатрев под мемом',
            },
        ),
    ]
