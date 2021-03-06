"""
Django settings for wowforum project.

Generated by 'django-admin startproject' using Django 3.1.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
import os
from datetime import timedelta
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

load_dotenv(os.path.join(BASE_DIR, '.env'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    os.getenv('ALLOWED_HOSTS_IP'),
    os.getenv('ALLOWED_HOSTS_DOMAIN')
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'django_ckeditor_5',

    'tuning',

    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'channels',

    'frontend',
    'forum',
    'account',
    'memes',
    'chat',
    'pages',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'wowforum.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'wowforum.wsgi.application'
ASGI_APPLICATION = 'wowforum.asgi.application'

CHANNEL_LAYERS = {
    'default': {
        # 'BACKEND': 'channels_redis.core.RedisChannelLayer',
        "BACKEND": "channels.layers.InMemoryChannelLayer",
        # 'CONFIG': {
        #     "hosts": [('127.0.0.1', 57213)],
        # },
    },
}

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',  # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
            'NAME': 'db.sqlite3',  # Or path to database file if using sqlite3.
            'USER': '',  # Not used with sqlite3.
            'PASSWORD': '',  # Not used with sqlite3.
            'HOST': '',  # Set to empty string for localhost. Not used with sqlite3.
            'PORT': '',  # Set to empty string for default. Not used with sqlite3.
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.getenv('POSTGRES_DB'),
            'USER': os.getenv('POSTGRES_USER'),
            'PASSWORD': os.getenv('POSTGRES_PASSWORD'),
            'HOST': 'localhost',
            'PORT': 5432,
        },
    }

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

AUTH_USER_MODEL = 'account.User'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    )
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=30),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': False,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('JWT',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

LOGIN_URL = '/login'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/login'

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = [
    'http://localhost:8000',
    'http://localhost:3000',
    'http://127.0.0.1:8000',
    'http://127.0.0.1:3000',
    'http://wow.salmontest.ru',
]

customColorPalette = [
    {'color': 'hsl(6, 54%, 95%)', 'label': ' '}, {'color': 'hsl(6, 54%, 89%)', 'label': ' '},
    {'color': 'hsl(6, 54%, 78%)', 'label': ' '}, {'color': 'hsl(6, 54%, 68%)', 'label': ' '},
    {'color': 'hsl(6, 54%, 57%)', 'label': ' '}, {'color': 'hsl(6, 63%, 46%)', 'label': ' '},
    {'color': 'hsl(6, 63%, 41%)', 'label': ' '}, {'color': 'hsl(6, 63%, 35%)', 'label': ' '},
    {'color': 'hsl(6, 63%, 29%)', 'label': ' '}, {'color': 'hsl(6, 63%, 24%)', 'label': ' '},
    {'color': 'hsl(6, 78%, 96%)', 'label': ' '}, {'color': 'hsl(6, 78%, 91%)', 'label': ' '},
    {'color': 'hsl(6, 78%, 83%)', 'label': ' '}, {'color': 'hsl(6, 78%, 74%)', 'label': ' '},
    {'color': 'hsl(6, 78%, 66%)', 'label': ' '}, {'color': 'hsl(6, 78%, 57%)', 'label': ' '},
    {'color': 'hsl(6, 59%, 50%)', 'label': ' '}, {'color': 'hsl(6, 59%, 43%)', 'label': ' '},
    {'color': 'hsl(6, 59%, 37%)', 'label': ' '}, {'color': 'hsl(6, 59%, 30%)', 'label': ' '},
    {'color': 'hsl(283, 39%, 95%)', 'label': ' '}, {'color': 'hsl(283, 39%, 91%)', 'label': ' '},
    {'color': 'hsl(283, 39%, 81%)', 'label': ' '}, {'color': 'hsl(283, 39%, 72%)', 'label': ' '},
    {'color': 'hsl(283, 39%, 63%)', 'label': ' '}, {'color': 'hsl(283, 39%, 53%)', 'label': ' '},
    {'color': 'hsl(283, 34%, 47%)', 'label': ' '}, {'color': 'hsl(283, 34%, 40%)', 'label': ' '},
    {'color': 'hsl(283, 34%, 34%)', 'label': ' '}, {'color': 'hsl(283, 34%, 28%)', 'label': ' '},
    {'color': 'hsl(282, 39%, 95%)', 'label': ' '}, {'color': 'hsl(282, 39%, 89%)', 'label': ' '},
    {'color': 'hsl(282, 39%, 79%)', 'label': ' '}, {'color': 'hsl(282, 39%, 68%)', 'label': ' '},
    {'color': 'hsl(282, 39%, 58%)', 'label': ' '}, {'color': 'hsl(282, 44%, 47%)', 'label': ' '},
    {'color': 'hsl(282, 44%, 42%)', 'label': ' '}, {'color': 'hsl(282, 44%, 36%)', 'label': ' '},
    {'color': 'hsl(282, 44%, 30%)', 'label': ' '}, {'color': 'hsl(282, 44%, 25%)', 'label': ' '},
    {'color': 'hsl(204, 51%, 94%)', 'label': ' '}, {'color': 'hsl(204, 51%, 89%)', 'label': ' '},
    {'color': 'hsl(204, 51%, 78%)', 'label': ' '}, {'color': 'hsl(204, 51%, 67%)', 'label': ' '},
    {'color': 'hsl(204, 51%, 55%)', 'label': ' '}, {'color': 'hsl(204, 64%, 44%)', 'label': ' '},
    {'color': 'hsl(204, 64%, 39%)', 'label': ' '}, {'color': 'hsl(204, 64%, 34%)', 'label': ' '},
    {'color': 'hsl(204, 64%, 28%)', 'label': ' '}, {'color': 'hsl(204, 64%, 23%)', 'label': ' '},
    {'color': 'hsl(204, 70%, 95%)', 'label': ' '}, {'color': 'hsl(204, 70%, 91%)', 'label': ' '},
    {'color': 'hsl(204, 70%, 81%)', 'label': ' '}, {'color': 'hsl(204, 70%, 72%)', 'label': ' '},
    {'color': 'hsl(204, 70%, 63%)', 'label': ' '}, {'color': 'hsl(204, 70%, 53%)', 'label': ' '},
    {'color': 'hsl(204, 62%, 47%)', 'label': ' '}, {'color': 'hsl(204, 62%, 40%)', 'label': ' '},
    {'color': 'hsl(204, 62%, 34%)', 'label': ' '}, {'color': 'hsl(204, 62%, 28%)', 'label': ' '},
    {'color': 'hsl(168, 55%, 94%)', 'label': ' '}, {'color': 'hsl(168, 55%, 88%)', 'label': ' '},
    {'color': 'hsl(168, 55%, 77%)', 'label': ' '}, {'color': 'hsl(168, 55%, 65%)', 'label': ' '},
    {'color': 'hsl(168, 55%, 54%)', 'label': ' '}, {'color': 'hsl(168, 76%, 42%)', 'label': ' '},
    {'color': 'hsl(168, 76%, 37%)', 'label': ' '}, {'color': 'hsl(168, 76%, 32%)', 'label': ' '},
    {'color': 'hsl(168, 76%, 27%)', 'label': ' '}, {'color': 'hsl(168, 76%, 22%)', 'label': ' '},
    {'color': 'hsl(168, 42%, 94%)', 'label': ' '}, {'color': 'hsl(168, 42%, 87%)', 'label': ' '},
    {'color': 'hsl(168, 42%, 74%)', 'label': ' '}, {'color': 'hsl(168, 42%, 61%)', 'label': ' '},
    {'color': 'hsl(168, 45%, 49%)', 'label': ' '}, {'color': 'hsl(168, 76%, 36%)', 'label': ' '},
    {'color': 'hsl(168, 76%, 31%)', 'label': ' '}, {'color': 'hsl(168, 76%, 27%)', 'label': ' '},
    {'color': 'hsl(168, 76%, 23%)', 'label': ' '}, {'color': 'hsl(168, 76%, 19%)', 'label': ' '},
    {'color': 'hsl(145, 45%, 94%)', 'label': ' '}, {'color': 'hsl(145, 45%, 88%)', 'label': ' '},
    {'color': 'hsl(145, 45%, 77%)', 'label': ' '}, {'color': 'hsl(145, 45%, 65%)', 'label': ' '},
    {'color': 'hsl(145, 45%, 53%)', 'label': ' '}, {'color': 'hsl(145, 63%, 42%)', 'label': ' '},
    {'color': 'hsl(145, 63%, 37%)', 'label': ' '}, {'color': 'hsl(145, 63%, 32%)', 'label': ' '},
    {'color': 'hsl(145, 63%, 27%)', 'label': ' '}, {'color': 'hsl(145, 63%, 22%)', 'label': ' '},
    {'color': 'hsl(145, 61%, 95%)', 'label': ' '}, {'color': 'hsl(145, 61%, 90%)', 'label': ' '},
    {'color': 'hsl(145, 61%, 80%)', 'label': ' '}, {'color': 'hsl(145, 61%, 69%)', 'label': ' '},
    {'color': 'hsl(145, 61%, 59%)', 'label': ' '}, {'color': 'hsl(145, 63%, 49%)', 'label': ' '},
    {'color': 'hsl(145, 63%, 43%)', 'label': ' '}, {'color': 'hsl(145, 63%, 37%)', 'label': ' '},
    {'color': 'hsl(145, 63%, 31%)', 'label': ' '}, {'color': 'hsl(145, 63%, 25%)', 'label': ' '},
    {'color': 'hsl(48, 89%, 95%)', 'label': ' '}, {'color': 'hsl(48, 89%, 90%)', 'label': ' '},
    {'color': 'hsl(48, 89%, 80%)', 'label': ' '}, {'color': 'hsl(48, 89%, 70%)', 'label': ' '},
    {'color': 'hsl(48, 89%, 60%)', 'label': ' '}, {'color': 'hsl(48, 89%, 50%)', 'label': ' '},
    {'color': 'hsl(48, 88%, 44%)', 'label': ' '}, {'color': 'hsl(48, 88%, 38%)', 'label': ' '},
    {'color': 'hsl(48, 88%, 32%)', 'label': ' '}, {'color': 'hsl(48, 88%, 26%)', 'label': ' '},
    {'color': 'hsl(37, 90%, 95%)', 'label': ' '}, {'color': 'hsl(37, 90%, 90%)', 'label': ' '},
    {'color': 'hsl(37, 90%, 80%)', 'label': ' '}, {'color': 'hsl(37, 90%, 71%)', 'label': ' '},
    {'color': 'hsl(37, 90%, 61%)', 'label': ' '}, {'color': 'hsl(37, 90%, 51%)', 'label': ' '},
    {'color': 'hsl(37, 86%, 45%)', 'label': ' '}, {'color': 'hsl(37, 86%, 39%)', 'label': ' '},
    {'color': 'hsl(37, 86%, 33%)', 'label': ' '}, {'color': 'hsl(37, 86%, 27%)', 'label': ' '},
    {'color': 'hsl(28, 80%, 95%)', 'label': ' '}, {'color': 'hsl(28, 80%, 90%)', 'label': ' '},
    {'color': 'hsl(28, 80%, 81%)', 'label': ' '}, {'color': 'hsl(28, 80%, 71%)', 'label': ' '},
    {'color': 'hsl(28, 80%, 61%)', 'label': ' '}, {'color': 'hsl(28, 80%, 52%)', 'label': ' '},
    {'color': 'hsl(28, 74%, 46%)', 'label': ' '}, {'color': 'hsl(28, 74%, 39%)', 'label': ' '},
    {'color': 'hsl(28, 74%, 33%)', 'label': ' '}, {'color': 'hsl(28, 74%, 27%)', 'label': ' '},
    {'color': 'hsl(24, 71%, 94%)', 'label': ' '}, {'color': 'hsl(24, 71%, 88%)', 'label': ' '},
    {'color': 'hsl(24, 71%, 77%)', 'label': ' '}, {'color': 'hsl(24, 71%, 65%)', 'label': ' '},
    {'color': 'hsl(24, 71%, 53%)', 'label': ' '}, {'color': 'hsl(24, 100%, 41%)', 'label': ' '},
    {'color': 'hsl(24, 100%, 36%)', 'label': ' '}, {'color': 'hsl(24, 100%, 31%)', 'label': ' '},
    {'color': 'hsl(24, 100%, 26%)', 'label': ' '}, {'color': 'hsl(24, 100%, 22%)', 'label': ' '},
    {'color': 'hsl(192, 15%, 99%)', 'label': ' '}, {'color': 'hsl(192, 15%, 99%)', 'label': ' '},
    {'color': 'hsl(192, 15%, 97%)', 'label': ' '}, {'color': 'hsl(192, 15%, 96%)', 'label': ' '},
    {'color': 'hsl(192, 15%, 95%)', 'label': ' '}, {'color': 'hsl(192, 15%, 94%)', 'label': ' '},
    {'color': 'hsl(192, 5%, 82%)', 'label': ' '}, {'color': 'hsl(192, 3%, 71%)', 'label': ' '},
    {'color': 'hsl(192, 2%, 60%)', 'label': ' '}, {'color': 'hsl(192, 1%, 49%)', 'label': ' '},
    {'color': 'hsl(204, 8%, 98%)', 'label': ' '}, {'color': 'hsl(204, 8%, 95%)', 'label': ' '},
    {'color': 'hsl(204, 8%, 90%)', 'label': ' '}, {'color': 'hsl(204, 8%, 86%)', 'label': ' '},
    {'color': 'hsl(204, 8%, 81%)', 'label': ' '}, {'color': 'hsl(204, 8%, 76%)', 'label': ' '},
    {'color': 'hsl(204, 5%, 67%)', 'label': ' '}, {'color': 'hsl(204, 4%, 58%)', 'label': ' '},
    {'color': 'hsl(204, 3%, 49%)', 'label': ' '}, {'color': 'hsl(204, 3%, 40%)', 'label': ' '},
    {'color': 'hsl(184, 9%, 96%)', 'label': ' '}, {'color': 'hsl(184, 9%, 92%)', 'label': ' '},
    {'color': 'hsl(184, 9%, 85%)', 'label': ' '}, {'color': 'hsl(184, 9%, 77%)', 'label': ' '},
    {'color': 'hsl(184, 9%, 69%)', 'label': ' '}, {'color': 'hsl(184, 9%, 62%)', 'label': ' '},
    {'color': 'hsl(184, 6%, 54%)', 'label': ' '}, {'color': 'hsl(184, 5%, 47%)', 'label': ' '},
    {'color': 'hsl(184, 5%, 40%)', 'label': ' '}, {'color': 'hsl(184, 5%, 32%)', 'label': ' '},
    {'color': 'hsl(184, 6%, 95%)', 'label': ' '}, {'color': 'hsl(184, 6%, 91%)', 'label': ' '},
    {'color': 'hsl(184, 6%, 81%)', 'label': ' '}, {'color': 'hsl(184, 6%, 72%)', 'label': ' '},
    {'color': 'hsl(184, 6%, 62%)', 'label': ' '}, {'color': 'hsl(184, 6%, 53%)', 'label': ' '},
    {'color': 'hsl(184, 5%, 46%)', 'label': ' '}, {'color': 'hsl(184, 5%, 40%)', 'label': ' '},
    {'color': 'hsl(184, 5%, 34%)', 'label': ' '}, {'color': 'hsl(184, 5%, 27%)', 'label': ' '},
    {'color': 'hsl(210, 12%, 93%)', 'label': ' '}, {'color': 'hsl(210, 12%, 86%)', 'label': ' '},
    {'color': 'hsl(210, 12%, 71%)', 'label': ' '}, {'color': 'hsl(210, 12%, 57%)', 'label': ' '},
    {'color': 'hsl(210, 15%, 43%)', 'label': ' '}, {'color': 'hsl(210, 29%, 29%)', 'label': ' '},
    {'color': 'hsl(210, 29%, 25%)', 'label': ' '}, {'color': 'hsl(210, 29%, 22%)', 'label': ' '},
    {'color': 'hsl(210, 29%, 18%)', 'label': ' '}, {'color': 'hsl(210, 29%, 15%)', 'label': ' '},
    {'color': 'hsl(210, 9%, 92%)', 'label': ' '}, {'color': 'hsl(210, 9%, 85%)', 'label': ' '},
    {'color': 'hsl(210, 9%, 70%)', 'label': ' '}, {'color': 'hsl(210, 9%, 55%)', 'label': ' '},
    {'color': 'hsl(210, 14%, 39%)', 'label': ' '}, {'color': 'hsl(210, 29%, 24%)', 'label': ' '},
    {'color': 'hsl(210, 29%, 21%)', 'label': ' '}, {'color': 'hsl(210, 29%, 18%)', 'label': ' '},
    {'color': 'hsl(210, 29%, 16%)', 'label': ' '}, {'color': 'hsl(210, 29%, 13%)', 'label': ' '}
]

# CKEDITOR_5_CUSTOM_CSS = 'path_to.css'  # optional
CKEDITOR_5_CONFIGS = {
    'default': {
        'blockToolbar': [
            'paragraph', 'heading1', 'heading2', 'heading3',
            '|',
            'bulletedList', 'numberedList',
            '|',
            'blockQuote', 'imageUpload'
        ],
        'fontColor': {
            'colors': customColorPalette
        },
        'fontBackgroundColor': {
            'colors': customColorPalette
        },
        'toolbar': [
            'heading', '|', 'outdent', 'indent', '|', 'bold', 'italic', 'link', 'underline', 'strikethrough',
            'code', 'subscript', 'superscript', 'highlight', '|',
            'bulletedList', 'numberedList', 'todoList', '|', 'blockQuote', 'imageUpload', '|',
            'alignment', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'mediaEmbed', 'removeFormat',
            'insertTable', 'accordion', 'fullScreen', 'row', 'htmlEmbed',
            'videoUpload', 'removeFormat',
        ],
        'image': {
            'styles': [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
            'resizeOptions': [
                {
                    'name': 'resizeImage:original',
                    'label': 'Original',
                    'value': None
                },
                {
                    'name': 'resizeImage:50',
                    'label': '25%',
                    'value': '25'
                },
                {
                    'name': 'resizeImage:50',
                    'label': '35%',
                    'value': '35'
                },
                {
                    'name': 'resizeImage:50',
                    'label': '50%',
                    'value': '50'
                },
                {
                    'name': 'resizeImage:75',
                    'label': '75%',
                    'value': '75'
                },
                {
                    'name': 'resizeImage:100',
                    'label': '100%',
                    'value': '100'
                }
            ],
            'toolbar': [
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                '|',
                'imageResize',
                '|',
                'imageTextAlternative'
            ]
        },
        'table': {
            'contentToolbar': [
                'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties'
            ],
            'tableProperties': {
                'borderColors': customColorPalette,
                'backgroundColors': customColorPalette
            },
            'tableCellProperties': {
                'borderColors': customColorPalette,
                'backgroundColors': customColorPalette
            }
        },
        'heading': {
            'options': [
                {'model': 'paragraph', 'title': 'Paragraph', 'class': 'ck-heading_paragraph'},
                {'model': 'heading1', 'view': 'h1', 'title': 'Heading 1', 'class': 'ck-heading_heading1'},
                {'model': 'heading2', 'view': 'h2', 'title': 'Heading 2', 'class': 'ck-heading_heading2'},
                {'model': 'heading3', 'view': 'h3', 'title': 'Heading 3', 'class': 'ck-heading_heading3'}
            ]
        },
        'fontSize': {
            'options': [n for n in range(14, 73, 2)]
        },
        'video': {
            'styles': [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
            'resizeOptions': [
                {
                    'name': 'resizeImage:original',
                    'label': 'Original',
                    'value': None
                },
                {
                    'name': 'resizeImage:50',
                    'label': '25%',
                    'value': '25'
                },
                {
                    'name': 'resizeImage:50',
                    'label': '35%',
                    'value': '35'
                },
                {
                    'name': 'resizeImage:50',
                    'label': '50%',
                    'value': '50'
                },
                {
                    'name': 'resizeImage:75',
                    'label': '75%',
                    'value': '75'
                },
                {
                    'name': 'resizeImage:100',
                    'label': '100%',
                    'value': '100'
                }
            ],
            'toolbar': [
                'videoStyle:alignLeft', 'videoStyle:alignCenter', 'videoStyle:alignRight',
                '|',
                'videoResize',
            ],
        },
    }
}
