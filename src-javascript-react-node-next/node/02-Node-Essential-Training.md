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
//setTimeout Global Method
const waitTime = 3000;

console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);

```

```x
setting a 3 second delay
done
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/0cae78ba-a1c7-4ed5-bfcc-7342b60cbda4">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/59b54e2f-44d7-4f5e-aae1-8bee325dbb29">

# #END</details>

<details>
<summary>5. Using SetInterval Method with SetTimeout </summary>

# Using SetInterval Method with SetTimeout

```js
//setTimeout Global Method
const waitTime = 5000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log(
    "Sorry, Time Limit Exceeded. You have to hang up or call back later."
  );
};

setTimeout(timerFinished, waitTime);

//setInterval Global Method
const waitInterval = 1000;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting on ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);

```

```x
➜  APP git:(main) ✗ node global.js
setting a 5 second delay
waiting on 1 seconds
waiting on 2 seconds
waiting on 3 seconds
waiting on 4 seconds
Sorry, Time Limit Exceeded. You have to hang up or call back later.
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/053d56b9-e53f-4616-831d-c985f1b76e01">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/9ad27497-83a0-42e1-b5d3-81bda2758c8d">

# #END</details>

<details>
<summary>6. Reporting Progress for SetInterval </summary>

# Reporting Progress for SetInterval

```js
//setTimeout Global Method
const waitTime = 10000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log("\nProcess Completed! Thank you!");
};

setTimeout(timerFinished, waitTime);

//setInterval Global Method
const waitInterval = 1000;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting.... ${p}%`);
};

const interval = setInterval(incTime, waitInterval);

```

```x
➜  APP git:(main) ✗ node global.js
setting a 10 second delay
waiting.... 90%
Process Completed! Thank you!

```

# #END</details>

<details>
<summary>7. Understanding Core Node Modules </summary>

# Understanding Core Node Modules

```js
const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.resolve(__filename));
console.log(path.sep);
console.log(path.delimiter);

const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);
util.log(dirUploads);
util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());
```

### console.log(path.parse(__filename));

```x
{
  root: '/',
  dir: '/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP',
  base: 'global.js',
  ext: '.js',
  name: 'global'
}
```

### console.log(path.basename(__filename));

```x
global.js
```

### console.log(path.dirname(__filename));

```x
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP
```

### console.log(path.extname(__filename));

```x
.js
```

### console.log(path.resolve(__filename));

```x
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP/global.js
```

### console.log(path.sep);

```x
/
```

### console.log(path.delimiter);

```x
:
```

```js
const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);
util.log(dirUploads);
util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());
```

```x
/Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP/www/files/uploads
13 Jul 12:34:38 - /Users/ifeanyiomeata/Desktop/SERVER/projects/src-AI-Software/my_projects/10_Node_Essential_Training/APP/www/files/uploads
13 Jul 12:34:38 - global.js
13 Jul 12:34:38 - {
  total_heap_size: 4947968,
  total_heap_size_executable: 524288,
  total_physical_size: 4702208,
  total_available_size: 2195260616,
  used_heap_size: 3386856,
  heap_size_limit: 2197815296,
  malloced_memory: 163968,
  peak_malloced_memory: 253952,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 2336,
  external_memory: 1399967
}
```

# #END</details>

<details>
<summary>8. Collecting Information with Readline </summary>

# Collecting Information with Readline

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
