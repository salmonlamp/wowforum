from django.db import models

from django.conf import settings

User = settings.AUTH_USER_MODEL


class Meme(models.Model):
    class Meta:
        verbose_name = 'Мем'
        verbose_name_plural = 'Мемы'

    def __str__(self):
        return self.title[:51]

    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    title = models.CharField('Подпись', max_length=250)
    image = models.ImageField('Изображение', upload_to='memes/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)


class MemeLike(models.Model):
    class Meta:
        verbose_name = 'Лайк мема'
        verbose_name_plural = 'Лайки мемов'

    meme = models.ForeignKey(Meme, verbose_name='Мем', on_delete=models.CASCADE, related_name='likes')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class MemeComment(models.Model):
    class Meta:
        verbose_name = 'Комменатрий под мемом'
        verbose_name_plural = 'Комменатрии под мемами'

    def __str__(self):
        return self.text[:51]

    meme = models.ForeignKey(Meme, verbose_name='Мем', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    parent = models.ForeignKey('MemeComment', verbose_name='Радительский комментарий', null=True, blank=True,
                               on_delete=models.CASCADE)


class MemeCommentLike(models.Model):
    class Meta:
        verbose_name = 'Лайк комменатрия под мемом'
        verbose_name_plural = 'Лайки комменатрев под мемом'

    comment = models.ForeignKey(MemeComment, verbose_name='Комментарий', on_delete=models.CASCADE, related_name='likes')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
