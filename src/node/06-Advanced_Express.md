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
<summary>3. Setup Route </summary>

# Setup Route

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
