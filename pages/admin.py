from django.contrib import admin
from .models import *


class PageAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Page, PageAdmin)
