## +Linkedin-Building a Website with Node.js and Express.js

## [COURSE](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/dynamic-websites-with-node-and-express?resume=false)

<details>
<summary>1. Clone Project Directory </summary>

# Clone Project Directory

## [https://github.com/danielkhan/building-website-nodejs-express/tree/master](https://github.com/danielkhan/building-website-nodejs-express/tree/master)

```x
git clone --bare https://github.com/danielkhan/building-website-nodejs-express.git
cd building-website-nodejs-express.git
git config --bool core.bare false
git reset --hard
git branch
```

# #END</details>

<details>
<summary>2. Setup Node Environment </summary>

# Setup Node Environment

## Initialize npm

```x
npm init -y
```

## Install Express

```x
npm install --save express 
```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```x
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  }
}

```

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/4f5aa3ee-a374-41a1-b6aa-0acf3c868ba1">

# #END</details>

<details>
<summary>3. Setup Express Server </summary>

# Setup Express Server

### src-AI-Software/my_projects/01_building_a_website/server.js:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express :)");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Ctrl + C to stop");
});

```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```x
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

## Run Server

```x
npm run start
```

```x
➜  01_building_a_website git:(main) ✗ npm run start

> 01_building_a_website@1.0.0 start
> node server.js

Server running on port 3000
Ctrl + C to stop
```

![image](https://github.com/user-attachments/assets/61bc6bf1-d244-466e-ab70-4d7b63bace60)

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/73d72bb0-fb1b-4033-86a5-e495d60c32ad">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/64792e2c-997d-4075-9974-2db4d7f73616">

# #END</details>

<details>
<summary>4. Setup HTML Static Template </summary>

# Setup HTML Static Template

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


# #END<details>
