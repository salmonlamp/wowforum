from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Page
from .serializers import PageSerializer, PageListSerializer


class PageListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Page.objects.all()
    serializer_class = PageListSerializer
    lookup_field = 'slug'


class PageRetrieveView(generics.RetrieveAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    lookup_field = 'slug'
