from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    avatar = models.ImageField('Аватар пользователя', upload_to='users/%Y/%m/%d/', blank=True, null=True)

    def __str__(self):
        return f'<{self.id}> {self.username}'
