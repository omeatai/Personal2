## +LinkedIn - Python Object Oriented Programming

<details>
<summary>1. Introduction </summary>

# Introduction

<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d233830b-cb15-4e42-b9aa-78aebfe08fdd">
<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/ad380fc4-2376-470c-8295-b185243e8f14">

# #END</details>

<details>
<summary>2. Basic Class Initialization </summary>

# Basic Class Initialization

```py
class Book:
    def __init__(self, title):
        self.title = title


# TODO: create instances of the class
book1 = Book("Brave New World")
book2 = Book("War and Peace")

# TODO: print the class and property
print(book1)
print(book1.title)

```

<img width="1383" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/81007ad2-8c5a-4e01-8969-47aeed03eccf">

# #END</details>

<details>
<summary>3. Setting Instance Methods and Attributes </summary>

# Setting Instance Methods and Attributes

```py
class Book:
    def __init__(self, title, pages, author, price):
        self.title = title
        self.pages = pages
        self.author = author
        self.price = price
        self.__secret = "This is a secret attribute"

    def set_discount_percentage(self, amount):
        self._discount = amount

    def get_price(self):
        if hasattr(self, "_discount"):
            return self.price - (self.price * self._discount/100)
        else:
            return self.price


# create some book instances
b1 = Book("War and Peace", "Leo Tolstoy", 1225, 39.95)
b2 = Book("The Catcher in the Rye", "JD Salinger", 234, 29.95)

# print the price of book1
print("Book 1 Price: ", b1.get_price())

# try setting the discount
print("Book 2 Price: ", b2.get_price())
b2.set_discount_percentage(25)
print("Book 2 new Price: ", b2.get_price())
print("Book 2 discount percentage: ", b2._discount)

# properties with double underscores are hidden by the interpreter
# print(b2.__secret)

```

<img width="1383" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/f69c15f3-bfc2-4e2d-a6fa-b7dd203c4146">

# #END</details>

<details>
<summary>4. Checking Instance Types </summary>

# Checking Instance Types

```py
class Book:
    def __init__(self, title):
        self.title = title


class Newspaper:
    def __init__(self, name):
        self.name = name


# Create some instances of the classes
b1 = Book("The Catcher In The Rye")
b2 = Book("The Grapes of Wrath")
n1 = Newspaper("The Washington Post")
n2 = Newspaper("The New York Times")

# TODO: use type() to inspect the object type
print(type(b1))
print(type(n1))

# TODO: compare two types together
print(type(b1) == type(b2))
print(type(b1) == type(n2))

# TODO: use isinstance to compare a specific instance to a known type
print(isinstance(b1, Book))
print(isinstance(n1, Newspaper))
print(isinstance(n2, Book))
print(isinstance(n2, object))

```

<img width="1383" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/72410a3a-8ecb-43d8-ba1e-0b0d7cb65e1c">

# #END</details>

<details>
<summary>5. Class Methods and Static Methods </summary>

# Class Methods and Static Methods

```py

```

# #END</details>

<details>
<summary>+LinkedIn - Python Essential Training </summary>

```py

```

```py

```

</details>
