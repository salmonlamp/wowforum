from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Meme, MemeComment
from .pagination import StandardResultsSetPagination
from .serializers import MemeListSerializer, MemeCommentAddSerializer, MemeCommentListSerializer
from .services import meme_like, meme_comment_like


class MemeListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Meme.objects.all()
    serializer_class = MemeListSerializer
    pagination_class = StandardResultsSetPagination

    def get_serializer_context(self):
        context = super(MemeListView, self).get_serializer_context()
        context.update({"user": self.request.user})
        return context


class MemeLikeView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        return meme_like(request.user, pk)


class MemeCommentView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        comment_list = MemeComment.objects.filter(meme_id=pk)
        serializer = MemeCommentListSerializer(comment_list, many=True, context={'user': request.user})
        return Response(serializer.data)

    def post(self, request, pk):
        meme = get_object_or_404(Meme, pk=pk)
        serializer_data = {
            **request.data,
            **{
                'meme': meme.pk,
                'author': request.user.id,
            }
        }
        serializer = MemeCommentAddSerializer(data=serializer_data)
        if serializer.is_valid():
            new_comment = serializer.save()
            new_comment_serializer = MemeCommentListSerializer(instance=new_comment)
            return Response(new_comment_serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class MemeCommentLikeView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        return meme_comment_like(request.user, pk)
