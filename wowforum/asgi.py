import django
django.setup()

import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from .channelsmiddleware import TokenAuthMiddleware
import chat.routing

django_asgi_app = get_asgi_application()

os.environ['DJANGO_SETTINGS_MODULE'] = 'wowforum.settings'
os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": TokenAuthMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})
