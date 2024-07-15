## +Linkedin-Build Powerful Web Apps with Node.js

## [COURSE](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js)

<details>
<summary>1. Check Node and npm version </summary>

# Check Node and npm version

```x
node -v
npm -v
```

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/fd768588-8a3e-4251-b35c-42a9963b381e">


# #END</details>

<details>
<summary>2. Using Express Application Generator to creact an Example Project </summary>

# Using Express Application Generator to creact an Example Project

## [https://expressjs.com/en/starter/generator.html](https://expressjs.com/en/starter/generator.html)

![image](https://github.com/user-attachments/assets/2e952a6c-be2a-4ce6-b136-e4b362e2c02a)

## Create Project Folder

```x
mkdir example_project
cd example_project
```

## Create Express App with Application Generator

```x
npx express-generator --git --view=hbs example_app
```

```x
npm install express-generator
express --git --view=hbs example_app
```

## Install dependencies

```x
cd example_app
npm install
```

## On MacOS or Linux, run the app with this command

```x
DEBUG=example_app:* npm start
```

## Create Script to Run App

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/example_project/example_app/package.json:

```json
{
  "name": "example-app",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "DEBUG=example_app:* npm start"
  },
  "dependencies": {
    "cookie-parser": "^1.4.4",
    "debug": "^2.6.9",
    "express": "^4.16.1",
    "hbs": "^4.0.4",
    "http-errors": "^1.6.3",
    "morgan": "^1.9.1"
  }
}
```

## Run App

```x
npm run dev
```

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/example_project/example_app/app.js:

```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/example_project/example_app/routes/index.js:

```js
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

```

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/example_project/example_app/views/index.hbs:

```hbs
<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>

```

![image](https://github.com/user-attachments/assets/53ad2975-7e46-41f8-97fb-78c6c5a5e3eb)

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/57232fde-e820-44c4-adeb-048532b84bd9">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/42cb7369-acba-4039-9565-92ee0a269a49">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/8e5c90cb-1026-4d9f-975d-b89221f9c9c9">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/3e9523a7-e376-4756-be30-e8ec718799d8">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/94935ea0-e41d-49cc-9cf7-71b097b5b86d">

# #END</details>

<details>
<summary>3. Setup Basic Express Project - express_project </summary>

# Setup Basic Express Project - express_project

## Create Project Folder

```x
mkdir express_project
cd express_project
```

## Initialize npm Project

```x
npm init -y
```

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/express_project/package.json:

```json
{
  "name": "express_project",
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

## install Dependencies - Express and Nodemon, @babel/core, @babel/cli, @babel/preset-env and @babel/node

```x
npm install --save express nodemon
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

```x
{
  "name": "express_project",
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
    "nodemon": "^3.1.4"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.8",
    "@babel/core": "^7.24.9",
    "@babel/node": "^7.24.8",
    "@babel/preset-env": "^7.24.8"
  }
}
```

## Create babel file

```x
touch .babelrc
```

### src-AI-Software/my_projects/01_Build_Powerful_Web_Apps_with_Node/express_project/.babelrc:

```x
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/5fe7b8e8-ca9f-46e2-83d5-c23b8ee2b1eb">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/05afcdc8-d29b-48aa-99f1-338ec35eb9be">

# #END</details>

<details>
<summary>4. Setup Package.json file with scripts </summary>

# Setup Package.json file with scripts

```js

```

```js

```

```js

```

```js

```

```js

```


# #END</details>


