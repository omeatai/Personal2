# Youtube-Python Django REST API Framework - DRF

## [COURSE](https://www.youtube.com/watch?v=-LVXBuYzi00) - Django and React Authentication

<details>
  <summary>1. Setup Django and React Apps </summary>

# Setup Django and React Apps  

## Create Folder Backend

```x
mkdir backend
cd backend
```

## Setup Django Environment
```x
pip install virtualenv
virtualenv env
source env/bin/activate

python -m venv env
source env/bin/activate
```

## Install Dependencies - Django, DjangoRestFramework, DjangoCorsHeaders

```x
pip install django djangorestframework django-cors-headers
```

## Create requirements.txt File

```x
pip freeze > requirements.txt
```

```txt
asgiref==3.8.1
Django==5.0.6
django-cors-headers==4.4.0
django-filter==24.2
django-mysql==4.14.0
djangorestframework==3.15.2
Markdown==3.6
mock==5.1.0
mysqlclient==2.2.4
numpy==2.0.0
pandas==2.2.2
pillow==10.4.0
PyJWT==2.8.0
python-dateutil==2.9.0.post0
python-decouple==3.8
pytz==2024.1
six==1.16.0
sqlparse==0.5.0
tzdata==2024.1
```

## Create Django Project - journal_project

```x
django-admin startproject journal_project .
```

## Create Django App - users

```x
django-admin startapp users
python manage.py startapp users
```

## Create React Frontend with Vite

```x
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

## Run Frontenv Server

```x
npm run dev
```

## Run Backend Server

```x
python manage.py runserver
```

## Setup CORS

### dev_projects/03_drf_auth_project/backend/journal_project/settings.py:

```py

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

CORS_ALLOW_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:8000',
    'http://localhost:8000',
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # External Apps
    'rest_framework',
    'corsheaders',
    # Local Apps
    'users',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # CORS Middleware added
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

```

## Initialize git in Parent Directory

```x
cd ..
git init
touch .gitignore
```

## Copy .gitignore file for Django and React

```x
https://www.toptal.com/developers/gitignore/
```

![image](https://github.com/user-attachments/assets/7ffe56b3-4dd0-4513-8c71-91f195c26d24)
![image](https://github.com/user-attachments/assets/c40e9834-fbaf-4cd5-94ba-650479263207)

<img width="1385" alt="image" src="https://github.com/user-attachments/assets/e63a2fd1-bc28-402d-af42-2746e5b0148f">
<img width="1385" alt="image" src="https://github.com/user-attachments/assets/aa712b5b-2a51-451b-8512-448ecb7df0e8">
<img width="1385" alt="image" src="https://github.com/user-attachments/assets/c0d1b40d-4c8d-492a-aafa-57c39af90159">
<img width="1385" alt="image" src="https://github.com/user-attachments/assets/69a68f89-51da-43e6-a221-d1ab59a93f29">

# #END </details>

<details>
  <summary>2. Setup Environment variable File </summary>

# Setup Environment variable File  

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

# #END </details>

# #END 

## [COURSE](https://www.youtube.com/watch?v=FdMf_3SurOA) - Complete Django and React Todo App

<details>
  <summary>1. I </summary>

```x
pip install virtualenv
virtualenv env

python -m venv env
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

# #END </details>

<details>
  <summary>2. N </summary>

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

# #END </details>

# #END

## [COURSE](https://www.youtube.com/watch?v=-LVXBuYzi00) - Django and Django Rest Framework

<details>
  <summary>1. I </summary>

```x
pip install virtualenv
virtualenv env

python -m venv env
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

# #END </details>

<details>
  <summary>2. N </summary>

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

# #END </details>

# #END 






