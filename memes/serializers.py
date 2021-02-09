from rest_framework import serializers

from .models import Meme, MemeComment, MemeLike, MemeCommentLike
from account.serializers import UserSerializer


class MemeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meme
        fields = ('id', 'title', 'image', 'created_at',
                  'like_count', 'liked', 'author')

    like_count = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()
    author = UserSerializer()

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_liked(self, obj):
        user = self.context.get("user")
        if user and user.is_authenticated:
            return MemeLike.objects.filter(author=user, meme=obj).exists()
        return False


class MemeCommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemeComment
        fields = ('id', 'text', 'meme', 'author', 'parent',
                  'created_at', 'like_count', 'liked', 'author')

    like_count = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()
    author = UserSerializer()

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_liked(self, obj):
        user = self.context.get("user")
        if user and user.is_authenticated:
            return MemeCommentLike.objects.filter(author=user, comment=obj).exists()
        return False


class MemeCommentAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemeComment
        fields = ('text', 'meme', 'author', 'parent')
