from django.db import models

from django.conf import settings

User = settings.AUTH_USER_MODEL


class Message(models.Model):
    class Meta:
        verbose_name = 'Сообщение в чате'
        verbose_name_plural = 'Сообщения в чате'

    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
