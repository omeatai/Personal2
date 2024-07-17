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
q
```

# #END</details>

<details>
<summary>2. Setup Node Environment </summary>

# Setup Node Environment

## Initialize npm

```x
npm init -y
```

## Install Express and Nodemon

```x
npm install --save express nodemon
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
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  }
}

```

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
    "start": "nodemon server.js"
  },
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

```x
➜  01_building_a_website git:(main) ✗ npm run start

> 01_building_a_website@1.0.0 start
> nodemon server.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
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

![image](https://github.com/user-attachments/assets/cf39ed10-111a-4675-ae30-114d7cf4b5c1)


![image](https://github.com/user-attachments/assets/1af87bb2-3cd8-4a00-b4cb-5a4b7d97f4e9)
![image](https://github.com/user-attachments/assets/08641379-d1a2-44e7-bb17-e52ab6d47e6b)
![image](https://github.com/user-attachments/assets/1821684e-8684-426c-a499-4564df2afdab)
![image](https://github.com/user-attachments/assets/9530e051-75e6-4ab2-a25d-b7b1e9618f00)

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
