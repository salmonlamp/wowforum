from django.urls import path

from . import views

app_name = 'forum'

urlpatterns = [
    path('sections', views.ForumSectionListView.as_view()),
    path('sections/<int:pk>', views.ForumCategoryListView.as_view()),
    path('categories/<int:pk>', views.ForumSubCategoryListView.as_view()),
    path('subcategories/<int:pk>', views.ForumSubCategoryPostListView.as_view()),
    path('posts/<int:pk>', views.ForumPostSingleView.as_view()),
    path('posts/<int:pk>/like', views.ForumPostLikeView.as_view()),
    path('posts/<int:pk>/comments', views.ForumPostCommentView.as_view()),
    path('comments/<int:pk>/like', views.ForumPostCommentLikeView.as_view()),
    path('posts', views.ForumPostListOnHomePageView.as_view()),
]
