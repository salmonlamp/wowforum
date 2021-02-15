from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(ForumSection, CategoryAdmin)
admin.site.register(ForumCategory, CategoryAdmin)
admin.site.register(ForumSubCategory, CategoryAdmin)
admin.site.register(ForumPost, PostAdmin)
admin.site.register(ForumPostLike)
admin.site.register(ForumPostComment)
admin.site.register(ForumPostCommentLike)
