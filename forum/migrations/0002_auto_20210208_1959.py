# Generated by Django 3.1.5 on 2021-02-08 12:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='forumpostcomment',
            old_name='parentComment',
            new_name='parent',
        ),
    ]