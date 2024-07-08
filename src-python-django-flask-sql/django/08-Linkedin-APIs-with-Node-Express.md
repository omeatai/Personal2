## +Linkedin-Building RESTful APIs with Node.js and Express

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

## Install Other Project Dependencies: djangorestframework, markdown, django-filter, mock and Pillow

```x
pip install djangorestframework markdown django-filter mock pillow
```

## Get dependencies

```x
pip freeze
```

```x
asgiref==3.8.1
Django==5.0.6
django-filter==24.2
djangorestframework==3.15.2
Markdown==3.6
mock==5.1.0
pillow==10.4.0
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

## Start Local Server

```x
python manage.py runserver
```

```x
(venv) ➜  07_react_django_practical git:(main) ✗ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
July 08, 2024 - 05:48:12
Django version 5.0.6, using settings 'admin_project.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

[08/Jul/2024 05:48:15] "GET / HTTP/1.1" 200 10629
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/e39eef9e-8179-4904-83ba-c12faed70e02)

<img width="1505" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/1de6eb8a-f756-4347-94b2-57fe6f927b85">

# #END</details>

<details>
<summary>2. Configure Docker for Django </summary>

# Configure Docker for Django

## Download and install Docker Desktop

## [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/da417af6-4ae0-4c24-9166-bd70c33671ba)

```py

```

```py

```

# #END</details>

<details>
<summary>3. Configure Docker for Django </summary>

# Configure Docker for Django

```py

```

```py

```

```py

```

```py

```

## Make Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

# #END</details>
