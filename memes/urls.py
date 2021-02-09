from django.urls import path

from . import views

app_name = 'memes'

urlpatterns = [
    path(r'', views.MemeListView.as_view()),
    path('<int:pk>/like', views.MemeLikeView.as_view()),
    path('<int:pk>/comments', views.MemeCommentView.as_view()),
    path('comments/<int:pk>/like', views.MemeCommentLikeView.as_view()),
]
