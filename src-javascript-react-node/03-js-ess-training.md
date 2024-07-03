# 03-Javascript Essential Training

<details>
<summary>1-JS Comments</summary>

## Introduction

```js
// Single line comment

/* Multi-line comment
See! this line is also commented out! */

/**
 * function updateBackpack
 * returns HTML
 * @param {string} update
 */
const updateBackpack = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(backpack);
  console.info(update);
};
```

# #END</details>

<details>
<summary>2-Loading JS in external files - async/defer</summary>

## Loading JS in external files - async/defer

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/02_03/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module demo</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>
```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/02_03/script.js:

```js
/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/7a2527a8-053d-42d7-8977-29590ac3c285)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/655ed317-c00b-41f1-b92a-ff22b6c8e4e3)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/1e866625-1f55-4eca-a72a-e4cb4694679f)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/ddb21a9a-886c-4e4d-ad69-3c52e3f86d9c)
![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d9843fb1-98be-4b06-afbc-220cec2b08ef)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/2bebf9cd-6349-4dc9-a93a-d7899a8e4dce">
<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/2d7d8f8b-937f-48cd-a3f4-b70f6399cd03">

# #END</details>

<details>
<summary>3-Using Javascript Modules</summary>

## Using Javascript Modules

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/02_04/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module demo</title>
    <script type="module" src="backpack.js"></script>
    <script type="module" src="script.js"></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/02_04/backpack.js:

```js
const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

export default backpack;
```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/02_04/script.js:

```js
/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
import backpack from "./backpack.js";

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/e8ce63d9-72da-4714-b72a-e464c8990440)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/a3c7f6bf-b688-4330-98fa-49ea38cbb029">
<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/09d0ecee-1361-42a3-85ad-4bc9128b9e1d">
<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/3123111d-0662-4741-8cef-9832b3554e4b">

# #END</details>

<details>
<summary>4-JS Objects</summary>

## JS Objects

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
