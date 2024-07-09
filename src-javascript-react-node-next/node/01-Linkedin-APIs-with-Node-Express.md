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

## Install MongoDB

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

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/1c0f54b5-5b8d-44aa-9b0d-216988f2423a)

# #END</details>

<details>
<summary>3. Install and Configure Babel </summary>

# Install and Configure Babel

```x
npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
```

## Install Nodemon and Body-Parser

```js
npm i nodemon body-parser
```

```js
touch .babelrc
```

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/.babelrc:

```js
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

```js
{
  "presets": [
    ["@babel/env", {
      "targets": {
        "node": "current"
      }
    }]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ]
}
```

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/package.json:

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
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "mongoose": "^8.4.5",
    "nodemon": "^3.1.4"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/node": "^7.24.7",
    "@babel/preset-env": "^7.24.7"
  }
}

```

<img width="1521" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/dc2fbb4e-c55a-4f27-b186-fcab5eb9afa3">
<img width="1521" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/aa1801fe-a818-4c49-ad35-d98af4765bb4">

# #END</details>

<details>
<summary>4. Setup a basic Express Server </summary>

# Setup a basic Express Server

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/package.json:

```js
{
  "name": "crm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js --exec babel-node"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "mongoose": "^8.4.5",
    "nodemon": "^3.1.4"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/node": "^7.24.7",
    "@babel/preset-env": "^7.24.7"
  }
}
```

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/index.js:

```js
import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) =>
  res.send(`<h1>Your server is running on port ${PORT}</h1>`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d6b461eb-98a5-434e-b143-6a4bd707525f)

<img width="1521" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/b0a6d7fa-a1d1-4a73-8b19-f4b59dc97271">

# #END</details>

<details>
<summary>5. Setup Routing Endpoints </summary>

# Setup Routing Endpoints

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/index.js:

```js
import express from "express";
import routes from "./src/routes/crmRoute";

const app = express();
const PORT = 3001;

routes(app);

app.get("/", (req, res) =>
  res.send(`<h1>Your server is running on port ${PORT}</h1>`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

```

### src-AI-Software/my_projects/08_APIs_with_Node_Express/APP/crm/src/routes/crmRoute.js:

```js
const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("GET request successful!");
    })
    .post((req, res) => {
      res.send("POST request successful!");
    });

  app
    .route("/contact/:contactId")
    .put((req, res) =>
      res.send("PUT request successful!" + " ID: " + req.params.contactId)
    )

    .delete((req, res) =>
      res.send("DELETE request successful!" + " ID: " + req.params.contactId)
    );
};

export default routes;

```

## Test EndPoints with Postman

```x
GET http://localhost:3001/contact
```

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/cc149242-a871-41a9-aa00-ae5be44e14a9">

```x
POST http://localhost:3001/contact
```

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/95a8ebc0-ba1b-460d-bbb4-be61e534cd1e">

```js
PUT http://localhost:3001/contact/2
```

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6840a185-ef77-4884-8254-e114fe0846e4">

```js
DELETE http://localhost:3001/contact/4
```

<img width="1400" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/720ecea7-5cda-4248-8f59-d4fb7ba8f408">

<img width="1398" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/a3275a13-bad3-421a-bc12-7850642e8e57">

<img width="1398" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/80944b49-21cf-47b6-8581-ac78417f4a94">

# #END</details>

<details>
<summary>6. Setup Middleware </summary>

# Setup Middleware

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
