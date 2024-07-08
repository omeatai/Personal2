## +Linkedin-Building RESTful APIs with Node.js and Express

<details>
<summary>1. Install Node and Express </summary>

# Install Node and Express

## Check Node Version

```x
node --version
npm --version
```

## Create Project Folder

```x
mkdir crm
ls
```

## Initialise npm

```x
cd crm
npm init -y
```

```js
{
  "name": "crm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

## Install Express

```x
npm i express
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a52e046a-9e61-4d71-9302-01612a15153a)

<img width="1505" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/8f2e9309-246d-4076-b3c8-182e9f14e3f6">

# #END</details>

<details>
<summary>2. Install and Configure MongoDB </summary>

# Install and Configure MongoDB

## Install Homebrew

```x
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## [MongoDB Website](https://www.mongodb.com/)

## [Install MongoDB on Mac](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

## [Mongoose Website ](https://mongoosejs.com/)

Mongodb.com --> Products --> Community Edition --> Download

```x
xcode-select --install
brew tap mongodb/brew
brew update
brew install mongodb-community@7.0
```

## To Run MongoDB:

```py
brew services start mongodb-community@7.0
```

## To stop a mongod running:

```py
brew services stop mongodb-community@7.0
```

## To verify that MongoDB is running:

```py
brew services list
```

## Connect and Use MongoDB:

```py
mongosh
```

## Install Mongoose

```x
npm i mongoose
```

```js
{
  "name": "crm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "mongoose": "^8.4.5"
  }
}

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/dfb00874-456e-4941-a9ea-fb6e22662824)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/4ca66a64-2c45-4ff9-8572-fc0066f878fb)

<img width="1505" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/ccf17fa2-1b89-4c02-b268-7b9dc2ceb205">

# #END</details>

<details>
<summary>3. Configure Babel </summary>

# Configure Babel

```py

```

```py

```

```py

```

```py

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


## Make Migrations

```x
python manage.py makemigrations
python manage.py migrate
```

# #END</details>
