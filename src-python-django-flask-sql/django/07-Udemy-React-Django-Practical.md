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
pip install djangorestframework markdown django-filter mock pillow mysqlclient django-mysql python-decouple
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
<summary>2. Configure Mysql for Django </summary>

# Configure Mysql for Django

## Install Xampp for MAC

## [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

<img width="782" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/86956fc2-76a0-494c-8737-3fc3129ab6a5">
<img width="782" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0af54b4b-e1f9-49b6-b789-8e0d81d716be">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/51c26f92-ece8-4a1f-a5dd-e2e829226b06)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/86f70001-db48-409c-a4df-7f26d7db9eb8)

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
