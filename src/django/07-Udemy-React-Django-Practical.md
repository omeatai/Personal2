## +Udemy-React and Django: A Practical Guide with Docker

## [COURSE](https://www.udemy.com/course/react-django-admin/)

<details>
<summary>1. Creating a New Django Project: admin_project </summary>

# Creating a New Django Project: admin_project

## Install venv

```x
python -m venv venv
```

## Activate venv

```x
# venv\Scripts\activate
source venv/bin/activate
```

## Install Django

```x
python -m pip install Django
pip install django
pip install django==5.0
```

## Install Other Project Dependencies: djangorestframework, markdown, django-filter, mock, Pillow, mysqlclient, django-mysql, python-decouple

```x
pip install djangorestframework markdown django-filter mock pillow django-mysql python-decouple
```

```x
brew install mysql
xcode-select --install
pip install mysqlclient
```

## Get dependencies

```x
pip freeze
```

```x
asgiref==3.8.1
Django==5.0.6
django-filter==24.2
django-mysql==4.14.0
djangorestframework==3.15.2
Markdown==3.6
mock==5.1.0
mysqlclient==2.2.4
pillow==10.4.0
python-decouple==3.8
sqlparse==0.5.0
```

## Save Dependencies to Requirements.txt

```x
pip freeze > requirements.txt
```

## Install requirements from Requirements.txt

```x
pip install -r requirements.txt
```

## Deactivate a virtual environment

```x
deactivate
```

## Create Django Project

```x
django-admin startproject admin_project .
```

## Create Django App - users

```x
python manage.py startapp users_app
```

### src-AI-Software/my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # apps
    'rest_framework',
    'users_app'
]
```

## Run Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

## Start Local Server

```x
python manage.py runserver
```

```x
(venv) ➜  07_react_django_practical git:(main) ✗ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
July 10, 2024 - 19:44:10
Django version 5.0.7, using settings 'admin_project.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/e39eef9e-8179-4904-83ba-c12faed70e02)

# #END</details>

<details>
<summary>2. Install and Configure Mysql for Django </summary>

# Install and Configure Mysql for Django

## Install Xampp for MAC

## [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

<img width="782" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/86956fc2-76a0-494c-8737-3fc3129ab6a5">
<img width="782" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0af54b4b-e1f9-49b6-b789-8e0d81d716be">

### src-AI-Software/my_projects/07_react_django_practical/admin_project/settings.py:

```py
from decouple import config
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # apps
    'rest_framework',
    'users_app'
]

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('MYSQL_DATABASE'),
        'USER': config('MYSQL_USER'),
        'PASSWORD': config('MYSQL_PASSWORD'),
        'HOST': config('MYSQL_HOST', 'localhost'),
        'PORT': config('MYSQL_PORT', '3306'),
    }
}

```

### src-AI-Software/my_projects/07_react_django_practical/.env:

```py
# Django settings
SECRET_KEY=

# MySQL settings
MYSQL_DATABASE=django_admin
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
```

## Run Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

## Create Super User

```x
python manage.py createsuperuser --email admin@gmail.com
```

## Run Django Server

```x
python manage.py runserver
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/dee55471-f825-42a2-b179-916973cd6cfa)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/2ac4b996-2062-447c-9ff9-07becae9424c)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a7e03e05-0c7e-469d-aa23-3a89186cfa87)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d2c6896a-0b27-4a40-91b2-88119a0775d8)

<img width="1452" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/fe94c7d6-9d4b-434b-82d9-b674bc0575d6">
<img width="1452" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6a9d93d1-2b36-458b-812c-87e8f8101a1f">

# #END</details>

<details>
<summary>3. Create Rest API Endpoints with URLs and Views </summary>

# Create Rest API Endpoints with URLs and Views

## src-AI-Software/my_projects/07_react_django_practical/admin_project/urls.py:

```py
"""
URL configuration for admin_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('users_app.urls')),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello, name='hello'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def hello(request):
    if request.method == 'GET':
        return Response('This is the GET EndPoint')
        # return render(request, 'index.html')
    elif request.method == 'POST':
        return Response('This is the POST EndPoint')


```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c181d371-f711-40a0-9a0e-fc82ec8d9199)

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/26bc0cd7-3b32-41dd-99a0-d152cfb1e58d">
<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/17b999be-5a77-4270-a94d-32110a52e8cd">
<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d4f79bce-ec17-402f-8913-de7cb64f04e6">

# #END</details>

<details>
<summary>4. Create Models </summary>

# Create Models

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User


@api_view(['GET', 'POST'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        context = {
            'users': users
        }
        return Response(context)

    elif request.method == 'POST':
        return Response('This is the POST EndPoint')

```



### src-AI-Software/my_projects/07_react_django_practical/users_app/admin.py:

```py
from django.contrib import admin
from . import models


class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'created_at', 'updated_at']
    search_fields = ['first_name', 'last_name', 'email']
    list_filter = ['created_at', 'updated_at']
    list_per_page = 10


admin.site.register(models.User, UserAdmin)

```

## Run Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/713b9025-fcac-4a15-b42b-aaee5ac8d2a5)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/be34981e-27cd-4677-8785-ba57532c15b6)

<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/1ff2c827-8493-4374-bde8-baddba5a3e05">
<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/1bd1b203-4da1-43a8-88b4-56aa4b9e759b">
<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/7843894f-ea6b-4362-b920-fdf49010bc92">


# #END</details>

<details>
<summary>5. Create Serializers for Register Endpoint </summary>

# Create Serializers for Register Endpoint

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)
```

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer
from .models import User


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)

    # member = Member.objects.create(
    #     first_name=data['first_name'],
    #     last_name=data['last_name'],
    #     email=data['email'],
    #     password=data['password']
    # )
    # return Response('Member was created successfully')


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        user = User.objects.create(**validated_data)
        # user.set_password(password) # Need to hash Password
        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/4a604f5b-e770-4e08-bda2-a406e280e445)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7014f6b1-321c-4ba4-9fee-560c66c730c6)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/0e3c9020-422e-49cc-894b-783d7c448b62)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/1653963a-6913-4508-ac21-b36e48b6607f)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/70971552-7ce9-41ba-b80c-6902f9dc4b3f)

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/db8858cd-c26f-45d7-b716-01323eed32e4">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7c0194c1-058d-4935-a824-0fac8bed4922)

<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/175e99a8-8094-4d0c-a59c-35c188b3572e">
<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6d3d2b37-5ce4-4916-8101-722df1bf1085">

# #END</details>

<details>
<summary>6. Hash Passwords with Abstract Class </summary>

# Hash Passwords with Abstract Class

### src-AI-Software/my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users_app.User'
```

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

## Run Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/admin.py:

```py
from django.contrib import admin
from . import models


class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'password', 'created_at', 'updated_at']
    search_fields = ['first_name', 'last_name', 'email']
    list_filter = ['created_at', 'updated_at']
    list_per_page = 10


admin.site.register(models.User, UserAdmin)

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d83c4521-5a93-41f4-9065-6d38215008de)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c1985ab6-ac52-455f-b5f2-5710c2eb3522)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d4fa8034-762a-45aa-a69a-a94c08aac467)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/9de28741-8897-4b78-ab7f-8043d63842bc)

<img width="1485" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/9c38fcac-c0ad-4ab6-9e29-fce693a25abe">

# #END</details>

<details>
<summary>7. Create Login Endpoint </summary>

# Create Login Endpoint

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer
from .models import User


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')
    serializer = UserSerializer(user)
    return Response({'token': 'success', 'user': serializer.data})


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/dae80357-866a-4667-92af-21bc4fc057ad">
<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/e0e30590-31e9-4296-b291-1a90137df030">
<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/593aaee9-48c6-42ed-ba23-af1db8859945">

# #END</details>

<details>
<summary>8. Generate JWT Token </summary>

# Generate JWT Token

## Install JWT Package

```x
pip install PyJWT
```

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/auth.py:

```py
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import exceptions
from rest_framework.authentication import BaseAuthentication

import jwt
import datetime


def generate_access_token(user):
    payload = {
        'user_id': user.id,
        'exp': datetime.datetime.now(datetime.UTC) + datetime.timedelta(minutes=60),
        'iat': datetime.datetime.now(datetime.UTC)
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')


class JWTAuth(BaseAuthentication):

    def authenticate(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            return None

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed('unauthenticated')

        # user = User.objects.filter(id=payload['id']).first()
        user = get_user_model().objects.filter(id=payload['user_id']).first()

        if user is None:
            raise exceptions.AuthenticationFailed('User not found')
        return (user, None)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer
from .models import User
from .auth import generate_access_token


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

<img width="1491" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/59473f13-d1cd-4ff6-870f-ec2312465852">
<img width="1491" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/40bdeb5e-87ed-474a-9d1c-9de8d62ddf8f">
<img width="1421" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/9a867f8a-53b2-4c74-9946-10319e35c862">

# #END</details>

<details>
<summary>9. Verify UserAuth - Getting Authenticated User </summary>

# Verify UserAuth - Getting Authenticated User

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
# from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# import jwt

from .serializers import UserSerializer
from .models import User
from .auth import generate_access_token, JWTAuth


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})

        # token = request.COOKIES.get('jwt')
        # if not token:
        #     raise exceptions.AuthenticationFailed('Unauthenticated')

        # try:
        #     payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        # except jwt.ExpiredSignatureError:
        #     raise exceptions.AuthenticationFailed('Unauthenticated')

        # user = User.objects.filter(id=payload['id']).first()
        # serializer = UserSerializer(user)
        # return Response(serializer.data)


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/auth.py:

```py
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import exceptions
from rest_framework.authentication import BaseAuthentication

import jwt
import datetime


def generate_access_token(user):
    payload = {
        'user_id': user.id,
        'exp': datetime.datetime.now(datetime.UTC) + datetime.timedelta(minutes=60),
        'iat': datetime.datetime.now(datetime.UTC)
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')


class JWTAuth(BaseAuthentication):

    def authenticate(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            return None

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed('unauthenticated')

        # user = User.objects.filter(id=payload['id']).first()
        user = get_user_model().objects.filter(id=payload['user_id']).first()

        if user is None:
            raise exceptions.AuthenticationFailed('User not found')
        return (user, None)

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a8df1435-e312-47a3-bf31-bdcbdd6eb249)

<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d9118218-fe57-4150-9001-cefa5c0e51b8">

# #END</details>

<details>
<summary>10. Create Logout Endpoint </summary>

# Create Logout Endpoint

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
# from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
# import jwt

from .serializers import UserSerializer
from .models import User
from .auth import generate_access_token, JWTAuth


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})

        # token = request.COOKIES.get('jwt')
        # if not token:
        #     raise exceptions.AuthenticationFailed('Unauthenticated')

        # try:
        #     payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        # except jwt.ExpiredSignatureError:
        #     raise exceptions.AuthenticationFailed('Unauthenticated')

        # user = User.objects.filter(id=payload['id']).first()
        # serializer = UserSerializer(user)
        # return Response(serializer.data)


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0bfdd52a-c940-4dfd-ad9a-0efcf2e128cb">
<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5a209006-76c1-44c0-b065-2b7c8594ba55">
<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/973ba258-40ee-4423-bdc4-82cb55e4a177">
<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/096f7201-d2dd-4cc4-9975-cdb5082bf934">

# #END</details>

<details>
<summary>11. Create Role and Permission Models </summary>

# Create Role and Permission Models

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.contrib.auth.models import AbstractUser
from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Permissions'
        verbose_name = 'Permission'

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission)

    class Meta:
        verbose_name_plural = 'Roles'
        verbose_name = 'Role'

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    role = models.ForeignKey(
        Role, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

## Run Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f89327d9-113f-46ab-a904-e9e06fb536d3)

<img width="1421" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/b3bdd63c-48af-431d-b8c7-2d9fcdf676f8">

# #END</details>

<details>
<summary>12. Load Data into Permission, Role and User Models using Fixtures </summary>

# Load Data into Permission, Role and User Models using Fixtures

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.contrib.auth.models import AbstractUser
from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Permissions'
        verbose_name = 'Permission'

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission)

    class Meta:
        verbose_name_plural = 'Roles'
        verbose_name = 'Role'

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    role = models.ForeignKey(
        Role, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

### src-AI-Software/my_projects/07_react_django_practical/fixtures/permissions.json:

```json
[
    {
        "model": "users_app.permission",
        "pk": 1,
        "fields": {
            "name": "view_users_apps"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 2,
        "fields": {
            "name": "edit_users_apps"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 3,
        "fields": {
            "name": "view_roles"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 4,
        "fields": {
            "name": "edit_roles"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 5,
        "fields": {
            "name": "view_products"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 6,
        "fields": {
            "name": "edit_products"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 7,
        "fields": {
            "name": "view_orders"
        }
    },
    {
        "model": "users_app.permission",
        "pk": 8,
        "fields": {
            "name": "edit_orders"
        }
    }
]
```

### src-AI-Software/my_projects/07_react_django_practical/fixtures/roles.json:

```json
[
    {
        "model": "users_app.role",
        "pk": 1,
        "fields": {
            "name": "Admin",
            "permissions": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ]
        }
    },
    {
        "model": "users_app.role",
        "pk": 2,
        "fields": {
            "name": "Editor",
            "permissions": [
                1,
                2,
                3,
                5,
                6,
                7,
                8
            ]
        }
    },
    {
        "model": "users_app.role",
        "pk": 3,
        "fields": {
            "name": "Viewer",
            "permissions": [
                1,
                3,
                5,
                7
            ]
        }
    }
]
```

### src-AI-Software/my_projects/07_react_django_practical/fixtures/users.json:

```json
[
    {
        "model": "users_app.user",
        "pk": 2,
        "fields": {
            "last_login": null,
            "is_superuser": true,
            "is_staff": false,
            "is_active": true,
            "date_joined": "2020-11-10T11:48:08.084Z",
            "first_name": "Admin",
            "last_name": "Admin",
            "email": "admin@admin.com",
            "password": "pbkdf2_sha256$720000$0iMHAjhkaTvdH975c3yplb$m0Ul71PcDmCZSehzGlCwTXvRlIT5Rn/25NlNxmZVKiI=",
            "role": 1,
            "groups": [],
            "user_permissions": []
        }
    },
    {
        "model": "users_app.user",
        "pk": 3,
        "fields": {
            "last_login": null,
            "is_superuser": true,
            "is_staff": false,
            "is_active": true,
            "date_joined": "2020-11-10T11:48:08.084Z",
            "first_name": "Editor",
            "last_name": "Editor",
            "email": "editor@editor.com",
            "password": "pbkdf2_sha256$720000$0iMHAjhkaTvdH975c3yplb$m0Ul71PcDmCZSehzGlCwTXvRlIT5Rn/25NlNxmZVKiI=",
            "role": 2,
            "groups": [],
            "user_permissions": []
        }
    },
    {
        "model": "users_app.user",
        "pk": 4,
        "fields": {
            "last_login": null,
            "is_superuser": true,
            "is_staff": false,
            "is_active": true,
            "date_joined": "2020-11-10T11:48:08.084Z",
            "first_name": "Viewer",
            "last_name": "Viewer",
            "email": "viewer@viewer.com",
            "password": "pbkdf2_sha256$720000$0iMHAjhkaTvdH975c3yplb$m0Ul71PcDmCZSehzGlCwTXvRlIT5Rn/25NlNxmZVKiI=",
            "role": 3,
            "groups": [],
            "user_permissions": []
        }
    }
]
```

## Run LoadData Permissions.json to Model

```x
python manage.py loaddata fixtures/permissions.json
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/82962020-0835-41b2-883c-3389ecffa499)

<img width="1465" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5593de39-ab72-4d22-aa39-5d3de2c5fb35">

## Run LoadData roles.json to Model

```x
python manage.py loaddata fixtures/roles.json
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/9568c8e9-7d67-4c65-807a-32c7edd0ee6a)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/83fad26b-ff44-49c5-9c16-94de3ebe1f40)

<img width="1465" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/db982029-03dd-4f7f-aa91-443127232ff4">

## Run LoadData users.json to Model

```x
python manage.py loaddata fixtures/users.json
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/92f9b199-2f70-467e-ad97-9bc08f529d8e)

<img width="1465" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5ff42ac8-6e73-4bf8-ab30-bffb3078a087">

# #END</details>

<details>
<summary>13. Setup URL, View and Serializer for Permission Model </summary>

# Setup URL, View and Serializer for Permission Model

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.contrib.auth.models import AbstractUser
from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Permissions'
        verbose_name = 'Permission'

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission)

    class Meta:
        verbose_name_plural = 'Roles'
        verbose_name = 'Role'

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    role = models.ForeignKey(
        Role, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
# from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer
from .models import User, Permission
from .auth import generate_access_token, JWTAuth


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

```

![image](https://github.com/user-attachments/assets/63477cb2-b670-446f-8f1d-2c6aa4e9ce5c)
![image](https://github.com/user-attachments/assets/20cac1f2-2909-43f5-b17e-f920f210aba4)

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/0ae855ae-99c3-48a8-933d-da5a7f4887ee">

<img width="1368" alt="image" src="https://github.com/user-attachments/assets/b9b63ab7-5966-489f-a619-8ad652868423">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/c859b59d-9850-4bd6-a45f-2899f1f38b6b">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/bb62b212-f6c0-47a7-a73d-1e6d4ece4adb">

# #END</details>

<details>
<summary>14. Setup URL, View and Serializer for Role Model - READ and CREATE ROLE using Viewsets </summary>

# Setup URL, View and Serializer for Role Model - READ and CREATE ROLE using Viewsets

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        pass
        # permission = Role.objects.get(id=pk)
        # serializer = RoleSerializer(permission)
        # return Response({"data": serializer.data})

    def update(self, request, pk=None):
        pass
        # permission = Role.objects.get(id=pk)
        # serializer = RoleSerializer(permission, data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        # return Response({"data": serializer.data})

    def destroy(self, request, pk=None):
        pass
        # permission = Role.objects.get(id=pk)
        # permission.delete()
        # return Response({'message': 'Role deleted successfully!'})


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

```

## LIST/GET All Roles

```x
GET http://localhost:8000/api/v1/roles
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/0620c40e-d940-4606-85a6-bb903ee5b527">
<img width="1453" alt="image" src="https://github.com/user-attachments/assets/37c85b1e-85fd-4a20-9128-6518085a1d6c">

```x
{
    "data": [
        {
            "id": 1,
            "permissions": [
                {
                    "id": 1,
                    "name": "view_users_apps",
                    "code": null
                },
                {
                    "id": 2,
                    "name": "edit_users_apps",
                    "code": null
                },
                {
                    "id": 3,
                    "name": "view_roles",
                    "code": null
                },
                {
                    "id": 4,
                    "name": "edit_roles",
                    "code": null
                },
                {
                    "id": 5,
                    "name": "view_products",
                    "code": null
                },
                {
                    "id": 6,
                    "name": "edit_products",
                    "code": null
                },
                {
                    "id": 7,
                    "name": "view_orders",
                    "code": null
                },
                {
                    "id": 8,
                    "name": "edit_orders",
                    "code": null
                }
            ],
            "name": "Admin",
            "code": null
        },
        {
            "id": 2,
            "permissions": [
                {
                    "id": 1,
                    "name": "view_users_apps",
                    "code": null
                },
                {
                    "id": 2,
                    "name": "edit_users_apps",
                    "code": null
                },
                {
                    "id": 3,
                    "name": "view_roles",
                    "code": null
                },
                {
                    "id": 5,
                    "name": "view_products",
                    "code": null
                },
                {
                    "id": 6,
                    "name": "edit_products",
                    "code": null
                },
                {
                    "id": 7,
                    "name": "view_orders",
                    "code": null
                },
                {
                    "id": 8,
                    "name": "edit_orders",
                    "code": null
                }
            ],
            "name": "Editor",
            "code": null
        },
        {
            "id": 3,
            "permissions": [
                {
                    "id": 1,
                    "name": "view_users_apps",
                    "code": null
                },
                {
                    "id": 3,
                    "name": "view_roles",
                    "code": null
                },
                {
                    "id": 5,
                    "name": "view_products",
                    "code": null
                },
                {
                    "id": 7,
                    "name": "view_orders",
                    "code": null
                }
            ],
            "name": "Viewer",
            "code": null
        }
    ]
}
```

## CREATE/POST a new Role

```x
POST http://localhost:8000/api/v1/roles
```

```x
{
    "name": "new role2",
    "permissions": [1, 2]
}
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/5efce313-05e0-4dfa-92c9-f75f8e4c5756">
<img width="1497" alt="image" src="https://github.com/user-attachments/assets/3c18db12-90bf-4651-84a2-71eba012b9a2">

```x
{
    "data": {
        "id": 5,
        "permissions": [
            {
                "id": 1,
                "name": "view_users_apps",
                "code": null
            },
            {
                "id": 2,
                "name": "edit_users_apps",
                "code": null
            }
        ],
        "name": "new role2",
        "code": null
    }
}
```

<img width="1368" alt="image" src="https://github.com/user-attachments/assets/65407769-08a7-4cf3-8111-74505095eaf8">
<img width="1324" alt="image" src="https://github.com/user-attachments/assets/e8414dba-5984-4136-8eca-3f917462e225">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/b9db950d-1bcb-433b-86de-71f0f16330fe">

# #END</details>

<details>
<summary>15. Setup URL, View and Serializer for Role Model - RETRIEVE, UPDATE and DELETE ROLE using Viewsets </summary>

# Setup URL, View and Serializer for Role Model - RETRIEVE, UPDATE and DELETE ROLE using Viewsets

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response


@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        context = {
            'users': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

```

## GET/RETRIEVE a Role

```x
GET http://localhost:8000/api/v1/roles/4
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/ce8295dd-9eaa-4e17-b7af-9e53d094d007">
<img width="1497" alt="image" src="https://github.com/user-attachments/assets/29b978bd-b985-4609-bf53-44a85736038c">

```x
{
    "data": {
        "id": 4,
        "permissions": [],
        "name": "new role",
        "code": null
    }
}
```

## UPDATE/PUT a Role

```x
PUT http://localhost:8000/api/v1/roles/4
```

```x
{
    "name": "updated name",
    "permissions": [3,4]
}
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/b4af6ae1-73f4-4717-8040-1d9ac4316c9a">
<img width="1497" alt="image" src="https://github.com/user-attachments/assets/8299ffdc-7ec8-4b41-8dbf-adc954e03a77">

```x
{
    "data": {
        "id": 4,
        "permissions": [
            {
                "id": 3,
                "name": "view_roles",
                "code": null
            },
            {
                "id": 4,
                "name": "edit_roles",
                "code": null
            }
        ],
        "name": "updated name",
        "code": null
    }
}
```

## DELETE/DESTROY a Role

```x
DELETE http://localhost:8000/api/v1/roles/4
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/e40cbc9b-fd4b-48e7-96d7-0b7aa83a08dd">
<img width="1497" alt="image" src="https://github.com/user-attachments/assets/a4f6edc2-e5ba-45ac-b63c-8d2c97bbbc82">

![image](https://github.com/user-attachments/assets/83e91fca-910e-482d-a230-305edbc467c7)

<img width="1368" alt="image" src="https://github.com/user-attachments/assets/08ece7d5-5ec3-4a2e-ac56-8e81a1b403a0">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/d1cf10ea-dc3e-4c04-bb42-26c86eb1b885">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/382e3b7f-9db9-4836-bb25-6da8cc073217">

# #END</details>

<details>
<summary>16. Setup URL and View for User Model - READ and RETRIEVE using Generic API View and Mixins </summary>

# Setup URL and View for User Model - READ and RETRIEVE using Generic API View and Mixins

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.users, name='users'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth


# @api_view(['GET'])
# def users(request):
#     if request.method == 'GET':
#         users = User.objects.all()
#         serializer = UserSerializer(users, many=True)
#         context = {
#             'users': serializer.data
#         }
#         return Response(context)


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/models.py:

```py
from django.contrib.auth.models import AbstractUser
from django.db import models


class Permission(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Permissions'
        verbose_name = 'Permission'

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission)

    class Meta:
        verbose_name_plural = 'Roles'
        verbose_name = 'Role'

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    role = models.ForeignKey(
        Role, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = 'Users'
        verbose_name = 'User'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

## READ/GET all Users

```x
GET http://localhost:8000/api/v1/users
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/0a6b8cf0-bdf7-45d3-9d65-fe7b5008d62e">

![image](https://github.com/user-attachments/assets/881536fa-60cc-433d-9b10-5b023995fd2b)

```x
{
    "data": [
        {
            "id": 1,
            "first_name": "Ifeanyi",
            "last_name": "Omeata",
            "email": "ifeanyio@gmail.com"
        },
        {
            "id": 2,
            "first_name": "Admin",
            "last_name": "Admin",
            "email": "admin@admin.com"
        },
        {
            "id": 3,
            "first_name": "Editor",
            "last_name": "Editor",
            "email": "editor@editor.com"
        },
        {
            "id": 4,
            "first_name": "Viewer",
            "last_name": "Viewer",
            "email": "viewer@viewer.com"
        }
    ]
}
```

## RETRIEVE/GET a User

```x
GET http://localhost:8000/api/v1/users/2
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/88223fbf-4967-4d2a-819c-70e3b62383a4">


```x
{
    "data": {
        "id": 2,
        "first_name": "Admin",
        "last_name": "Admin",
        "email": "admin@admin.com"
    }
}
```

<img width="1368" alt="image" src="https://github.com/user-attachments/assets/706dc59f-9824-42af-a436-54eaf0efce6c">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/ab28d9f8-051b-4cbf-9dcd-d3d81806f5de">
<img width="1368" alt="image" src="https://github.com/user-attachments/assets/4a415a45-0f16-457f-8a5d-9febfaace243">

# #END</details>

<details>
<summary>17. Setup URL and View for User Model - CREATE, UPDATE AND DELETE using Generic API View and Mixins </summary>

# Setup URL and View for User Model - CREATE, UPDATE AND DELETE using Generic API View and Mixins

### src-AI-Software/my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.users, name='users'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

### src-AI-Software/my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class UserSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance

```

## CREATE a User

```x
POST http://localhost:8000/api/v1/users
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/d62bb473-9b6e-4114-bc28-99dec1410700">

![image](https://github.com/user-attachments/assets/10988bdb-c649-4a2f-ad3c-c7bd13cf6901)

```x
{
    "data": {
        "id": 5,
        "first_name": "bob",
        "last_name": "henry",
        "email": "bob@gmail.com"
    }
}
```

## UPDATE a User

```x
PUT http://localhost:8000/api/v1/users/5
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/2ef3a941-01c9-4b4b-a982-ca59d709239d">

![image](https://github.com/user-attachments/assets/07bc6a35-ad27-454a-8224-9a5c2ec802dd)

```x
{
    "data": {
        "id": 5,
        "first_name": "bob_Updated",
        "last_name": "henry_Updated",
        "email": "bob@gmail.com"
    }
}
```

## DELETE a User

```x
DELETE http://localhost:8000/api/v1/users/5
```

<img width="1497" alt="image" src="https://github.com/user-attachments/assets/7aee949f-08b8-4bb5-8f88-45097767bc9b">

![image](https://github.com/user-attachments/assets/136d078e-d111-42f7-b27e-cb66001e7faa)

<img width="1396" alt="image" src="https://github.com/user-attachments/assets/f64987d5-80bc-46f8-bffc-a091120f5f7a">
<img width="1396" alt="image" src="https://github.com/user-attachments/assets/6efc3e6d-3ba3-43aa-8dcc-47f2f627695c">
<img width="1396" alt="image" src="https://github.com/user-attachments/assets/f9d95fc5-a84a-4ccd-8467-f16dc839f08e">

# #END</details>

<details>
<summary>18. Setup Pagination for User Data </summary>

# Setup Pagination for User Data

### my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.users, name='users'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### my_projects/07_react_django_practical/users_app/pagination.py:

```py
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

DEFAULT_PAGE = 1
DEFAULT_PAGE_SIZE = 1


class CustomPagination(PageNumberPagination):
    page = DEFAULT_PAGE
    page_size = DEFAULT_PAGE_SIZE
    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data,
            # added
            "meta": {
                "last_page": self.page.paginator.count,
                "page": int(self.request.GET.get("page", DEFAULT_PAGE)),
                "page_size": int(self.request.GET.get("page_size", self.page_size))
            }
        })

```

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/fac39f9e-08ca-490c-8ba4-371adda3656e">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/0daa72de-94d9-42ea-905c-c13ea40e73e7">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/a8580ae8-5deb-4851-bee0-145be9128f83">

# #END</details>

<details>
<summary>19. Add Role Relationship to User and POST new User </summary>

# Add Role Relationship to User and POST new User

### my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.users, name='users'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),
]

```

### my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class RoleRelatedField(serializers.RelatedField):
    def to_representation(self, instance):
        return RoleSerializer(instance).data

    def to_internal_value(self, data):
        return self.queryset.get(pk=data)


class UserSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    role = RoleRelatedField(many=False, queryset=Role.objects.all())

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm', 'role']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance

```

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        request.data.update({
            "password": 1234,
            "password_confirm": 1234,
            "role": request.data["role_id"]
        })
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/727adcd6-e3af-4a11-8503-e291a4bad12b">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/349dd75d-883f-48b1-bea4-5e0c09557b90">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/8aaee9b3-27e5-4e53-87f1-5577316aefbd">

# #END</details>

<details>
<summary>20. Update User with Partial Update </summary>

# Update User with Partial Update

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        request.data.update({
            "password": 1234,
            "password_confirm": 1234,
            "role": request.data["role_id"]
        })
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        if (request.data['role_id']):
            request.data.update({
                "role": request.data["role_id"]
            })
        # return Response({"data": self.update(request, pk).data})
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/141eb3c4-cfea-45eb-a027-00f60d610a8c">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/890fec55-d9ec-4404-ab39-dab31df1c5e1">
<img width="1348" alt="image" src="https://github.com/user-attachments/assets/2c789b59-2eb4-4bb2-87b7-7dcd819752fd">

# #END</details>

<details>
<summary>21. Setup Profile API View for updating User Info </summary>

# Setup Profile API View for updating User Info

### my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('users/info', views.ProfileInfoAPIView.as_view(),
         name='users-profile-info'),
    path('users/password', views.ProfilePasswordAPIView.as_view(),
         name='users-profile-password'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),

]

```

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination


class ProfileInfoAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ProfilePasswordAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.ValidationError('Passwords do not match')

        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

        # user.set_password(data['password'])
        # user.save()
        # return Response({'message': 'Password updated successfully!'})


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        request.data.update({
            "password": 1234,
            "password_confirm": 1234,
            "role": request.data["role_id"]
        })
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        if (request.data['role_id']):
            request.data.update({
                "role": request.data["role_id"]
            })
        # return Response({"data": self.update(request, pk).data})
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'data': serializer.data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

### my_projects/07_react_django_practical/users_app/serializers.py:

```py
from rest_framework import serializers
from .models import User, Permission, Role


class RoleRelatedField(serializers.RelatedField):
    def to_representation(self, instance):
        return RoleSerializer(instance).data

    def to_internal_value(self, data):
        return self.queryset.get(pk=data)


class UserSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    role = RoleRelatedField(many=False, queryset=Role.objects.all())

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm', 'role']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        # user = User.objects.create(**validated_data)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)  # Need to hash Password
        instance.save()
        return instance

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class PermissionRelatedField(serializers.StringRelatedField):
    def to_representation(self, value):
        return PermissionSerializer(value).data

    def to_internal_value(self, data):
        return data


class RoleSerializer(serializers.ModelSerializer):
    # permissions = PermissionSerializer(many=True)
    permissions = PermissionRelatedField(many=True)

    class Meta:
        model = Role
        fields = "__all__"

    def create(self, validated_data):
        permissions = validated_data.pop('permissions', None)

        if permissions == None:
            raise serializers.ValidationError(
                "You must set Permissions for the Role.")

        instance = self.Meta.model(**validated_data)
        instance.save()
        instance.permissions.add(*permissions)
        instance.save()
        return instance

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/8eaff98d-407d-4949-a9c0-9b98585c7a45">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/40258a5e-b43a-4c6a-8f14-f39568133c7b">
<img width="1360" alt="image" src="https://github.com/user-attachments/assets/216c97a9-dc13-4d51-be6a-c2914a5a2ed3">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/0dd0d948-dbef-44d4-be32-014239e42c32">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/62554f50-3206-42a6-a054-be0d3ca4d6a6">

![image](https://github.com/user-attachments/assets/7387c37f-0a74-426d-8759-397fe783fc4e)

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/1035c3f0-0008-4882-9645-418538861164">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/35ddc82a-88de-4dd8-b871-604df3e572e0">

# #END</details>

<details>
<summary>22. Display user Permissions as Text </summary>

# Display user Permissions as Text 

### my_projects/07_react_django_practical/users_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('users/info', views.ProfileInfoAPIView.as_view(),
         name='users-profile-info'),
    path('users/password', views.ProfilePasswordAPIView.as_view(),
         name='users-profile-password'),
    path('users', views.UserGenericAPIView.as_view(), name='users'),
    path('users/<str:pk>', views.UserGenericAPIView.as_view(), name='users-detail'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('auth', views.AuthUser.as_view(), name='auth'),
    path('logout', views.logout, name='logout'),
    path('permissions', views.PermissionAPIView.as_view(), name='permissions'),
    path('roles', views.RoleViewSet.as_view(
        {'get': 'list', 'post': 'create'}), name='roles'),
    path('roles/<int:pk>', views.RoleViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='roles-detail'),

]

```

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination


class ProfileInfoAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ProfilePasswordAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.ValidationError('Passwords do not match')

        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

        # user.set_password(data['password'])
        # user.save()
        # return Response({'message': 'Password updated successfully!'})


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        request.data.update({
            "password": 1234,
            "password_confirm": 1234,
            "role": request.data["role_id"]
        })
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        if (request.data['role_id']):
            request.data.update({
                "role": request.data["role_id"]
            })
        # return Response({"data": self.update(request, pk).data})
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        data = serializer.data
        data["permissions"] = [
            permission['name'] for permission in data['role']['permissions']]
        return Response({'data': data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/09fc8c71-5aef-4f4a-969f-a5810138e31a">
<img width="1360" alt="image" src="https://github.com/user-attachments/assets/7d05dcbf-dfc8-46cb-b6a5-2c90bf77c28d">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/1e3fad15-6ba5-4ded-bb7a-31bb931280f0">

# #END</details>

<details>
<summary>23. Setup Product Model, URL, View and Serializer </summary>

# Setup Product Model, URL, View and Serializer

### Create App - Products

```py
docker-compose exec admin_project sh
python manage.py startapp products_app
```

### my_projects/07_react_django_practical/products_app/models.py:

```py
from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'products'
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-created_at']


```

### my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # apps
    'rest_framework',
    'users_app',
    'products_app'
]
```

### my_projects/07_react_django_practical/admin_project/urls.py:

```py
"""
URL configuration for admin_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('users_app.urls')),
    path('api/v1/', include('products_app.urls')),
]

```

### my_projects/07_react_django_practical/products_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('products', views.ProductGenericAPIView.as_view(), name='products-list'),
    path('products/<str:pk>', views.ProductGenericAPIView.as_view(),
         name='product-detail')
]

```

### my_projects/07_react_django_practical/products_app/views.py:

```py
from django.shortcuts import render
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Product
from .serializers import ProductSerializer


class ProductGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                            mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)

```

### my_projects/07_react_django_practical/products_app/serializers.py:

```py

from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

```

## Make Migrations

```py
python manage.py makemigrations
python manage.py migrate
```

```x
POST PRODUCTS - http://localhost:8000/api/v1/products
```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/b47bb38c-6f3e-4790-bc57-98d11092c530">


```x
GET PRODUCTS - http://localhost:8000/api/v1/products
```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/a1e9eeaf-419a-4a5b-adb4-d01fde4f4c0a">

```x
PUT PRODUCTS - http://localhost:8000/api/v1/products/1
```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/377b4456-09c3-4439-af21-754d58c8886f">

```x
DELETE PRODUCTS - http://localhost:8000/api/v1/products/1
```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/9550ab36-2103-460b-a51b-d0606387dd5a">

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/b91d6430-7967-42df-ba1b-fa13c6e394fe">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/6720f9aa-6829-49b7-978f-82315bc4e901">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/098dcf81-8fff-465d-9428-96d04a4d72a9">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/63a7cdd0-2528-4601-8390-15ac1bfae7e6">

# #END</details>

<details>
<summary>24. Setup Uploading Images Functionality </summary>

# Setup Uploading Images Functionality

### my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")  # BASE_DIR /'media'


# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users_app.User'
```

### my_projects/07_react_django_practical/products_app/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('products', views.ProductGenericAPIView.as_view(), name='products-list'),
    path('products/<str:pk>', views.ProductGenericAPIView.as_view(),
         name='product-detail'),
    path('upload', views.FileUploadView.as_view(), name='upload-file')
]

```

### my_projects/07_react_django_practical/products_app/views.py:

```py
from random import randint, randrange, choice
from string import ascii_letters, digits
from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Product
from .serializers import ProductSerializer


class ProductGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                            mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class FileUploadView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def post(self, request):
        file = request.FILES.get('image')
        if not file:
            raise exceptions.ValidationError(
                {"file": "Image file is required."})
        letters_and_digits = ascii_letters + digits
        random_value = ''.join(choice(letters_and_digits)
                               for _ in range(6)) or randrange(100000, 1000000)
        file.name = f"{random_value.lower()}-" + file.name.replace(" ", "_")
        file_name = default_storage.save(file.name, file)
        url = default_storage.url(file_name)
        return Response({"data": {"file": file.name, "url": url}})

```

### my_projects/07_react_django_practical/products_app/models.py:

```py
from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'products'
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-created_at']

```

<img width="1360" alt="image" src="https://github.com/user-attachments/assets/85374fbb-0f64-4b56-a7d9-370e88034bd3">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/8ae262bd-68f2-473d-83c4-64a5449df284">

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/4f397302-badf-4a4a-9863-00ff1ce570a9">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/4e42559a-9b1c-4cdf-92b1-899d2c9f1e5e">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/f8259acd-c190-4aeb-b57a-befe484fd828">

# #END</details>

<details>
<summary>25. Setup Route to View Uploaded Images </summary>

# Setup Route to View Uploaded Images

### my_projects/07_react_django_practical/admin_project/settings.py:

```py
# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': [
#        'rest_framework.permissions.IsAuthenticated',
#     ],
#     'DEFAULT_AUTHENTICATION_CLASSES': [
#        'rest_framework_simplejwt.authentication.JWTAuthentication',
#     ],
# }

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")  # BASE_DIR /'media'


# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users_app.User'
```

### my_projects/07_react_django_practical/products_app/urls.py:

```py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views


urlpatterns = [
    path('products', views.ProductGenericAPIView.as_view(), name='products-list'),
    path('products/<str:pk>', views.ProductGenericAPIView.as_view(),
         name='product-detail'),
    path('upload', views.FileUploadView.as_view(), name='upload-file')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

```

### my_projects/07_react_django_practical/products_app/views.py:

```py

from random import randint, randrange, choice
from string import ascii_letters, digits
from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Product
from .serializers import ProductSerializer


class ProductGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                            mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class FileUploadView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def post(self, request):
        file = request.FILES.get('image')
        if not file:
            raise exceptions.ValidationError(
                {"file": "Image file is required."})
        letters_and_digits = ascii_letters + digits
        random_value = ''.join(choice(letters_and_digits)
                               for _ in range(6)) or randrange(100000, 1000000)
        file.name = f"{random_value.lower()}-" + file.name.replace(" ", "_")
        file_name = default_storage.save(file.name, file)
        url = default_storage.url(file_name)
        return Response({"data": {"file": file.name, "url": "http://localhost:8000/api/v1" + url}})

```

### my_projects/07_react_django_practical/products_app/models.py:

```py
from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'products'
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-created_at']

```


<img width="1404" alt="image" src="https://github.com/user-attachments/assets/6fa178d5-4c75-48de-ae86-44ffbe1ddec7">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/4c2f3948-43ae-4e16-b189-e5ef688edc5e">

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/a5b2d6b7-3c56-4f1e-9931-e4a0852756b5">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/dbd1e6b1-f170-4f03-8267-9812fa49251d">

# #END</details>

<details>
<summary>26. Create Orders App </summary>

# Create Orders App

```py
python manage.py startapp orders_app
```

### my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # apps
    'rest_framework',
    'users_app',
    'products_app',
    'orders_app',
]

```

### my_projects/07_react_django_practical/admin_project/urls.py:

```py
"""
URL configuration for admin_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('users_app.urls')),
    path('api/v1/', include('products_app.urls')),
    path('api/v1/', include('orders_app.urls')),
]

```

### my_projects/07_react_django_practical/orders_app/urls.py:

```py
from django.urls import path
from . import views


urlpatterns = [
    # path('orders', views.ProductGenericAPIView.as_view(), name='orders-list'),
    # path('orders/<str:pk>', views.ProductGenericAPIView.as_view(),
    #      name='order-detail'),
]

```

### my_projects/07_react_django_practical/orders_app/models.py:

```py
from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    product_title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

## Run Migrations:

```py
python manage.py makemigrations
python manage.py migrate
```

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/e00a9604-3506-43bd-ba34-ce2f0be651dc">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/01d9b701-a80d-49f6-88c0-dfcf89b10e48">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/6ff04a4c-60cd-46b8-84fa-ad4b9bfb74af">

# #END</details>

<details>
<summary>27. Setup URLs, Views and Serializer for Orders App </summary>

# Setup URLs, Views and Serializer for Orders App

### my_projects/07_react_django_practical/orders_app/models.py:

```py
from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    product_title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

### my_projects/07_react_django_practical/orders_app/urls.py:

```py
from django.urls import path
from . import views


urlpatterns = [
    path('orders', views.OrderGenericAPIView.as_view(), name='orders-list'),
    path('orders/<str:pk>', views.OrderGenericAPIView.as_view(),
         name='order-detail'),
]

```

### my_projects/07_react_django_practical/orders_app/views.py:

```py
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Order
from .serializers import OrderSerializer


class OrderGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

```

### my_projects/07_react_django_practical/orders_app/serializers.py:

```py
from rest_framework import serializers

from .models import OrderItem, Order


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

```

<img width="1392" alt="image" src="https://github.com/user-attachments/assets/a7181b4e-1ca1-465f-8469-278776f575b4">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/867c1830-9e7b-4af6-b7b0-919b2dacc28a">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/5a5618ac-40d1-421d-9cd4-30c014f9fcc1">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/f7716362-7c35-4c03-85b1-3bd2bd22f02b">

# #END</details>

<details>
<summary>28. Load Data into Orders App Model using Fixtures </summary>

# Load Data into Orders App Model using Fixtures

### my_projects/07_react_django_practical/orders_app/models.py:

```py
from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    product_title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

### my_projects/07_react_django_practical/fixtures/orders.json:

```json
[
    {
        "model": "orders_app.order",
        "pk": 1,
        "fields": {
            "first_name": "First Name #1",
            "last_name": "Last Name #1",
            "email": "Email #1",
            "created_at": "2020-1-1 00:00:00",
            "updated_at": "2020-1-1 00:00:00"
        }
    },
    {
        "model": "orders_app.order",
        "pk": 2,
        "fields": {
            "first_name": "First Name #2",
            "last_name": "Last Name #2",
            "email": "Email #2",
            "created_at": "2020-2-1 00:00:00",
            "updated_at": "2020-2-1 00:00:00"
        }
    },
    {
        "model": "orders_app.order",
        "pk": 3,
        "fields": {
            "first_name": "First Name #3",
            "last_name": "Last Name #3",
            "email": "Email #3",
            "created_at": "2020-3-1 00:00:00",
            "updated_at": "2020-3-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 1,
        "fields": {
            "order_id": 1,
            "product_title": "Title #1",
            "price": 10,
            "quantity": 2,
            "created_at": "2020-1-1 00:00:00",
            "updated_at": "2020-1-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 2,
        "fields": {
            "order_id": 1,
            "product_title": "Title #2",
            "price": 20,
            "quantity": 3,
            "created_at": "2020-1-1 00:00:00",
            "updated_at": "2020-1-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 3,
        "fields": {
            "order_id": 2,
            "product_title": "Title #3",
            "price": 30,
            "quantity": 3,
            "created_at": "2020-2-1 00:00:00",
            "updated_at": "2020-2-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 4,
        "fields": {
            "order_id": 2,
            "product_title": "Title #4",
            "price": 40,
            "quantity": 4,
            "created_at": "2020-2-1 00:00:00",
            "updated_at": "2020-2-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 5,
        "fields": {
            "order_id": 3,
            "product_title": "Title #5",
            "price": 50,
            "quantity": 5,
            "created_at": "2020-3-1 00:00:00",
            "updated_at": "2020-3-1 00:00:00"
        }
    },
    {
        "model": "orders_app.orderitem",
        "pk": 6,
        "fields": {
            "order_id": 3,
            "product_title": "Title #6",
            "price": 60,
            "quantity": 6,
            "created_at": "2020-3-1 00:00:00",
            "updated_at": "2020-3-1 00:00:00"
        }
    }
]
```

## Load Data into Model:

```x
python manage.py loaddata fixtures/orders.json
```

![image](https://github.com/user-attachments/assets/2facf028-e04f-453f-a6ec-fdf6cae113a4)
![image](https://github.com/user-attachments/assets/c6a7a281-3ad2-4a26-9460-729cbba11a30)
![image](https://github.com/user-attachments/assets/e032bff4-19c3-4d35-a964-509bc6c624fe)

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/ff950c35-25ea-4f9d-adb9-d5ce4ea4a8a0">
<img width="1360" alt="image" src="https://github.com/user-attachments/assets/38346fdc-ad57-4496-97ca-a6ce4c30bd5e">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/3d220f34-765c-4a56-8580-886e965bb5a9">

# #END</details>

<details>
<summary>29. Calculate Total cost of items with Serializer Method Fields for Orders Serializer </summary>

# Calculate Total cost of items with Serializer Method Fields for Orders Serializer

### my_projects/07_react_django_practical/orders_app/serializers.py:

```py
from rest_framework import serializers

from .models import OrderItem, Order


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    total = serializers.SerializerMethodField('get_total')

    def get_total(self, obj):
        items = OrderItem.objects.filter(order_id=obj.id)
        return sum((item.price * item.quantity) for item in items)

    class Meta:
        model = Order
        fields = '__all__'

```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/bf73403b-47a5-40ac-b872-1d97fc20f2eb">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/ff3c99f7-557a-465a-a4d5-727c0751094c">
<img width="1404" alt="image" src="https://github.com/user-attachments/assets/5d121b77-df93-46d1-83ee-22c512fedd50">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/f871a5ca-87b3-4544-9a56-f96fc7101a31">

# #END</details>

<details>
<summary>30. Export CSV with Data </summary>

# Export CSV with Data

### my_projects/07_react_django_practical/orders_app/models.py:

```py
from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def name(self):
        return f'{self.first_name} {self.last_name}'


class OrderItem(models.Model):
    product_title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

### my_projects/07_react_django_practical/orders_app/urls.py:

```py
from django.urls import path
from . import views


urlpatterns = [
    path('orders', views.OrderGenericAPIView.as_view(), name='orders-list'),
    path('orders/export', views.ExportAPIView.as_view(), name='export-orders'),
    path('orders/<str:pk>', views.OrderGenericAPIView.as_view(),
         name='order-detail'),
]

```

### my_projects/07_react_django_practical/orders_app/views.py:

```py
import csv
from django.http import JsonResponse, HttpResponse
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Order, OrderItem
from .serializers import OrderSerializer


class OrderGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})


class ExportAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="orders.csv"'

        orders = Order.objects.all()
        writer = csv.writer(response)

        writer.writerow(
            ['ID', 'Name', 'Email', 'Product Title', 'Price', 'Quantity'])

        for order in orders:
            for item in order.order_items.all():
                writer.writerow([order.id, order.name, order.email,
                                item.product_title, item.price, item.quantity])

        # for order in orders:
        #     writer.writerow([order.id, order.name, order.email, '', '', ''])
        #     orderItems = OrderItem.objects.all().filter(order_id=order.id)

        #     for item in orderItems:
        #         writer.writerow(
        #             ['', '', '', item.product_title, item.price, item.quantity])

        return response

```

```x
http://localhost:8000/api/v1/orders/export
```

<img width="1404" alt="image" src="https://github.com/user-attachments/assets/de929d6f-347f-4a3b-8507-90f02eec36b8">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/caa6d1e9-9603-4e89-8bb2-ae40fd28f568">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/9f0faa8a-15a3-45fd-a4aa-fb799a02b991">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/e5de69db-760a-4c9f-85cc-9a35fc390115">

# #END</details>

<details>
<summary>31. Create ChartAPIView with Raw SQL Queries </summary>

# Create ChartAPIView with Raw SQL Queries

### my_projects/07_react_django_practical/orders_app/models.py:

```py
from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def name(self):
        return f'{self.first_name} {self.last_name}'


class OrderItem(models.Model):
    product_title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

### my_projects/07_react_django_practical/orders_app/urls.py:

```py
from django.urls import path
from . import views


urlpatterns = [
    path('orders', views.OrderGenericAPIView.as_view(), name='orders-list'),
    path('orders/export', views.ExportAPIView.as_view(), name='export-orders'),
    path('orders/chart', views.ChartAPIView.as_view(), name='chart-orders'),
    path('orders/<str:pk>', views.OrderGenericAPIView.as_view(),
         name='order-detail'),
]

```

### my_projects/07_react_django_practical/orders_app/views.py:

```py
import csv
from django.http import JsonResponse, HttpResponse
from django.db import connection
from rest_framework import generics, mixins, status, exceptions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users_app.auth import generate_access_token, JWTAuth
from users_app.pagination import CustomPagination
from .models import Order, OrderItem
from .serializers import OrderSerializer


class OrderGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})


class ExportAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="orders.csv"'

        orders = Order.objects.all()
        writer = csv.writer(response)

        writer.writerow(
            ['ID', 'Name', 'Email', 'Product Title', 'Price', 'Quantity'])

        for order in orders:
            for item in order.order_items.all():
                writer.writerow([order.id, order.name, order.email,
                                item.product_title, item.price, item.quantity])

        # for order in orders:
        #     writer.writerow([order.id, order.name, order.email, '', '', ''])
        #     orderItems = OrderItem.objects.all().filter(order_id=order.id)

        #     for item in orderItems:
        #         writer.writerow(
        #             ['', '', '', item.product_title, item.price, item.quantity])

        return response


class ChartAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, _):
        cursor = connection.cursor()
        cursor.execute(
            """
            SELECT DATE_FORMAT(o.created_at, '%Y-%m-%d') as date, sum(i.quantity * i.price) as sum
            FROM orders_app_order as o
            JOIN orders_app_orderitem as i ON o.id = i.order_id
            GROUP BY date
            """
        )
        rows = cursor.fetchall()

        data = []
        for row in rows:
            data.append({
                'date': row[0],
                'sum': row[1]
            })
        return Response({'rows': rows, 'data': data}, status=status.HTTP_200_OK)

```

<img width="1360" alt="image" src="https://github.com/user-attachments/assets/2905145e-55f1-44e2-a01a-081fe36d0798">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/18f2b452-a8c0-4831-942e-697a4efc7edd">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/c246faf0-8fd9-412f-ad37-a5300f621154">
<img width="1392" alt="image" src="https://github.com/user-attachments/assets/e0201179-bcd7-46ad-a620-d6a038881bc8">

# #END</details>

<details>
<summary>32. Setup Permissions for User Roles </summary>

# Setup Permissions for User Roles

### my_projects/07_react_django_practical/users_app/permissions.py:

```py
from rest_framework import permissions
from users_app.serializers import UserSerializer


class ViewPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        # if request.method == 'GET':
        #     return True
        # return False

        data = UserSerializer(request.user).data

        view_access = any(
            p['name'] == 'view_' + view.permission_object for p in data['role']['permissions'])
        edit_access = any(
            p['name'] == 'edit_' + view.permission_object for p in data['role']['permissions'])

        if request.method == 'GET':
            return view_access or edit_access
        return edit_access

```

### my_projects/07_react_django_practical/users_app/views.py:

```py
from rest_framework import exceptions, viewsets, status, generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import PermissionSerializer, UserSerializer, RoleSerializer
from .models import User, Permission, Role
from .auth import generate_access_token, JWTAuth
from .pagination import CustomPagination
from .permissions import ViewPermissions


class ProfileInfoAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ProfilePasswordAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk=None):
        user = request.user
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.ValidationError('Passwords do not match')

        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

        # user.set_password(data['password'])
        # user.save()
        # return Response({'message': 'Password updated successfully!'})


class UserGenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                         mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated & ViewPermissions]
    permission_object = 'users'
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination

    def get(self, request, pk=None):
        if pk:
            return Response({"data": self.retrieve(request, pk).data})
        return Response({"data": self.list(request).data})

    def post(self, request):
        request.data.update({
            "password": 1234,
            "password_confirm": 1234,
            "role": request.data["role_id"]
        })
        return Response({"data": self.create(request).data})

    def put(self, request, pk=None):
        if (request.data['role_id']):
            request.data.update({
                "role": request.data["role_id"]
            })
        # return Response({"data": self.update(request, pk).data})
        return Response({"data": self.partial_update(request, pk).data})

    def delete(self, request, pk=None):
        return self.destroy(request, pk)


class AuthUser(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        data = serializer.data
        data["permissions"] = [
            permission['name'] for permission in data['role']['permissions']]
        return Response({'data': data})


class PermissionAPIView(APIView):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = PermissionSerializer(Permission.objects.all(), many=True)
        return Response({'data': serializer.data})


class RoleViewSet(viewsets.ViewSet):
    authentication_classes = [JWTAuth]
    permission_classes = [IsAuthenticated & ViewPermissions]
    permission_object = 'roles'

    def list(self, request):
        queryset = Role.objects.all()
        serializer = RoleSerializer(queryset, many=True)
        return Response({"data": serializer.data})

    def create(self, request):
        serializer = RoleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(role)
        return Response({"data": serializer.data})

    def update(self, request, pk=None):
        role = Role.objects.get(id=pk)
        serializer = RoleSerializer(instance=role, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        role = Role.objects.get(id=pk)
        role.delete()
        return Response({'message': 'Role deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if User.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')
    if not user.check_password(password):
        raise exceptions.AuthenticationFailed('Incorrect password')

    token = generate_access_token(user)
    # set token to http-only cookie
    response = Response()
    response.set_cookie(key='jwt', value=token, httponly=True)
    response.data = {
        'jwt': token
    }
    return response


@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
        'message': 'success'
    }
    return response

```

<img width="1147" alt="image" src="https://github.com/user-attachments/assets/88a08e0e-bb89-4b56-aacd-4efb45078fe0">
<img width="1147" alt="image" src="https://github.com/user-attachments/assets/d97f13c3-9131-45a1-a901-3651ba7eae8c">

# #END</details>

<details>
<summary>33. Setup Cors </summary>

# Setup Cors

```py
pip install django-cors-headers
```

### my_projects/07_react_django_practical/admin_project/settings.py:

```py
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # apps
    'rest_framework',
    'corsheaders', # added
    'users_app',
    'products_app',
    'orders_app',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # added
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users_app.User'


CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
```

<img width="1329" alt="image" src="https://github.com/user-attachments/assets/8b082e10-cbb1-4ef7-b50e-a1c8238d45d8">

# #END</details>

<details>
<summary>34. Frontend - Install React App </summary>

# Frontend - Install React App

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

# #END</details>
