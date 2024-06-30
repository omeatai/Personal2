## +Udemy - Building Restful Web APIs with Django

<details>
<summary>1. Creating a New Django Project: demo_project </summary>

# Creating a New Django Project: demo_project

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

## Install Other Project Dependencies: djangorestframework, django-filter, mock and Pillow

```x
pip install djangorestframework django-filter mock pillow
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c4226191-bb1f-42c4-83f0-08b1812d5831)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d963db78-6367-40d0-af49-1b90eaac8339)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b30e9e58-8cdc-4c3f-8b3f-5d96ef09882d)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/84446ae5-a1fa-411f-9d09-b3de73ef66f9)

## Get dependencies

```x
pip freeze
```

```x
asgiref==3.8.1
Django==5.0.6
django-filter==24.2
djangorestframework==3.15.2
mock==5.1.0
pillow==10.3.0
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
django-admin startproject demo_project .
```

## Make Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

## Start Local Server

```x
python manage.py runserver
```

```x
(venv) ➜  03_restful_apls_proj git:(main) ✗ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
June 30, 2024 - 01:32:55
Django version 5.0.6, using settings 'demo_project.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

<img width="1489" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/24efbb26-8bae-45cc-9887-303d6c606011">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/10b75f10-04cb-4b99-99ff-4f2a423269d7)

# #END</details>

<details>
<summary>2. Create new App - TodoList </summary>

# Create new App - TodoList

[https://github.com/omeatai/src-python-flask-django/commit/fbf231bb53a548dc15c021d4041212fa10ffc13b](https://github.com/omeatai/src-python-flask-django/commit/fbf231bb53a548dc15c021d4041212fa10ffc13b)

## Create App

```py
python manage.py startapp todolist
django-admin startapp todolist
```

### taskmate.settings:

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
    'todolist',
]
```

<img width="1529" alt="image" src="https://github.com/omeatai/src-python-flask-django/assets/32337103/0df79c8a-1bcd-44c9-8941-cae421178859">

# #END</details>
