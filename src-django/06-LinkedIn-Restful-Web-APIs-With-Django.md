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
<summary>2. Create new App - store </summary>

# Create new App - store

## Create App

```py
django-admin startapp store
```

### src-AI-Software/my_projects/03_restful_apls_proj/demo_project/settings.py:

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
    'rest_framework',
    'django_filters',
    'store',
]

```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/ba0867bc-93c8-48ea-b9c0-b4798d0e32da">

# #END</details>

<details>
<summary>3. Create URLs, Views and Templates </summary>

# Create URLs, Views and Templates

### src-AI-Software/my_projects/03_restful_apls_proj/demo_project/urls.py:

```py
"""
URL configuration for demo_project project.

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
    path('', include('store.urls')),
]

```

### src-AI-Software/my_projects/03_restful_apls_proj/store/urls.py:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='list-products'),
]

```

### src-AI-Software/my_projects/03_restful_apls_proj/store/views.py:

```py
from django.shortcuts import render


def index(request):
    context = {
        'products': [
            {
                "id": 1,
                "name": "Product 1",
                "description": "Description of Product 1",
                "price": "10.99",
                "created_at": "2024-06-26T12:34:56Z"
            },
            {
                "id": 2,
                "name": "Product 2",
                "description": "Description of Product 2",
                "price": "20.99",
                "created_at": "2024-06-27T12:34:56Z"
            }
        ],
    }

    return render(request, 'store/product_list.html', context)

```

### src-AI-Software/my_projects/03_restful_apls_proj/store/templates/store/product_list.html:

```py
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
</head>
<body>

<div class="product-list">
  {% for product in products %}
  <div class="product">
    <h2>S/N: 000{{ product.id }}</h2>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>${{ product.price }}</p>
  </div>
  {% endfor %}
</div>


</body>
</html>
```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/8463fedb-2f6f-4aab-9e58-0fb4cd56304c">
<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5ddaf4a5-6003-4013-943b-e5e97402807b">
<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/38411a04-d297-4728-bc5f-949ae80322f2">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/021ab1dc-9ff4-4904-9c79-47b4d11ba321)

# #END</details>

<details>
<summary>4. Create Base Template </summary>

# Create Base Template

### src-AI-Software/my_projects/03_restful_apls_proj/demo_project/settings.py:

```py
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / 'templates',
        ],
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
```

### src-AI-Software/my_projects/03_restful_apls_proj/templates/store/base.html:

```py
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}{% endblock title %}</title>
</head>
<body>

{% block content %}{% endblock content %}

</body>
</html>
```

### src-AI-Software/my_projects/03_restful_apls_proj/store/templates/store/product_list.html:

```py
{% extends 'store/base.html' %}

{% block title %}
Products
{% endblock title %}

{% block content %}

<div class="product-list">
  {% for product in products %}
  <div class="product">
    <h2>S/N: 000{{ product.id }}</h2>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>${{ product.price }}</p>
  </div>
  <hr>

  {% endfor %}
</div>

{% endblock content %}

```

<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/ae9321c1-3254-4a5e-a42f-5a70e4fb9684">
<img width="1533" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5380b272-6b6b-4ad5-a957-5ccf43ef30c7">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f3ffe45c-f5d2-411a-b27b-ec975137a696)

# #END</details>

<details>
<summary>5. Setup Bootstrap Template </summary>

# Setup Bootstrap Template 

### Bootstrap default 

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/4d8de945-af6d-40e6-abd4-343df5899b54)


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
