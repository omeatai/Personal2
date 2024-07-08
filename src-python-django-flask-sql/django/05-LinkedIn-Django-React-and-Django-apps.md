.tx## +Udemy - Django A-Z Build and Deploy Web Project

<details>
<summary>1. Creating a New Django Project </summary>

# Creating a New Django Project

## Install venv

```py
python -m venv venv
```

## Activate venv

```py
# venv\Scripts\activate
source venv/bin/activate
```

## Install Django and other dependencies: django-rest-framework, django-filter, django-oauth-toolkit, mock, pillow

```py
python -m pip install django
pip install django
pip install django==5.0

pip install django-oauth-toolkit djangorestframework django-filter mock pillow
```

## Get dependencies

```py
pip freeze
```

```x
asgiref==3.8.1
certifi==2024.7.4
cffi==1.16.0
charset-normalizer==3.3.2
cryptography==42.0.8
Django==5.0.6
django-filter==24.2
django-oauth-toolkit==2.4.0
djangorestframework==3.15.2
idna==3.7
jwcrypto==1.5.6
mock==5.1.0
oauthlib==3.2.2
pillow==10.4.0
pycparser==2.22
pytz==2024.1
requests==2.32.3
sqlparse==0.5.0
typing_extensions==4.12.2
urllib3==2.2.2
```

## Save Dependencies to Requirements.txt

```py
pip freeze > requirements.txt
```

## Install requirements from Requirements.txt

```py
pip install -r requirements.txt
```

## Deactivate a virtual environment

```py
deactivate
```

## Create Django Project

```py
django-admin startproject demo .
```

## Make Migrations

```py
python manage.py makemigrations
python manage.py migrate
```

## Start Local Server

```py
python manage.py runserver
```

```x
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
July 06, 2024 - 05:55:53
Django version 5.0.6, using settings 'demo.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/e81189b2-4869-47aa-93ee-94d9eb124349)

<img width="1515" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/24a9a902-ea52-43f8-b97a-17e2ff864de7">

# #END</details>

<details>
<summary>2. Create new App - api and setup SETTINGS </summary>

# Create new App - api and setup SETTINGS

## Create App

```py
python manage.py startapp api
django-admin startapp api
```

### taskmate.settings:

## Add dependecies to installed apps

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
    'oauth2_provider',
    'rest_framework',
    'django_filters',
    'api',
]
```

## Add Oauth2 to Middlewares

```py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'oauth2_provider.middleware.OAuth2TokenMiddleware',
]
```

## Setup Static and Media URL/ROOT, and React Frontend Folder

```py
import os

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = '/django_static/'

MEDIA_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'api', 'uploads'))
MEDIA_URL = '/uploads/'

FRONTEND_ROOT = os.path.abspath(os.path.join(BASE_DIR, '..', 'frontend', 'build'))
```

## Setup Oauth2 Settings and Permission

```py
# Authentication using OAuth 2.0
AUTHENTICATION_BACKENDS = (
    'oauth2_provider.backends.OAuth2Backend',
    'django.contrib.auth.backends.ModelBackend',
)

OAUTH2_PROVIDER = {
    'OAUTH2_BACKEND_CLASS': 'oauth2_provider.oauth2_backends.JSONOAuthLibCore',
    'SCOPES': {
        'read': 'Read scope',
        'write': 'Write scope',
        'groups': 'Access to your groups',
        'packages': 'Access to your packages',
    },
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
}

LOGIN_URL = '/admin/login/'

```

<img width="1515" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d9b32918-d09a-459e-8bd3-4c66246e0618">

# #END</details>

<details>
<summary>3. Setup Views, URLs and Serializers for User Model </summary>

# Setup Views, URLs and Serializers for User Model

### src-AI-Software/my_projects/07_django_react_apps/APP/demo/urls.py:

```py
"""
URL configuration for demo project.

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
    path('oauth/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('api/v1/', include('api.urls')),
]

```

### src-AI-Software/my_projects/07_django_react_apps/APP/api/urls.py:

```py
from django.urls import path
from .views import UserList, UserDetails

urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<pk>/', UserDetails.as_view()),
]

```

### src-AI-Software/my_projects/07_django_react_apps/APP/api/views.py:

```py
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope

from .serializers import UserSerializer
# Create the API views


class UserList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetails(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer

```

### src-AI-Software/my_projects/07_django_react_apps/APP/api/serializers.py:

```py
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', "first_name", "last_name")

```

## Run Migration:

```py
python manage.py migration
python manage.py migrate
```

## Create SuperUser:

```x
python manage.py createsuperuser
```

## Run Server:

```x
python manage.py runserver
```

## Create Users in Admin:

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c863d17f-d0b0-439f-8a9c-85dbcacb4e6e)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/31eb84e3-977f-4916-b1db-e5664143b3e5)\

## Confirm Protected Site:

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c6209dcf-079d-40ac-92f2-88932c3b4cf0)


# #END</details>

<details>
<summary>3. Register Oauth Application </summary>

# Register Oauth Application

```x
http://localhost:8000/oauth/applications/
```

```x
Name: just a name of your choice
Client Type: confidential
Authorization Grant Type: Resource owner password-based
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7b9e6a69-27b6-4a24-bd7f-391b95b97535)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a072ef6e-ddda-47e3-a38a-39779d90c3bf)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/fc7584c0-2a88-49b3-ba9a-f7eaf95f0c77)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b4181812-5f85-4321-8f6c-c9676c399f8d)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/94fed201-7dbc-4444-be98-b27dae01bd8d)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/23c5eee3-cf11-4657-b8da-e5a82e5c95ff)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f99927d0-4c62-4289-b2d3-e3827a742558)


# #END</details>

<details>
<summary>4. Test Oauth Application with Curl and Postman - Login with Credentials to get Access Token </summary>

# Test Oauth Application with Curl and Postman - Login with Credentials to get Access Token

## Using Curl

```x
curl -X POST -d "grant_type=password&username=<user_name>&password=<password>" -u"<client_id>:<client_secret>" http://localhost:8000/oauth/token/

curl -X POST -d '{
"grant_type":"password",
"username":"admin",
"password":"admin123password",
"client_id":"rzGJIhKkFgXB6be6hSlreQJwkZ0ZydNYp17Uh5EF",
"client_secret":"3iZH2l8ROdIR8ZxEeTZ0eOqV0H50dBMvEZLEl85T"}' http://localhost:8000/oauth/token/
```

```x
{
    "access_token": "gzxSZK63kpaAWmmVeNPDLrcSEVaDXF",
    "expires_in": 36000,
    "token_type": "Bearer",
    "scope": "read write groups packages",
    "refresh_token": "x1OQel3Rx575UdR1V12NkcnzsaQhph"
}
```

## Using Postman

```py
{
"grant_type":"password",
"username":"admin",
"password":"admin123password",
"client_id":"rzGJIhKkFgXB6be6hSlreQJwkZ0ZydNYp17Uh5EF",
"client_secret":"3iZH2l8ROdIR8ZxEeTZ0eOqV0H50dBMvEZLEl"
}
```

<img width="1415" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/a386c0b9-c061-4e2a-9a9a-1c200f6f6204">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/62e33224-d721-44df-a888-e61c0fd5629a)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a22c4f98-e53a-45f9-a6e7-d763c81f3d6e)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/274e0883-dbd5-48dd-b508-237fc17c44a4)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/122ce4fe-d849-4b97-b38d-2503cd06647e)

# #END</details>

<details>
<summary>5. Test Oauth Application with Curl and Postman - View Users with Access Token Credentials </summary>

# Test Oauth Application with Curl and Postman - View Users with Access Token Credentials

## Using Curl

```x
curl -H "Authorization: Bearer <your_access_token>" http://localhost:8000/users/

curl -H "Authorization: Bearer YdKYEFhex8LqLk4umjGuY77QX" http://localhost:8000/api/v1/users/
```

```x
[
    {"username":"admin","email":"admin@gmail.com","first_name":"","last_name":""},
    {"username":"admin2","email":"admin2@gmail.com","first_name":"","last_name":""},
    {"username":"admin3","email":"admin3@gmail.com","first_name":"","last_name":""}
] 
```

```x
curl -H "Authorization: Bearer <your_access_token>" http://localhost:8000/users/1/

curl -H "Authorization: Bearer YdKYEFhex8LqLk4umjGuY77QX" http://localhost:8000/api/v1/users/1/
```

```x
    {"username":"admin","email":"admin@gmail.com","first_name":"","last_name":""}
```

## Using Postman

<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/87717caf-394a-4efe-9454-1dcede868179">
<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/c9068454-d010-4d86-bbae-9e29653de1c0">
<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/2ffd4346-47e2-4ac1-b514-0c1d8b80c117">
<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/91e319c0-9eaa-4dab-8431-94687c627023">

# #END</details>

<details>
<summary>6. Test Oauth Application with Curl and Postman - Create Users with Access Token Credentials </summary>

# Test Oauth Application with Curl and Postman - Create Users with Access Token Credentials

## Using Curl

```x
curl -H "Authorization: Bearer <your_access_token>" -X POST -d"username=foo&password=bar&scope=write" http://localhost:8000/users/

curl -H "Authorization: Bearer cekmhyGiNE3ockaMaWSisc141pAzNy" -X POST -d"username=admin4&password=admin123password&scope=write" http://localhost:8000/api/v1/users/
```

```x
{"username":"admin4","email":"","first_name":"","last_name":""}   
```

## Using Postman

<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/1b245a34-4968-4541-ac74-c1981cf83d72">
<img width="1376" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6be36a04-82f9-4597-bc68-b4f36664dddf">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d33fb2a9-e606-43ea-96ed-9d42d1a25760)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/38ea5085-12ec-4c3d-ab1a-b41c99657cf3)

# #END</details>

<details>
<summary>7. Test Oauth Application with Curl and Postman - Refresh Expired Access Token Credentials </summary>

# Test Oauth Application with Curl and Postman - Refresh Expired Access Token Credentials

## Using Curl

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
