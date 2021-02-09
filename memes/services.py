from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from .models import *
from rest_framework.response import Response


def meme_like(user, meme_id):
    like, created = MemeLike.objects.get_or_create(meme_id=meme_id, author=user)
    if created:
        return Response(status=HTTP_201_CREATED)
    like.delete()
    return Response(status=HTTP_201_CREATED)


def meme_comment_like(user, comment_id):
    like, created = MemeCommentLike.objects.get_or_create(comment_id=comment_id, author=user)
    if created:
        return Response(status=HTTP_201_CREATED)
    like.delete()
    return Response(status=HTTP_201_CREATED)
