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
<summary>19. Add Role Relationship to User </summary>

# Add Role Relationship to User

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
