import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message
from .serializers import MessageSerializer


@database_sync_to_async
def create_message(author, message):
    return Message.objects.create(author=author, text=message)


# Класс ChatConsumer
class ChatConsumer(AsyncWebsocketConsumer):

    # Метод подключения к WS
    async def connect(self):
        # Назначим пользователя в комнату
        self.room_group_name = "1"
        # Добавляем новую комнату
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        # Принимаем подключаем
        await self.accept()

    # Метод для отключения пользователя
    async def disconnect(self, close_code):
        # Отключаем пользователя
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Принимаем сообщение от пользователя
    async def receive(self, text_data=None, bytes_data=None):
        # Форматируем сообщение из JSON
        text_data_json = json.loads(text_data)
        # Получаем текст сообщения
        message = text_data_json['message']

        # Добавляем сообщение в БД
        user = self.scope["user"]
        if user.is_authenticated:
            new_message = await create_message(author=user, message=message)
            serializer = MessageSerializer(instance=new_message)
            # Отправляем сообщение
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': serializer.data,
                }
            )

    # Метод для отправки сообщения клиентам
    async def chat_message(self, event):
        # Получаем сообщение от receive
        message = event['message']
        # Отправляем сообщение клиентам
        await self.send(text_data=json.dumps({
            'message': message,
        }, ensure_ascii=False))
