import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from .channelsmiddleware import TokenAuthMiddleware
import chat.routing

os.environ['DJANGO_SETTINGS_MODULE'] = 'wowforum.settings'

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": TokenAuthMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})
