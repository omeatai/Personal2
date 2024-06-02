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
class Book:
    # TODO: Properties defined at the class level are shared by all instances
    # Class Attributes
    BOOK_TYPES = ("HARDCOVER", "PAPERBACK", "EBOOK")
    __booklist = None

    # static methods do not receive class or instance arguments
    # and usually operate on data that is not instance-specific
    @staticmethod
    def get_booklist():
        if Book.__booklist == None:
            Book.__booklist = []
        return Book.__booklist

    # class methods receive a class as their argument and can only
    # operate on class-level data
    @classmethod
    def get_book_types(cls):
        return cls.BOOK_TYPES

    # instance methods receive a specific object instance as an argument
    def set_title(self, newtitle):
        self.title = newtitle

    def __init__(self, title, booktype):
        self.title = title
        if (not booktype in self.BOOK_TYPES):
            raise ValueError(f"{booktype} is not a valid book type")
        else:
            self.booktype = booktype


# TODO: access the class attribute
print("Book types: ", Book.get_book_types())

# TODO: Create some book instances
b1 = Book("Title 1", "HARDCOVER")
b2 = Book("Title 2", "PAPERBACK")

# TODO: Use the static method to access a singleton object
thebooks = Book.get_booklist()
thebooks.append(b1)
thebooks.append(b2)
print(thebooks)

```

<img width="1399" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6cb999e1-aee1-45ac-aaa1-19eda2bcd724">

# #END</details>

<details>
<summary>6. Challenge: Stocks </summary>

# Challenge: Stocks

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/cbae201c-98c7-4b77-bab5-f2952c69a925)

```py
class Stock:
    def __init__(self, ticker, price, company) -> None:
        self.ticker = ticker
        self.price = price
        self.company = company

    def get_description(self):
        return f"{self.ticker}: {self.company} -- ${self.price}"


# ~~~~~~~~~~~~~~~~~~ TEST CODE ~~~~~~~~~~~~~~~~~~~~~~~~~
if __name__ == "__main__":
    msft = Stock("MSFT", 342.0, "Microsoft Corp")
    goog = Stock("GOOG", 135.0, "Google Inc")
    meta = Stock("META", 275.0, "Meta Platforms Inc")
    amzn = Stock("AMZN", 135.0, "Amazon Inc")

    print(msft.get_description())
    print(goog.get_description())
    print(meta.get_description())
    print(amzn.get_description())

```

<img width="1399" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/2cf6e829-2e46-4fce-8db3-76357b27aaa4">

# #END</details>

<details>
<summary>7. Understanding Inheritance </summary>

# Understanding Inheritance

```py
class Publication:
    def __init__(self, title, price):
        self.title = title
        self.price = price


class Periodical(Publication):
    def __init__(self, title, price, publisher, period):
        super().__init__(title, price)
        self.period = period
        self.publisher = publisher


class Book(Publication):
    def __init__(self, title, author, pages, price):
        super().__init__(title, price)
        self.author = author
        self.pages = pages


class Magazine(Periodical):
    def __init__(self, title, publisher, price, period):
        super().__init__(title, price, publisher, period)


class Newspaper(Periodical):
    def __init__(self, title, publisher, price, period):
        super().__init__(title, price, publisher, period)


b1 = Book("Brave New World", "Aldous Huxley", 311, 29.0)
n1 = Newspaper("NY Times", "New York Times Company", 6.0, "Daily")
m1 = Magazine("Scientific American", "Springer Nature", 5.99, "Monthly")

print(b1.author)
print(n1.publisher)
print(b1.price, m1.price, n1.price)

```

<img width="1399" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/e0f39339-3684-4958-880b-3ce23b7bee18">

# #END</details>

<details>
<summary>8. Understanding Abstract Base Classes </summary>

# Understanding Abstract Base Classes

```py
from abc import ABC, abstractmethod


class GraphicShape(ABC):
    # Inheriting from ABC indicates that this is an abstract base class
    def __init__(self):
        super().__init__()

    # declaring a method as abstract requires a subclass to implement it
    @abstractmethod
    def calc_area(self):
        pass


class Circle(GraphicShape):
    def __init__(self, radius):
        self.radius = radius

    def calc_area(self):
        return 3.14 * (self.radius ** 2)


class Square(GraphicShape):
    def __init__(self, side):
        self.side = side

    def calc_area(self):
        return self.side * self.side


# Abstract classes can't be instantiated themselves
# g = GraphicShape() # this will error

c = Circle(10)
print(c.calc_area())
s = Square(12)
print(s.calc_area())

```

<img width="1399" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/79512274-328a-4d98-9382-380fbea6420b">

# #END</details>

<details>
<summary>9. Using Multiple Inheritance </summary>

# Using Multiple Inheritance

```py
class A:
    def __init__(self):
        super().__init__()
        self.prop1 = "prop1"
        self.name = "Class A"


class B:
    def __init__(self):
        super().__init__()
        self.prop2 = "prop2"
        self.name = "Class B"


class C(B, A):
    def __init__(self):
        super().__init__()

    def showprops(self):
        print(self.prop1)
        print(self.prop2)
        print(self.name)


# create the class and call showprops()
c = C()
print(C.__mro__)
c.showprops()

```

<img width="1335" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/9e74b666-5a9d-4cc5-94c2-4b058cd0312f">

# #END</details>

<details>
<summary>10. Using Interfaces </summary>

# Using Interfaces

```py
from abc import ABC, abstractmethod


class GraphicShape(ABC):
    def __init__(self):
        super().__init__()

    @abstractmethod
    def calcArea(self):
        pass


class JSONify(ABC):
    @abstractmethod
    def toJSON(self):
        pass


class Circle(GraphicShape, JSONify):
    def __init__(self, radius):
        self.radius = radius

    def calcArea(self):
        return 3.14 * (self.radius ** 2)

    def toJSON(self):
        return f"{{ \"circle\": {str(self.calcArea())} }}"


c = Circle(10)
print(c.calcArea())
print(c.toJSON())

```

<img width="1335" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/b0c46e8b-97f1-4dac-a9aa-ead3e1f523f8">

# #END</details>

<details>
<summary>11. Using Composition </summary>

# Using Composition

```py
class Book:
    def __init__(self, title, price, author=None):
        self.title = title
        self.price = price

        # Use references to other objects, like author and chapters
        self.author = author
        self.chapters = []

    def addchapter(self, chapter):
        self.chapters.append(chapter)

    def getbookpagecount(self):
        result = 0
        for ch in self.chapters:
            result += ch.pagecount
        return result


class Author:
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    def __str__(self):
        return f"{self.fname} {self.lname}"


class Chapter:
    def __init__(self, name, pagecount):
        self.name = name
        self.pagecount = pagecount


auth = Author("Leo", "Tolstoy")
b1 = Book("War and Peace", 39.95, auth)

b1.addchapter(Chapter("Chapter 1", 104))
b1.addchapter(Chapter("Chapter 2", 89))
b1.addchapter(Chapter("Chapter 3", 124))

print(b1.title)
print(b1.author)
print(b1.getbookpagecount())

```

<img width="1335" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/0e2a6deb-7369-4216-a16a-137a8e5e1726">

<img width="1440" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/a0fa709d-8e92-4cdb-9ace-05a6fe485e86">

# #END</details>

<details>
<summary>12. Challenge: Stocks and Bonds </summary>

# Challenge: Stocks and Bonds

<img width="1440" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/e384b541-7524-47fb-8cb1-55b092ecc1fe">
<img width="1440" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/dba83078-64dd-4c89-a2a4-bcf07c6e167c">
<img width="1440" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/93fa0f7d-606b-469a-ab3b-0e02493cb9c9">

```py
# Challenge: create a class structure to represent stocks and bonds
# Requirements:
# Both stocks and bonds have a price
# Stocks have a company name and ticker
# Bonds have a description, duration, and yield
# You should not be able to instantiate the base class
# -- Subclasses are required to override get_description ()
# -- get_description returns formats for stocks and bonds
# For stocks: "Ticker: Company -- $Price"
# For bonds: "description: duration'yr' : $price : yieldamt%"

from abc import ABC, abstractmethod


class Asset(ABC):

    def __init__(self, price):
        self.price = price

    @abstractmethod
    def get_description(self):
        pass


class Stock(Asset):
    def __init__(self, ticker, price, company):
        super().__init__(price)
        self.ticker = ticker
        self.company = company

    def get_description(self):
        return f"{self.ticker}: {self.company} -- ${self.price}"


class Bond(Asset):
    def __init__(self, price, description, duration, yieldamt):
        super().__init__(price)
        self.description = description
        self.duration = duration
        self.yieldamt = yieldamt

    def get_description(self):
        return f"{self.description}: {self.duration}yr : ${self.price} : {self.yieldamt}%"


# ~~~~~~~~~ TEST CODE ~22~~~~~~
try:
    ast = Asset(100.0)
except:
    print("Can't instantiate Asset!")

msft = Stock("MSFT", 342.0, "Microsoft Corp")
goog = Stock("GOOG", 135.0, "Google Inc")
meta = Stock("META", 27510, "Meta Platforms Inc")
amzn = Stock("AMZN", 135.0, "Amazon Inc")

us30yr = Bond(95.31, "30 Year US Treasury", 30, 4.38)
us10yr = Bond(96.70, "10 Year US Treasury", 10, 4.28)
us5yr = Bond(98.65, "5 Year US Treasury", 5, 4.43)
us2yr = Bond(99.57, "2 Year US Treasury", 2, 4.98)

print(msft.get_description())
print(goog.get_description())
print(meta.get_description())
print(amzn.get_description())

print(us30yr.get_description())
print(us10yr.get_description())
print(us5yr.get_description())
print(us2yr.get_description())

```

<img width="1401" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/4dda58b2-3f3b-4a50-8ef1-1a3b8325c971">


# #END</details>

<details>
<summary>+LinkedIn - Python Essential Training </summary>

```py

```

```py

```

</details>
