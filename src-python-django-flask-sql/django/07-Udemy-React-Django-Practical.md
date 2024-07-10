## +Udemy-React and Django: A Practical Guide with Docker

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



### src-AI-Software/my_projects/07_react_django_practical/user/admin.py:

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

```py
python manage.py makemigrations
python manage.py migrate
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/5eff4ac2-4b2e-4900-8cdb-d172602e5c9a)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/dfda5768-dd5b-4e5c-a14a-ab69bd82a57e)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/1c00336a-dcd8-4d59-8628-db16d3cee5f9)

# #END</details>

<details>
<summary>5. Create Serializers for Register Endpoint </summary>

# Create Serializers for Register Endpoint

### src-AI-Software/my_projects/07_react_django_practical/user/models.py:

```py
from django.db import models


class Member(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Members'
        verbose_name = 'Member'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

```

### src-AI-Software/my_projects/07_react_django_practical/user/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.members, name='members'),
    path('register', views.register, name='register'),
]

```

### src-AI-Software/my_projects/07_react_django_practical/user/views.py:

```py
from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Member
from .serializers import MemberSerializer


@api_view(['POST'])
def register(request):
    data = request.data
    if data['password'] != data['password_confirm']:
        raise exceptions.ValidationError('Passwords do not match')

    if Member.objects.filter(email=data['email']).exists():
        raise exceptions.ValidationError('Email already exists')

    serializer = MemberSerializer(data=data)
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
def members(request):
    if request.method == 'GET':
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        context = {
            'members': serializer.data
        }
        return Response(context)

```

### src-AI-Software/my_projects/07_react_django_practical/user/serializers.py:

```py
from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Member
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

        member = Member.objects.create(**validated_data)
        # member.set_password(password) # Need to hash Password
        member.save()
        return member

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

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a95ce0a8-744f-4d4a-8f61-dcbdb4a79683)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/779e85ca-4317-4b46-8779-8460b6663229)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a1aa15c0-329a-46d6-9eea-8cb763af89fd)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7ddce496-b473-4799-8c20-2c7cced3e10e)

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/316a6f68-bc56-4500-a74d-37321e055a63">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/10fa3077-f94f-46e9-a0b7-0a235eed5da2)

# #END</details>

<details>
<summary>6. Hash Passwords with Abstract Class </summary>

# Hash Passwords with Abstract Class


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
