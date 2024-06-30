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
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/70e47928-735f-4416-b1d3-b989fc25b351)

### src-AI-Software/my_projects/03_restful_apls_proj/templates/store/base.html:

```html
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{% block title %}{% endblock title %}</title>
    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/album/">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>

<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Products</h1>
        <p class="lead text-body-secondary">Discover the best deals on a wide range of products tailored just for you. From the latest electronics and trendy fashion to home essentials and more, we have everything you need in one place. Enjoy seamless shopping, fast delivery, and excellent customer service. Happy shopping!</p>
        <p>
          <a href="#" class="btn btn-primary my-2">View Categories</a>
          <a href="#" class="btn btn-secondary my-2">My Cart</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">
        {% block content %}{% endblock content %}
    </div>
  </div>

</main>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    </body>
</html>

```

### src-AI-Software/my_projects/03_restful_apls_proj/store/templates/store/product_list.html:

```html
{% extends 'store/base.html' %}

{% block title %}
Products
{% endblock title %}

{% block content %}

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

    {% for product in products %}
    <div class="col">
        <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">S/N: 000{{ product.id }}</text>
        </svg>
        <div class="card-body">
            <h2>{{ product.name }}</h2>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-body-secondary">${{ product.price }}</small>
            </div>
        </div>
        </div>
    </div>
    {% endfor %}
</div>

{% endblock content %}

```

<img width="1493" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/56a989b1-4567-4ed7-90ce-d5a9d6cc3af2">
<img width="1493" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/592c028f-b922-42c2-84ce-4b05f9cc9c12">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/687dee76-5b56-43b0-9930-88543014418f)

# #END</details>

<details>
<summary>6. Adding Static and Media Files to Django </summary>

# Adding Static and Media Files to Django

### src-AI-Software/my_projects/03_restful_apls_proj/demo_project/settings.py:

```py
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_ROOT = os.path.abspath(os.path.join(BASE_DIR, 'store', 'uploads'))
MEDIA_URL = '/uploads/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
```

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
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('store.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

```

## Run Collectstatic (To add all static folders into a single main folder):

```py
python manage.py collectstatic
```

<img width="1493" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/42ed4634-c3fb-4a80-8fd3-ed12455e7e0f">
<img width="1493" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/81d822ec-97a9-44a9-8ed4-70efaebbf249">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/6e95459a-d5d5-4aa7-9d6e-4475be3f5996)

# #END</details>

<details>
<summary>7. Creating Models in Django </summary>

# Creating Models in Django

### src-AI-Software/my_projects/03_restful_apls_proj/store/models.py:

```py


from django.utils import timezone
from django.db import models


class Product(models.Model):
    DISCOUNT_RATE = 0.10

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()
    sale_start = models.DateTimeField(blank=True, null=True, default=None)
    sale_end = models.DateTimeField(blank=True, null=True, default=None)
    photo = models.ImageField(blank=True, null=True,
                              default=None, upload_to='products')

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def is_on_sale(self):
        now = timezone.now()
        if self.sale_start:
            if self.sale_end:
                return self.sale_start <= now <= self.sale_end
            return self.sale_start <= now
        return False

    def get_rounded_price(self):
        return round(self.price, 2)

    def current_price(self):
        if self.is_on_sale():
            discounted_price = self.price * (1 - self.DISCOUNT_RATE)
            return round(discounted_price, 2)
        return self.get_rounded_price()

    def __repr__(self):
        return '<Product object ({}) "{}">'.format(self.id, self.name)

    def __str__(self):
        return '{}-{}'.format(self.id, self.name)


class ShoppingCart(models.Model):
    TAX_RATE = 0.13

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)

    class Meta:
        verbose_name = "ShoppingCart"
        verbose_name_plural = "ShoppingCarts"

    def subtotal(self):
        amount = 0.0
        for item in self.shopping_cart_items:
            amount += item.quantity * item.product.get_price()
        return round(amount, 2)

    def taxes(self):
        return round(self.TAX_RATE * self.subtotal(), 2)

    def total(self):
        return round(self.subtotal() * self.taxes(), 2)

    def __repr__(self):
        name = self.name or '[Guest]'
        address = self.address or '[No Address]'
        return '<ShoppingCart object ({}) "{}" "{}">'.format(self.id, name, address)

    def __str__(self):
        return '{}-{}'.format(self.id, self.name)


class ShoppingCartItem(models.Model):
    shopping_cart = models.ForeignKey(
        ShoppingCart, related_name='items', related_query_name='item', on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, related_name='+', on_delete=models.CASCADE)
    quantity = models.IntegerField()

    class Meta:
        verbose_name = "ShoppingCartItem"
        verbose_name_plural = "ShoppingCartItems"

    def total(self):
        return round(self.quantity * self.product.current_price())

    def __repr__(self):
        return '<ShoppingCartItem object ({}) {}x "{}">'.format(self.id, self.quantity, self.product.name)

    def __str__(self):
        return '{}-{}'.format(self.shopping_cart.id, self.product.name)


```

## Run migrations:

```x
python manage.py makemigrations
python manage.py migrate
```

```x
python manage.py runserver 
```

<img width="1527" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/18d496a7-e191-4619-a4be-c0c023ea32d5">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/865aaf48-b3dc-48aa-8341-d7018ac6b571)

# #END</details>

<details>
<summary>8. Setup Django Admin Panel </summary>

# Setup Django Admin Panel

## Create Super User

```x
python manage.py createsuperuser
```

### src-AI-Software/my_projects/03_restful_apls_proj/store/admin.py:

```py
from django.contrib import admin
from .models import Product, ShoppingCart, ShoppingCartItem


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price',
                    'sale_start', 'sale_end', 'photo', 'is_on_sale', 'get_rounded_price', 'current_price')


class ShoppingCartAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'subtotal', 'taxes', 'total')


class ShoppingCartItemAdmin(admin.ModelAdmin):
    list_display = ('shopping_cart', 'product', 'quantity', 'total')


admin.site.register(Product, ProductAdmin)
admin.site.register(ShoppingCart, ShoppingCartAdmin)
admin.site.register(ShoppingCartItem, ShoppingCartItemAdmin)

```

### src-AI-Software/my_projects/03_restful_apls_proj/store/models.py:

```py


from django.utils import timezone
from django.db import models


class Product(models.Model):
    DISCOUNT_RATE = 0.10

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()
    sale_start = models.DateTimeField(blank=True, null=True, default=None)
    sale_end = models.DateTimeField(blank=True, null=True, default=None)
    photo = models.ImageField(blank=True, null=True,
                              default=None, upload_to='products')

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def is_on_sale(self):
        now = timezone.now()
        if self.sale_start:
            if self.sale_end:
                return self.sale_start <= now <= self.sale_end
            return self.sale_start <= now
        return False

    def get_rounded_price(self):
        return round(self.price, 2)

    def current_price(self):
        if self.is_on_sale():
            discounted_price = self.price * (1 - self.DISCOUNT_RATE)
            return round(discounted_price, 2)
        return self.get_rounded_price()

    def __repr__(self):
        return '<Product object ({}) "{}">'.format(self.id, self.name)

    def __str__(self):
        return '{}-{}'.format(self.id, self.name)


class ShoppingCart(models.Model):
    TAX_RATE = 0.13

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)

    class Meta:
        verbose_name = "ShoppingCart"
        verbose_name_plural = "ShoppingCarts"

    def subtotal(self):
        amount = 0.0
        for item in self.shopping_cart_items:
            amount += item.quantity * item.product.get_price()
        return round(amount, 2)

    def taxes(self):
        return round(self.TAX_RATE * self.subtotal(), 2)

    def total(self):
        return round(self.subtotal() * self.taxes(), 2)

    def __repr__(self):
        name = self.name or '[Guest]'
        address = self.address or '[No Address]'
        return '<ShoppingCart object ({}) "{}" "{}">'.format(self.id, name, address)

    def __str__(self):
        return '{}-{}'.format(self.id, self.name)


class ShoppingCartItem(models.Model):
    shopping_cart = models.ForeignKey(
        ShoppingCart, related_name='items', related_query_name='item', on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, related_name='+', on_delete=models.CASCADE)
    quantity = models.IntegerField()

    class Meta:
        verbose_name = "ShoppingCartItem"
        verbose_name_plural = "ShoppingCartItems"

    def total(self):
        return round(self.quantity * self.product.current_price())

    def __repr__(self):
        return '<ShoppingCartItem object ({}) {}x "{}">'.format(self.id, self.quantity, self.product.name)

    def __str__(self):
        return '{}-{}'.format(self.shopping_cart.id, self.product.name)


```

## Run migrations:

```x
python manage.py makemigrations
python manage.py migrate
```

```x
python manage.py runserver 
```

<img width="1527" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/35673948-d69f-4181-a5a7-a86318d00cfe">

<img width="1527" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/fd49bc99-eab4-47e1-a587-9e56dff4a5dc">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a3aba51d-3aa1-43f7-aa74-89f620347e24)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f427ffd5-48bd-41f6-8a6b-64ccd483f3b7)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f36f519a-7fb6-4ec0-8a69-444497b5ef13)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/825fb62b-47b8-4515-84a5-49f23c2dec67)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/f7c310b9-f40a-473d-9b6d-23ed8af376e5)

# #END</details>

<details>
<summary>9. Add Products using Admin Panel </summary>

# Add Products using Admin Panel

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/671de37b-8a76-49b3-a53c-fbe959ab21b9)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/5e33c089-f630-471d-afd1-f80183934311)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7dc40e19-7bf9-4234-b672-4acc51d0b99a)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/40995476-2d27-41a0-bea7-c729db03e643)

# #END</details>

<details>
<summary>10. Using Django shell for creating and querying data </summary>

# Using Django shell for creating and querying data

## Run Shell:

```x
python manage.py shell
```

## Get Instance of Model Object:

```py
>>> from store.models import Product

>>> Product
<class 'store.models.Product'>

>>> myproduct = Product.objects.get(name='Vitamin B-Complex (100 caplets)')

>>> myproduct
<Product object (5) "Vitamin B-Complex (100 caplets)">

>>> myproduct.id
5

>>> myproduct.name
'Vitamin B-Complex (100 caplets)'

>>> myproduct.price
3.0

>>> myproduct.description
'Contains a combination of essential B vitamins that help convert food to energy.'

```

## Get all Object Instances

```py
>>> Product.objects.all()
<QuerySet [<Product object (2) "Mineral Water Strawberry">, <Product object (3) "Mineral Water Raspberry">,
<Product object (4) "Vitamin A 10,000 IU (125 caplets)">, <Product object (5) "Vitamin B-Complex (100 caplets)">]>

```

## Create New Object Instance

```py
>>> new_product = Product.objects.create(name='Mineral Water Peach', description='Flavoured with peach, loaded with anti-oxidants.', price=2.0)

>>> new_product
<Product object (6) "Mineral Water Peach">

>>> Product.objects.get(pk=6)
<Product object (6) "Mineral Water Peach">

>>> Product.objects.all()                                                                 
<QuerySet [<Product object (2) "Mineral Water Strawberry">, <Product object (3) "Mineral Water Raspberry">,
<Product object (4) "Vitamin A 10,000 IU (125 caplets)">, <Product object (5) "Vitamin B-Complex (100 caplets)">, <Product object (6) "Mineral Water Peach">]>

```

## Filter and Exclude contents

```py

>>> Product.objects.filter(name__startswith="Mineral")
<QuerySet [<Product object (2) "Mineral Water Strawberry">, <Product object (3) "Mineral Water Raspberry">, <Product object (6) "Mineral Water Peach">]>


>>> Product.objects.filter(description__icontains="anti-oxidant")
<QuerySet [<Product object (2) "Mineral Water Strawberry">, <Product object (3) "Mineral Water Raspberry">, <Product object (6) "Mineral Water Peach">]>


>>> Product.objects.exclude(description__icontains="vitamin")
<QuerySet [<Product object (2) "Mineral Water Strawberry">, <Product object (3) "Mineral Water Raspberry">, <Product object (6) "Mineral Water Peach">]>


>>> Product.objects.filter(description__icontains="essential").exclude(name__icontains="10,000")
<QuerySet [<Product object (5) "Vitamin B-Complex (100 caplets)">]>

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b141596d-5392-486d-a5a0-52564ac09eb6)

# #END</details>

<details>
<summary>11. Display all Products in Template </summary>

# Display all Products in Template


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
