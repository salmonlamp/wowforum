# Generated by Django 3.1.5 on 2021-03-09 03:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import froala_editor.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ForumCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название категории')),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
                'verbose_name': 'Категория форума',
                'verbose_name_plural': 'Категории форума',
            },
        ),
        migrations.CreateModel(
            name='ForumPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Заголовок')),
                ('image', models.ImageField(blank=True, null=True, upload_to='posts/%Y/%m/%d/', verbose_name='Изображение')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('text', froala_editor.fields.FroalaField(verbose_name='Text')),
                ('slug', models.SlugField(unique=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
            ],
            options={
                'verbose_name': 'Пост на форуме',
                'verbose_name_plural': 'Посты на форуме',
            },
        ),
        migrations.CreateModel(
            name='ForumPostComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('text', models.TextField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='forum.forumpostcomment', verbose_name='Радительский комментарий')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='forum.forumpost', verbose_name='Мем')),
            ],
            options={
                'verbose_name': 'Комменатрий под постом',
                'verbose_name_plural': 'Комменатрии под постами',
            },
        ),
        migrations.CreateModel(
            name='ForumSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название раздела')),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
                'verbose_name': 'Раздел форума',
                'verbose_name_plural': 'Разделы форума',
            },
        ),
        migrations.CreateModel(
            name='ForumSubCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название подраздела')),
                ('slug', models.SlugField(unique=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='subcategories', to='forum.forumcategory', verbose_name='Родительская категория')),
            ],
            options={
                'verbose_name': 'Подкатегория форума',
                'verbose_name_plural': 'Подкатегории форума',
            },
        ),
        migrations.CreateModel(
            name='ForumPostLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='forum.forumpost', verbose_name='Мем')),
            ],
            options={
                'verbose_name': 'Лайк поста',
                'verbose_name_plural': 'Лайки постов',
            },
        ),
        migrations.CreateModel(
            name='ForumPostCommentLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='forum.forumpostcomment', verbose_name='Комментарий')),
            ],
            options={
                'verbose_name': 'Лайк комменатрия под постом',
                'verbose_name_plural': 'Лайки комменатрев под постами',
            },
        ),
        migrations.AddField(
            model_name='forumpost',
            name='subcategory',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='forum.forumsubcategory', verbose_name='Подкатегория'),
        ),
        migrations.AddField(
            model_name='forumcategory',
            name='section',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='categories', to='forum.forumsection', verbose_name='Радительский раздел'),
        ),
    ]
