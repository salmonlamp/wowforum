from django.contrib import admin
from .models import *

admin.site.register(ForumCategory)
admin.site.register(ForumPost)
admin.site.register(ForumPostLike)
admin.site.register(ForumPostComment)
admin.site.register(ForumPostCommentLike)
