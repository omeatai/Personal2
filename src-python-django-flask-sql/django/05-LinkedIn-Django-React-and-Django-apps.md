## +Udemy - Django A-Z Build and Deploy Web Project

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

```x
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

## Add Oauth2 to Niddlewares

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

Setup Static and Media URL/ROOT, and React Frontend Folder

```py
import os

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = '/django_static/'

MEDIA_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'api', 'uploads'))
MEDIA_URL = '/uploads/'

FRONTEND_ROOT = os.path.abspath(os.path.join(BASE_DIR, '..', 'frontend', 'build'))
```

Setup Oauth2 Settings and Permission

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

```

# #END</details>

<details>
<summary>3. Setup View and URLs for User Model </summary>

# Setup View and URLs for User Model

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
