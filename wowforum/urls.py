"""wowforum URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include(('account.urls', 'account'), namespace='account')),
    path('api/memes/', include(('memes.urls', 'memes'), namespace='memes')),
    path('api/forum/', include(('forum.urls', 'forum'), namespace='forum')),
    path('api/chat/', include(('chat.urls', 'chat'), namespace='chat')),
    path('', include(('frontend.urls', 'frontend'), namespace='frontend')),

    path("ckeditor5/", include('django_ckeditor_5.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
