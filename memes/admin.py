from django.contrib import admin
from .models import *

admin.site.register(Meme)
admin.site.register(MemeLike)
admin.site.register(MemeComment)
admin.site.register(MemeCommentLike)
