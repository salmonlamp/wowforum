# Generated by Django 3.1.5 on 2021-03-09 09:36

from django.db import migrations, models
import froala_editor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='forumpost',
            name='excerpt',
            field=models.TextField(default='', max_length=500, verbose_name='Кооткое описание'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forumpost',
            name='text',
            field=froala_editor.fields.FroalaField(verbose_name='Текст'),
        ),
    ]
