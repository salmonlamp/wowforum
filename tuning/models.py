from django.db import models
from forum.models import ForumSubCategory


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.__class__.objects.exclude(id=self.id).delete()
        super(SingletonModel, self).save(*args, **kwargs)

    @classmethod
    def load(cls):
        try:
            return cls.objects.get()
        except cls.DoesNotExist:
            return cls()


class SiteSettings(SingletonModel):
    class Meta:
        verbose_name = 'Настройки сайта'
        verbose_name_plural = 'Настройки сайта'

    forum_subcategory_on_home = models.ForeignKey(ForumSubCategory, verbose_name='Подкатегория на главной',
                                                  null=True, on_delete=models.SET_NULL, )

    twitter = models.CharField('Twitter', max_length=250, null=True, blank=True)
    facebook = models.CharField('Facebook', max_length=250, null=True, blank=True)
    instagram = models.CharField('Instagram', max_length=250, null=True, blank=True)

    def __str__(self):
        return 'Настройки сайта'

