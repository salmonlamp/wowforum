from rest_framework import serializers

from .models import Message
from account.serializers import UserSerializer


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('text', 'author')

    author = UserSerializer()
