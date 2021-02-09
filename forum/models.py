from django.db import models

from django.conf import settings

User = settings.AUTH_USER_MODEL


class ForumCategory(models.Model):
    class Meta:
        verbose_name = 'Категория форума'
        verbose_name_plural = 'Категории форума'

    name = models.CharField('Название категории', max_length=50)

    def __str__(self):
        return self.name


class ForumPost(models.Model):
    class Meta:
        verbose_name = 'Пост на форуме'
        verbose_name_plural = 'Посты на форуме'

    category = models.ForeignKey(ForumCategory, verbose_name='Категория', on_delete=models.SET_NULL, null=True)
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    title = models.CharField('Заголовок', max_length=200)
    image = models.ImageField('Изображение', upload_to='posts/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)


class ForumPostLike(models.Model):
    class Meta:
        verbose_name = 'Лайк поста'
        verbose_name_plural = 'Лайки постов'

    post = models.ForeignKey(ForumPost, verbose_name='Мем', on_delete=models.CASCADE, related_name='likes')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class ForumPostComment(models.Model):
    class Meta:
        verbose_name = 'Комменатрий под постом'
        verbose_name_plural = 'Комменатрии под постами'

    def __str__(self):
        return self.text[:51]

    post = models.ForeignKey(ForumPost, verbose_name='Мем', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    parent = models.ForeignKey('ForumPostComment', verbose_name='Радительский комментарий', null=True,
                                      blank=True, on_delete=models.CASCADE)


class ForumPostCommentLike(models.Model):
    class Meta:
        verbose_name = 'Лайк комменатрия под постом'
        verbose_name_plural = 'Лайки комменатрев под постами'

    comment = models.ForeignKey(ForumPostComment, verbose_name='Комментарий', on_delete=models.CASCADE,
                                related_name='likes')
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)