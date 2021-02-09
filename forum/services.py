from rest_framework.status import HTTP_201_CREATED
from .models import *
from rest_framework.response import Response


def post_like(user, post_id):
    like, created = ForumPostLike.objects.get_or_create(post_id=post_id, author=user)
    if created:
        return Response(status=HTTP_201_CREATED)
    like.delete()
    return Response(status=HTTP_201_CREATED)


def post_comment_like(user, comment_id):
    like, created = ForumPostCommentLike.objects.get_or_create(comment_id=comment_id, author=user)
    if created:
        return Response(status=HTTP_201_CREATED)
    like.delete()
    return Response(status=HTTP_201_CREATED)
