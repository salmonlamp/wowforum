from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Message
from .serializers import MessageSerializer


class MessageListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Message.objects.order_by('created_at')[0:20]
    serializer_class = MessageSerializer
