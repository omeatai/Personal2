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
<summary>4-JS Objects with Properties and Methods </summary>

## JS Objects with Properties and Methods

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_02/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Building a JavaScript object from scratch</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_02/script.js:

```js
/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack", // This is a Property
  volume: 30,
  color: "grey",
  pocketNum: 15, // This is a Property
  strapLength: {
    // This is a Property
    left: 26,
    right: 26,
  },
  lidOpen: false, // This is a Property

  toggleLid: function (lidStatus) {
    // This is a Method
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    // This is a Method
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/afb49d58-ca67-4516-bb29-c8c074b1f47e)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/45ef5068-dc20-48cb-a955-e48e320c64d8">

# #END</details>

<details>
<summary>5-JS Objects - Accessing Object Properties </summary>

## JS Objects - Accessing Object Properties

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_08/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object methods</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_08/script.js:

```js
/**
 * Create a Backpack object.
 */

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
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Left before:", backpack.strapLength.left);

console.log("The pocketNum value:", backpack["pocketNum"]);

let query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);
```

## Output

```x
The backpack object: {name: 'Everyday Backpack', volume: 30, color: 'grey', pocketNum: 15, strapLength: {…}, …}
The pocketNum value: 15
Left before: 26
The pocketNum value: 15
The pocketNum value: 15
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/ae17e8fd-7c08-4ab5-9153-fe24d75f9a05)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/17d02b3c-7bf2-4841-904b-5626e8bb1263">

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/Practice/03_07/script.js:

```js
/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Create an object for a car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "black",
  price: 20000,
  lightBulbON: true,
  "travel bag": {
    brand: "chanel",
    color: "black",
    straps: 2,
    compartments: 3,
    contents: {
      clothes: 5,
      shoes: 2,
      toiletries: 1,
      electronics: 1,
    },
  },

  start: function () {
    console.log("Car started");
  },

  stop: function () {
    console.log("Car stopped");
  },

  drive: function () {
    console.log("Car is moving");
  },

  toggleLights: function (lightBulbON) {
    this.lightBulbON = !this.lightBulbON;
    console.log(
      this.lightBulbON ? "Light is turned ON" : "Light is turned OFF"
    );
  },

  lightStatus: function () {
    console.log(this.lightBulbON ? "Light is ON" : "Light is OFF");
    return this.lightBulbON;
  },
};

console.log("Car", car);
console.log("Car Model", car.model);
console.log("Car Year", car.year);
console.log("Car Bulb Status", car.lightStatus());
console.log("Car Luggage contents", car["travel bag"].contents);

```

## Output

```x
Car 
{make: 'Toyota', model: 'Corolla', year: 2020, color: 'black', price: 20000, …}
Car Model Corolla
Car Year 2020
Light is ON
Car Bulb Status true
Car Luggage contents 
{clothes: 5, shoes: 2, toiletries: 1, electronics: 1}
clothes: 5
electronics: 1
shoes: 2
toiletries: 1

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/ec2ab3d9-bbbf-453f-9b2b-4811661d14b1)


# #END</details>

<details>
<summary>6-JS Objects - Access Methods </summary>

## JS Objects - Access Methods

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_08e/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object methods</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_08e/script.js:

```js
/**
 * Create a Backpack object.
 */

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
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);

```

## Output

```x
The backpack object: {name: 'Everyday Backpack', volume: 30, color: 'grey', pocketNum: 15, strapLength: {…}, …}color: "grey"lidOpen: falsename: "Everyday Backpack"newStrapLength: ƒ (lengthLeft, lengthRight)pocketNum: 15strapLength: {left: 10, right: 15}toggleLid: ƒ (lidStatus)volume: 30[[Prototype]]: Object
The pocketNum value: 15
Left before: 26
Left after: 10
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/ad7cec28-0894-4a41-9ad7-3800aecaa13e)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/776614f9-2f88-41b7-b2e9-b5fad9d297e6">

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/Practice/03_09/script.js:

```js
/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  setName: function (newName) {
    this.name = newName;
    console.log("The new name is: ", this.name);
  },

  setVolume: function (newVolume) {
    this.volume = newVolume;
    console.log("The new volume is: ", this.volume);
  },

  setColor: function (newColor) {
    this.color = newColor;
    console.log("The new color is: ", this.color);
  },

  setStrapLength: function (leftStrapLength, rightStrapLength) {
    this.strapLength.left = leftStrapLength;
    this.strapLength.right = rightStrapLength;
    console.log("The new strap length is: ", this.strapLength);
  },
};

```

## Output

```x
backpack.name
'Everyday Backpack'

backpack.setName("Ruby Backpack")
script.js:29 The new name is:  Ruby Backpack
undefined

backpack.name
'Ruby Backpack'

backpack.setStrapLength(10, 15)
script.js:45 The new strap length is:  {left: 10, right: 15}
undefined

backpack.strapLength
{left: 10, right: 15}
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/941ca51e-5a3a-40f2-8bf9-3a87b0875084)

<img width="1448" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d3cd6967-7127-4fd9-88c1-0a27042aba6e">

# #END</details>

<details>
<summary>7-JS Objects - Classes as Blueprints </summary>

## JS Objects - Classes as Blueprints

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_10/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Classes</title>
    <script type="module" src="Backpack.js"></script>
    <script type="module" src="script.js"></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_10/Backpack.js:

```js
/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_10/script.js:

```js
/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

```

## Output

```x
The everydayPack object: Backpack {name: 'Everyday Backpack', volume: 30, color: 'grey', pocketNum: 15, strapLength: {…}, …}
The pocketNum value: 15
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/9ba1b5a0-e4b3-4b20-82a6-2f147e214b1f)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/3b359261-5164-472b-aaa0-6e28bb1d527a">

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/d4550153-068d-48db-b8d7-ab06394f56d9">

# #END</details>

<details>
<summary>8-JS Objects - Functional Constructors as Blueprints </summary>

## JS Objects - Functional Constructors as Blueprints

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_11/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Classes</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_11/script.js:

```js
/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;

  // Methods are within the Constructor
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/34bcd280-72f6-494f-8071-94e599e0a678)

<img width="1448" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/f742e4f2-6adb-4cec-8acf-729fc1655e05">

# #END</details>

<details>
<summary>9-JS Objects - Extending Classes </summary>

## JS Objects - Extending Classes

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_11/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Extending Classes</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/03_11/script.js:

```js
/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    // Initialize the parent class properties
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    // New property specific to HikingBackpack
    this.hydrationCapacity = hydrationCapacity; // Capacity in liters
  }

  // Method to check the hydration level and alert if it needs refilling
  checkHydration() {
    if (this.hydrationCapacity > 0) {
      console.log(`You have ${this.hydrationCapacity} liters of water left.`);
    } else {
      console.log("Time to refill your water!");
    }
  }

  // Extend or override methods from the parent class if necessary
  // For example, adding extra functionality when the lid is toggled
  toggleLid(lidStatus) {
    super.toggleLid(lidStatus); // Call the parent method
    if (lidStatus) {
      console.log(
        "Your hiking backpack lid is open. Remember to check to make sure the hydration pack is inserted."
      );
    } else {
      console.log(
        "Your hiking backpack lid is closed. Remember to check to make sure the hydration pack is inserted."
      );
    }
  }
}

const everydayPack = new HikingBackpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  30
);

console.log("The everydayPack object:", everydayPack);
console.log("The hydration level:", everydayPack.hydrationCapacity);
console.log("Check the hydration pack", everydayPack.checkHydration());
console.log("Open the lid", everydayPack.toggleLid(true));

```

## Output

```x
The everydayPack object: HikingBackpack {name: 'Everyday Backpack', volume: 30, color: 'grey', pocketNum: 15, strapLength: {…}, …}
The hydration level: 30
You have 30 liters of water left.
Check the hydration pack undefined
Your hiking backpack lid is open. Remember to check to make sure the hydration pack is inserted.
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/feb208e1-8c4b-4bdb-9fb0-9e998fcb934b)

<img width="1448" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/b49ff9ef-27fd-4d26-92e8-ceceee4c45d6">

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/Practice/03_12b/index.html:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Practice: Making classes and objects</title>
    <script type="module" src="script.js" defer></script>
  </head>
  <body></body>
</html>

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/Practice/03_12b/script.js:

```js
/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import { Jug, ArmyJug } from "./Jug.js";

const mySmallJug = new Jug("My Small Jug", 5, "green", "plastic", false);
const myArmyJug = new ArmyJug("My Army Jug", 10, "brown", "metal", true, true);

console.log(mySmallJug);
console.log(mySmallJug.volume);
console.log(mySmallJug.setVolume(10));
console.log(mySmallJug.volume);

console.log(myArmyJug);
console.log(myArmyJug.color);
console.log(myArmyJug.hasStraw);
console.log(myArmyJug.toggleStraw());
console.log(myArmyJug.hasStraw);

/**
 * Creates a new WaterJug object.
 * @param {string} name - The name of the WaterJug.
 * @param {number} volume - The volume of the water in the jug in liters.
 * @param {string} color- The color of the water jug.
 * @param {string} material - The type of material used to make the jug.
 * @param {boolean} lidOpen - The status of the lid on the jug.
 */

const waterJug = {
  name: "Water Jug",
  volume: 15,
  color: "blue",
  material: "plastic",
  lidOpen: false,

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  setVolume: function (newVolume) {
    this.volume = newVolume;
    console.log("The new volume is: ", this.volume);
  },
  setName: function (newName) {
    this.name = newName;
    console.log("The new name is: ", this.name);
  },
};

```

### src-AI-Software/my_projects/06_js_ess_proj/Exercises/DEMO/Practice/03_12b/Jug.js:

```js
/**
 * Represents a water jug with various properties.
 * @class Jug
 * @constructor
 * @param {string} name - The name of the water jug.
 * @param {number} volume - The volume of water in the jug, in liters.
 * @param {string} color - The color of the jug.
 * @param {string} material - The material used to make the jug.
 * @param {boolean} lidOpen - Indicates whether the jug's lid is open or closed.
 */
class Jug {
  constructor(name, volume, color, material, lidOpen) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.material = material;
    this.lidOpen = lidOpen;
  }

  /**
   * Toggles the status of the Jug's lid from open to close or vice versa.
   * @returns {void}
   */
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  /**
   * Sets the volume of the Jug.
   * Logs the new volume to the console.
   * @param {number} newVolume - The new volume to set.
   * @returns {void}
   */
  setVolume(newVolume) {
    this.volume = newVolume;
    console.log(`The new volume is: ${this.volume}`);
  }

  /**
   * Sets the name of the Jug.
   * Logs the new name to the console.
   * @param {string} newName - The new name to set.
   * @returns {void}
   */
  setName(newName) {
    this.name = newName;
    console.log("The new name is: ", this.name);
  }
}

/**
 * Represents an Army Jug with properties and methods
 *
 * @class ArmyJug
 * @extends {Jug}
 * @constructor
 * @param {string} name - The name of the water jug.
 * @param {number} volume - The volume of water in the jug, in liters.
 * @param {string} color - The color of the jug.
 * @param {string} material - The material used to make the jug.
 * @param {boolean} lidOpen - Indicates whether the jug's lid is open or closed.
 * @param {boolean} hasStraw - Indicates whether a straw is in the Jug as true or false.
 */
class ArmyJug extends Jug {
  constructor(name, volume, color, material, lidOpen, hasStraw) {
    super(name, volume, color, material, lidOpen);
    this.hasStraw = true;
  }

  /**
   * Toggle the status of the hasStraw property in the Army Jug.
   * Logs the hasStraw property status
   * @returns {void}
   */
  toggleStraw() {
    this.hasStraw = !this.hasStraw;
    console.log("The straw is: ", this.hasStraw ? "inside" : "outside");
  }

  /**
   * Sets the volume of the Army Jug.
   * overwrites the setVolume method in the Jug class.
   * @param {number} newVolume
   * @returns {void}
   */
  setVolume(newVolume) {
    this.volume = newVolume;
    console.log("The new Army Jug volume is: ", this.volume + 30);
  }

  /**
   * Sets the name of the Army Jug.
   * Extends the setName method in the Jug class.
   * @param {string} newName
   * @returns {void}
   */
  setName(newName) {
    super.setName(newName);
    console.log("It is an Army Jug.");
  }
}

export { Jug, ArmyJug };

```

Output:

```x
Jug {name: 'My Small Jug', volume: 5, color: 'green', material: 'plastic', lidOpen: false}
5
The new volume is: 10
undefined
10

ArmyJug {name: 'My Army Jug', volume: 10, color: 'brown', material: 'metal', lidOpen: true, …}
brown
true
The straw is:  outside
undefined
false
```

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/47c10e6b-99d5-47c0-a8de-29738095641e)

<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/29e83d69-f50c-4be6-9067-85c2882a04f8">
<img width="1492" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/e47dcdf0-54e9-4688-a274-2f710a41cfea">

# #END</details>

<details>
<summary>10-JS Objects - Global Objects </summary>

## JS Objects - Global Objects

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
