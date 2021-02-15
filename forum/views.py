from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import ForumSection, ForumCategory, ForumPost, ForumPostComment, ForumSubCategory
from .pagination import StandardResultsSetPagination
from .serializers import ForumCategorySerializer, ForumPostListSerializer, ForumPostSingleSerializer, \
    ForumPostCommentAddSerializer, ForumPostCommentListSerializer, ForumSectionSerializer, ForumSubCategorySerializer
from .services import post_like, post_comment_like


class ForumSectionListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = ForumSection.objects.all()
    serializer_class = ForumSectionSerializer


class ForumCategoryListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    queryset = ForumCategory.objects.all()
    serializer_class = ForumCategorySerializer

    def get_queryset(self):
        section_id = self.kwargs.get('pk')
        subcategory_list = ForumCategory.objects.filter(section_id=section_id)
        return subcategory_list


class ForumSubCategoryListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = ForumSubCategorySerializer

    def get_queryset(self):
        category_id = self.kwargs.get('pk')
        subcategory_list = ForumSubCategory.objects.filter(category_id=category_id)
        return subcategory_list


class ForumSubCategoryPostListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = ForumPostListSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        subcategory_id = self.kwargs.get('pk')
        post_list = ForumPost.objects.filter(subcategory_id=subcategory_id)
        return post_list

    def get_serializer_context(self):
        context = super(ForumSubCategoryPostListView, self).get_serializer_context()
        context.update({"user": self.request.user})
        return context


class ForumPostSingleView(generics.RetrieveAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = ForumPostSingleSerializer
    queryset = ForumPost.objects.all()

    def get_serializer_context(self):
        context = super(ForumPostSingleView, self).get_serializer_context()
        context.update({"user": self.request.user})
        return context


class ForumPostLikeView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        return post_like(request.user, pk)


class ForumPostCommentView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        pass

    def post(self, request, pk):
        post = get_object_or_404(ForumPost, pk=pk)
        serializer_data = {
            **request.data,
            **{
                'post': post.pk,
                'author': request.user.id,
            }
        }
        serializer = ForumPostCommentAddSerializer(data=serializer_data)
        if serializer.is_valid():
            new_comment = serializer.save()
            new_comment_serializer = ForumPostCommentListSerializer(instance=new_comment)
            return Response(new_comment_serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class ForumPostCommentLikeView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        return post_comment_like(request.user, pk)


class ForumAllPostsListView(generics.ListAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = ForumPostListSerializer
    queryset = ForumPost.objects.all()
