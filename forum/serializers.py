from rest_framework import serializers

from .models import ForumCategory, ForumPost, ForumPostLike, ForumPostComment, ForumPostCommentLike
from account.serializers import UserSerializer


class ForumCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumCategory
        fields = '__all__'


class ForumPostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = ('id', 'title', 'image', 'created_at', 'author', 'created_at', 'like_count', 'liked', 'comment_count')

    like_count = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()
    author = UserSerializer()

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_liked(self, obj):
        user = self.context.get("user")
        if user and user.is_authenticated:
            return ForumPostLike.objects.filter(author=user, post=obj).exists()
        return False

    def get_comment_count(self, obj):
        return obj.comments.count()


class ForumPostCommentAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPostComment
        fields = ('post', 'author', 'created_at', 'text', 'parent')


class ForumPostCommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPostComment
        fields = ('id', 'post', 'author', 'created_at', 'text', 'parent', 'like_count', 'liked',)

    like_count = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()
    author = UserSerializer()

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_liked(self, obj):
        user = self.context.get("user")
        if user and user.is_authenticated:
            return ForumPostCommentLike.objects.filter(author=user, comment=obj).exists()
        return False


class ForumPostSingleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = ('id', 'title', 'image', 'created_at', 'author', 'created_at', 'like_count', 'liked', 'comment_count',
                  'comments')

    like_count = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()
    author = UserSerializer()
    comments = ForumPostCommentListSerializer(many=True)

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_liked(self, obj):
        user = self.context.get("user")
        if user and user.is_authenticated:
            return ForumPostLike.objects.filter(author=user, post=obj).exists()
        return False

    def get_comment_count(self, obj):
        return obj.comments.count()
