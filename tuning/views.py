from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsView(APIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (AllowAny,)

    def get(self, request):
        site_settings = SiteSettings.objects.first()
        serializer = SiteSettingsSerializer(site_settings)
        return Response(serializer.data)
