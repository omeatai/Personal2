## +Linkedin-Advanced Express

## [COURSE](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?resume=false)

<details>
<summary>1. Introduction </summary>

# Introduction

## Check Node Version

```x
node -v
```

## Check NPM Version

```x
npm -v
```

## Install NPM

```x
sudo npm install -g npm@latest
```

## Initialize npm

```x
npm init -y
```

## Install Express and Nodemon

```x
npm install --save express nodemon
```

## Setup package.json file

```json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  }
}
```

## Run Server

```x
npm run start
```

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/43636f19-0809-451f-8ac4-5ce545fcaac7">


# #END</details>

<details>
<summary>2. Setup Hello World Route </summary>

# Setup Hello World Route

### src-AI-Software/my_projects/03_advanced_express/APP/server.js:

```js
const express = require("express");
const app = express();
const PORT = 3000;

function handler(req, res) {
  return res.send("<h1>Hello World</h1>");
}

app.get("/", handler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});

```

![image](https://github.com/user-attachments/assets/9d6634e3-463a-4e1c-9741-2c665f095412)

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/91e6df03-cbe9-4bac-b074-98e08f6b7846">

# #END</details>

<details>
<summary>3. Creating a markdown-to-html template engine </summary>

# Creating a markdown-to-html template engine

## Install marked

```js
npm install marked
```

```json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "marked": "^13.0.2",
    "nodemon": "^3.1.4"
  }
}

```

### src-AI-Software/my_projects/03_advanced_express/APP/server.js:

```js
const express = require("express");
const fs = require("fs");
const util = require("util");
const { marked } = require("marked");

const app = express();
const PORT = 3000;

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath, "utf-8");
    const rendered = content.toString().replace(`{headline}`, options.headline);
    return callback(null, marked(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  //   return res.send("<h1>Hello World</h1>");
  return res.render("index", { headline: "Hello World" });
}

app.get("/", handler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});

```

### src-AI-Software/my_projects/03_advanced_express/APP/views/index.md:

```md
# {headline}
* List Item 1
* **List Item 2**
* __List Item 3__

## h2 sub-headline

### h3 sub-headline
```

![image](https://github.com/user-attachments/assets/8ab5acd0-8c06-43de-bb6c-d6c28caaa7dc)
![image](https://github.com/user-attachments/assets/b6fd126a-b217-4fa7-9aa7-c898cfaa3bb2)

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/2a8b4e00-4dbd-43f4-b2e8-97326f14801f">
<img width="1379" alt="image" src="https://github.com/user-attachments/assets/916ccace-6a2d-4452-96b9-38829d026de2">

# #END</details>

<details>
<summary>4. Setting up MongoDB </summary>

# Setting up MongoDB

## Install dotenv

```x
npm install dotenv
```

```json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "marked": "^13.0.2",
    "nodemon": "^3.1.4"
  }
}

```

### src-AI-Software/my_projects/03_advanced_express/APP/.env:

```js
DEVELOPMENT_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/development?retryWrites=true&w=majority&appName=Cluster0
PRODUCTION_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/production?retryWrites=true&w=majority&appName=Cluster0
TEST_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
```

### src-AI-Software/my_projects/03_advanced_express/APP/server.js:

```js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const fs = require("fs");
const util = require("util");
const { marked } = require("marked");

const app = express();
const PORT = 3000;

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath, "utf-8");
    const rendered = content.toString().replace(`{headline}`, options.headline);
    return callback(null, marked(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  //   return res.send("<h1>Hello World</h1>");
  return res.render("index", { headline: "Hello World" });
}

app.get("/", handler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});

```

![image](https://github.com/user-attachments/assets/4ac18238-48cb-43cb-a1ed-5e03196f077e)
![image](https://github.com/user-attachments/assets/0d272e60-7832-4745-9539-f1e90022e4b3)
![image](https://github.com/user-attachments/assets/ed799881-b62e-48aa-92d1-7cebc16b3ff2)
![image](https://github.com/user-attachments/assets/8af52616-cdc3-4a94-91e8-1822a40b49e4)
![image](https://github.com/user-attachments/assets/39bf9663-c4ea-4d64-8659-326de364355f)

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/0fddfcc4-e09b-4b2c-b0dc-17f400ce66f7">

# #END</details>

<details>
<summary>5. Connecting to MongoDB with mongoose </summary>

# Connecting to MongoDB with mongoose

## Install Mongoose

```js
npm install --save mongoose
```

### src-AI-Software/my_projects/03_advanced_express/APP/.env:

```js
DEVELOPMENT_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/development?retryWrites=true&w=majority&appName=Cluster0
PRODUCTION_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/production?retryWrites=true&w=majority&appName=Cluster0
TEST_DB_URL=mongodb+srv://<username>:<password>@cluster0.vrabuaf.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
```

### src-AI-Software/my_projects/03_advanced_express/APP/server.js:

```js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const fs = require("fs");
const util = require("util");
const { marked } = require("marked");

const app = express();
const PORT = 3000;
const db = require("./lib/db");

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath, "utf-8");
    const rendered = content.toString().replace(`{headline}`, options.headline);
    return callback(null, marked(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  //   return res.send("<h1>Hello World</h1>");
  return res.render("index", { headline: "Hello World" });
}

app.get("/", handler);

app.listen(PORT, () => {
  db(); // Connect to mongo database
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});

```

### src-AI-Software/my_projects/03_advanced_express/APP/lib/db.js:

```js
const mongoose = require("mongoose");

module.exports = async function () {
  try {
    await mongoose
      .connect(process.env.DEVELOPMENT_DB_URL, {})
      .then(() => console.log("Connected to MongoDB..."))
      .catch((err) => console.error("Could not connect to MongoDB...", err));
  } catch (err) {
    console.log(err);
  }
};

```

```x
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server is running on port 3000
Press Ctrl-C to stop the server
Connected to MongoDB...

```

![image](https://github.com/user-attachments/assets/e5592c97-ce31-444f-9413-56b799850ef7)

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/918adb4b-354e-41c0-bc8a-7d82dd43cc6b">
<img width="1379" alt="image" src="https://github.com/user-attachments/assets/07772138-f24d-4de6-8f54-29863ba1e9cb">

# #END</details>

<details>
<summary>6. Creating mongoose User Schema </summary>

# Creating mongoose User Schema

## Install Email Validator

```js
npm install --save email-validator
```

### src-AI-Software/my_projects/03_advanced_express/APP/server.js:

```js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const fs = require("fs");
const util = require("util");
const { marked } = require("marked");

const app = express();
const PORT = 3000;
const db = require("./lib/db");

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath, "utf-8");
    const rendered = content.toString().replace(`{headline}`, options.headline);
    return callback(null, marked(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  //   return res.send("<h1>Hello World</h1>");
  return res.render("index", { headline: "Hello World" });
}

app.get("/", handler);

app.listen(PORT, () => {
  db(); // Connect to mongo database
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});

```

### src-AI-Software/my_projects/03_advanced_express/APP/models/UserModel.js:

```js
const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
      // unique: true,
      index: { unique: true },
      match: /^[a-zA-Z0-9]+$/,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: { unique: true },
      validate: {
        validator: (email) => emailValidator.validate(email),
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 50,
      trim: true,
      index: { unique: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);

```

<img width="1379" alt="image" src="https://github.com/user-attachments/assets/0e6dc3d4-2ecf-465f-91db-fa56b89da21f">


# #END</details>

<details>
<summary>7. Using bcrypt to hash and validate passwords </summary>

# Using bcrypt to hash and validate passwords

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
