## +Linkedin-Node Essential Training

## [COURSE](https://www.linkedin.com/learning/node-js-essential-training-14888164/learning-the-node-js-basics?resume=false)

<details>
<summary>1. Node Global Objects </summary>

# Node Global Objects

## [https://nodejs.org/api/globals.html](https://nodejs.org/api/globals.html)

![image](https://github.com/user-attachments/assets/e03b672a-ef3a-4bef-8a55-e7efdb5be969)

## Check Node Version

```js
node -v
```

### src-AI-Software/my_projects/10_Node_Essential_Training/global.js:

```js
const path = require("path");

global.console.log("This is the global.js File.");
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.join(__dirname, "index.js"));

for (let key in global) {
  console.log(key);
}
```

```x
This is the global.js File.
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/global.js

global.js
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/index.js

global
clearImmediate
setImmediate
clearInterval
clearTimeout
setInterval
setTimeout
queueMicrotask
structuredClone
atob
btoa
performance
fetch
navigator
crypto
```

# #END</details>

<details>
<summary>2. Node Process Objects </summary>

# Node Process Objects

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/global.js:

```js
console.log(process.argv);

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let username = grab("--username");
let password = grab("--password");

console.log(username);
console.log(password);

```

```x
[
  '/opt/homebrew/Cellar/node/22.4.0/bin/node',
  '/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP/global.js',
  '--username',
  'admin',
  '--password',
  'admin123'
]


admin
admin123
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/0df1b0e1-27a6-4e4f-af32-360eb038d016">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/d5ce2817-d413-4ad3-82da-a769b5f9e037">

# #END</details>

<details>
<summary>3. Working with Standard Input and Output </summary>

# Working with Standard Input and Output 

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/global.js:

```js
// Write an output to Terminal
process.stdout.write("Hello World\n\n");
process.stdout.write("My name is:\nHenry");

// Quiz Example
const questions = [
  "What is your name?",
  "Where do you live?",
  "What is your preferred programming language",
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\nQuestion ${i + 1}: ${questions[i]}`);
  process.stdout.write(` > `);
  process.stdout.write(`\nAnswer: `);
}

ask();

process.stdin.on("data", function (data) {
  let trimmedData = data.toString().trim();
  answers.push(trimmedData);
  process.stdout.write(trimmedData);

  if (questions.length > answers.length) {
    ask(answers.length);
  } else {
    process.stdout.write(`\n\n\nAnswers: ${answers.join(" | ")}`);
    process.exit();
  }
});

process.on("exit", function () {
  console.log("\nThank you!");
  console.log("Goodbye.");
});

```

```x
Hello World

My name is:
Henry


Question 1: What is your name? > 
Answer: Ifeanyi
Ifeanyi


Question 2: Where do you live? > 
Answer: Calgary
Calgary


Question 3: What is your preferred programming language > 
Answer: Python
Python


Answers: Ifeanyi | Calgary | Python
Thank you!
Goodbye.
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/1b2eb462-5f7b-45a4-90bb-18cdab5e6036">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/a0cc2c41-88ee-4f7d-9493-cb1a10e0c675">

# #END</details>

<details>
<summary>4. Using SetTimeout - Creating a Delay </summary>

# Using SetTimeout - Creating a Delay

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
