from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from . import views

urlpatterns = [
    path(
        'signup/',
        views.UserCreateView.as_view(),
        name='user_signup'
    ),
    path(
        'token/obtain/',
        views.TokenObtainPairViewWithInfo.as_view(),
        name='token_obtain_pair'
    ),
    path(
        'token/refresh/',
        jwt_views.TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path(
        'me/',
        views.UserMeView.as_view(),
        name='user_me'
    ),
]
