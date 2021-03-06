from rest_framework import serializers

from .models import ForumSection, ForumCategory, ForumPost, ForumPostLike, ForumPostComment, ForumPostCommentLike, \
    ForumSubCategory
from account.serializers import UserSerializer


class ForumSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumSection
        fields = '__all__'


class ForumCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumCategory
        fields = '__all__'


class ForumSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumSubCategory
        fields = '__all__'


class ForumPostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = (
            'id', 'title', 'excerpt', 'image', 'created_at', 'author',
            'created_at', 'like_count', 'liked', 'comment_count'
        )

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


class ForumPostSingleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = (
            'id', 'title', 'excerpt', 'image', 'created_at', 'author', 'created_at',
            'text', 'like_count', 'liked', 'comment_count'
        )

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
