## +Linkedin-Learning_npm_package_manager

## [COURSE](https://www.linkedin.com/learning/learning-npm-a-package-manager/learning-npm?resume=false)

<details>
<summary>1. Initializing Node Packages </summary>

# Initializing Node Packages

```x
npm init -y
```

```x
➜  01_learning_npm git:(main) npm init -y
Wrote to /Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/01_learning_npm/package.json:

{
  "name": "01_learning_npm",
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

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/db6e67b7-658e-4582-91ab-35dcc38066c7">

# #END</details>

<details>
<summary>2. Installing Dependencies </summary>

# Installing Dependencies

## Installing Main Dependencies

```x
npm install express
npm install --save express
npm install -S express
```

## Installing Dev Dependencies

```x
npm install --save-dev babel cli
npm install -D babel cli 
```

```json
{
  "name": "01_learning_npm",
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
    "express": "^4.19.2"
  },
  "devDependencies": {
    "babel": "^6.23.0",
    "cli": "^1.0.1"
  }
}

```

## Installing Dependencies globally to use in your projects

```x
npm install -g create-react-app 
create-react-app crud-app 
cd crud-app
npm install --save axios react-bootstrap bootstrap
```

## Installing Dependencies globally temporarily (use once)

```x
npx create-react-app crud-app 
```

# #END</details>

<details>
<summary>3. Updating a Dependency </summary>

# Updating a Dependency

### Checking packages that are outdated

```x
npm outdated
npm outdated -g
```

### Installing latest versions

```js
npm install eslint@8.32.0
npm install eslint@latest
 
npm install -g npm@10.8.2
npm install -g npm@latest 
```

# #END</details>

<details>
<summary>4. Removing a Dependency </summary>

# Removing a Dependency

```js
npm install eslint
npm uninstall eslint

npm install --save-dev nodemon
npm uninstall --save-dev nodemon
```

# #END</details>

<details>
<summary>5. Semantic Versioning </summary>

# Semantic Versioning

![image](https://github.com/user-attachments/assets/ec509056-a85c-4d16-b6b0-c57b064ef563)
![image](https://github.com/user-attachments/assets/76089f2d-12fd-4037-9559-8a9d5f1f3dd8)
![image](https://github.com/user-attachments/assets/6369203a-e99a-46cd-9ac0-98b199548ed3)
![image](https://github.com/user-attachments/assets/93f9237a-1f26-4ffe-bf9e-0951c51e68df)


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
