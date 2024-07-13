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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("How do you like Node?", (answer) => {
//   console.log(`Your answer: ${answer}`);
// });

function collectAnswers(questions, done) {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
}

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?",
];

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

```

```x
➜  APP git:(main) ✗ node global.js
What is your name? Ifeanyi
Where do you live? Calgary
What are you going to do with Node.js? Code
Thank you for your answers!
[ 'Ifeanyi', 'Calgary', 'Code' ]
```

# #END</details>

<details>
<summary>9. Exporting Custom Modules </summary>

# Exporting Custom Modules

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/myModule.js:

```js
let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
  anything: true,
  who: "Bill",
  count,
  inc,
  dec,
  getCount,
};

```

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/app.js:

```js
const myModule = require("./myModule");
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();

console.log(myModule.anything);
console.log(myModule.who);
console.log(`the count is ${getCount()}`);

```

```x
➜  APP git:(main) ✗ node app
true
Bill
the count is 3
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/27215543-4159-4004-81c3-6e996ea1bef0">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/19977baf-2b46-470a-aeea-3a83c3a71a1c">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/392dad82-ded3-4582-a632-69e2c1922e0c">

# #END</details>

<details>
<summary>10. Using EventEmmiters to create Listeners for Custom Events </summary>

# Using EventEmmiters to create Listeners for Custom Events

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/app.js:

```js
const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (user, message) => {
  console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Computer", "Hello World");
emitter.emit("customEvent", "Eve", "That's pretty cool");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "process", "Goodbye!");
    process.exit();
  }
  emitter.emit("customEvent", "terminal", data.toString().trim());
});

```

```x
➜  APP git:(main) ✗ node app
Computer: Hello World
Eve: That's pretty cool
Hello
terminal: Hello
How are you?
terminal: How are you?
It's me Ifeanyi
terminal: It's me Ifeanyi
exit
process: Goodbye!
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/ec494ec4-522c-4314-931c-e3e576826442">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/94799bff-9690-4213-932b-d85c87d293bc">

# #END</details>

<details>
<summary>11. Setup Custom Modules with Exports </summary>

# Setup Custom Modules with Exports

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/lib/collectAnswers.js:

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};

```

### src-AI-Software/my_projects/10_Node_Essential_Training/APP/app.js:

```js
const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?",
];

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

```

```x
➜  APP git:(main) ✗ node app
What is your name? Ifeanyi
Where do you live? Calgary
What are you going to do with Node.js? Code all Day
Thank you for your answers!
[ 'Ifeanyi', 'Calgary', 'Code all Day' ]
```

<img width="1491" alt="image" src="https://github.com/user-attachments/assets/a23335d9-c440-4489-b660-10fd5cf082c9">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/eabe455c-1ed1-4efe-9e90-71558d18ebe2">
<img width="1491" alt="image" src="https://github.com/user-attachments/assets/a91dd7a3-1884-4ccf-8aef-89dd50f806a4">

# #END</details>

<details>
<summary>12. Setup Custom Event Modules with EventEmitters </summary>

# Setup Custom Event Modules with EventEmitters

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
