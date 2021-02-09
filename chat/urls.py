from django.urls import path

from . import views

app_name = 'memes'

urlpatterns = [
    path('list/', views.MessageListView.as_view()),
]
