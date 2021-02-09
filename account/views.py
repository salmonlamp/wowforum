from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED

from .serializers import UserSignUpSerializer, UserSerializer, MyTokenObtainPairSerializer


class TokenObtainPairViewWithInfo(TokenObtainPairView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class UserCreateView(CreateAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)
    serializer_class = UserSignUpSerializer


class UserMeView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(instance=request.user)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data, instance=request.user)
        if serializer.is_valid():
            serializer.save()
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)
