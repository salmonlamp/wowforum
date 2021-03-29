from django.db import models

from django_ckeditor_5.fields import CKEditor5Field


class Page(models.Model):
    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'

    title = models.CharField('Заголовок', max_length=100)
    text = CKEditor5Field('Текст')
    slug = models.CharField('Слаг', max_length=120, unique=True)

    def __str__(self):
        return self.title[0:50]
