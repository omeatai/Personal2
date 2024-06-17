## +LinkedIn - React Essential Training

<details>
<summary>1. Spin up React Dev Environment with React.new </summary>

# Spin up React Dev Environment with React.new

## Enter in browser

```x
react.new
```

### index.js

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

### App.js

```js
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

```

### styles.css

```js
.App {
  font-family: sans-serif;
  text-align: center;
}
```

<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/30e5b937-1ea4-4c35-b05d-699a75139d03">

# #End</details>
  
<details>
<summary>2. React Manually with CDN - Basic Setup </summary>

# React  Manually with CDN - Basic Setup

## Basic Setup

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/javascript">
      ReactDOM.render(
        React.createElement("h1", null, "Getting Started with React!"),
        document.getElementById("root")
      );
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/a59e3cc3-e2c2-45f6-9a9f-dcd88c3adb44">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/559f23f1-bab7-42a3-8629-c5028cf8d58d)

## Setup using Variables

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/javascript">
      let heading = React.createElement(
        "h1",
        { style: { color: "blue" } },
        "Heyyyy Everyone!"
      );

      ReactDOM.render(heading, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/86971e4d-8420-4f7d-b8ce-a8148aeb6b2b">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/a149800a-f2c5-4df8-92d5-ab74becba43b)

## Setup with multiple elements

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/javascript">
      let heading = React.createElement(
        "ul",
        { style: { color: "blue", fontSize: "50px" } },
        React.createElement("li", null, "Monday😊"),
        React.createElement("li", null, "Tuesday🤓"),
        React.createElement("li", null, "Wednesday🤪")
      );

      ReactDOM.render(heading, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5799d71c-aff6-4389-91b6-82bea8f3c576">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/d235efd4-8dd6-4f34-8c78-a068cbd3eba1)

# #End</details>
  
<details>
<summary>3. React Manually with CDN - JSX implementation using Babel </summary>

# React Manually with CDN - JSX implementation using Babel

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      let robot = "🤖";
      let cowboy = "🤠";
      let moon = "🌝";
      let name = "React";

      ReactDOM.render(
        <ul style={{ fontSize: "50px" }}>
          <li>Monday {robot}</li>
          <li>Tuesday {cowboy}</li>
          <li>Wednesday {moon}</li>
          <li>Name: {name.toUpperCase()}</li>
          <li>Name Length: {name.length}</li>
        </ul>,
        document.getElementById("root")
      );
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/757b8961-8577-4ae8-a086-88e22388b4d8">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/5c9e26b3-39f3-4fce-92ad-6f00844d337d)

# #End</details>
  
<details>
<summary>4. React Manually with CDN - Using JSX Components </summary>

# React Manually with CDN - Using JSX Components

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header() {
        return (
          <header>
            <h1>Eve's Kitchen</h1>
          </header>
        );
      }
      function Main() {
        return (
          <section>
            <p>We serve the most delicious food around</p>
          </section>
        );
      }
      function App() {
        return (
          <div>
            <Header />
            <Main />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/5262e05d-237c-48c2-b944-3ad2182141d9">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/fa23738a-862b-4fcf-8997-8e80a64579aa)

# #End</details>
  
<details>
<summary>5. React Manually with CDN - Adding JSX Props </summary>

# React Manually with CDN - Adding JSX Props

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header(props) {
        return (
          <header>
            <h1>{props.name}'s Kitchen</h1>
          </header>
        );
      }
      function Main(props) {
        return (
          <section>
            <p>We serve the most {props.adjective} food around.</p>
          </section>
        );
      }

      function Footer(props) {
        return (
          <footer>
            <p>Copyright {props.year}</p>
          </footer>
        );
      }

      function App() {
        return (
          <div>
            <Header name="Cindy" />
            <Main adjective="amazing" />
            <Footer year={new Date().getFullYear()} />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1411" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/95e5e987-b388-4346-88de-be34ced9f302">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/c97f4483-6c1d-40b8-9991-3469b8ea6e0d)

# #End</details>
  
<details>
<summary>6. React Manually with CDN - Workng with Arrays </summary>

# React Manually with CDN - Workng with Arrays

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header(props) {
        return (
          <header>
            <h1>{props.name}'s Kitchen</h1>
          </header>
        );
      }
      function Main(props) {
        return (
          <section>
            <ul>
              {props.dishes.map((dish) => (
                <li key={dish.id}>{dish.title}</li>
              ))}
            </ul>
          </section>
        );
      }

      function Footer(props) {
        return (
          <footer>
            <p>Copyright {props.year}</p>
          </footer>
        );
      }

      const dishes = [
        "Black Bean Soup",
        "Macaroni and Cheese",
        "Salmon and Potatoes",
        "Pizza",
      ];
      const dishObjects = dishes.map((dish, i) => ({
        id: i,
        title: dish,
      }));

      function App() {
        return (
          <div>
            <Header name="Cindy" />
            <Main adjective="amazing" dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1367" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/678f7797-f5df-4576-87f0-dc71008d51ee">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/bdd76dea-cd39-4b36-b8df-7d7b97999b72)

# #End</details>
  
<details>
<summary>7. React Manually with CDN - Displaying Images </summary>

# React Manually with CDN - Displaying Images

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header(props) {
        return (
          <header>
            <h1>{props.name}'s Kitchen</h1>
          </header>
        );
      }
      function Main(props) {
        return (
          <section>
            <img
              height={200}
              src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A fancy restaurant"
            />
            <ul>
              {props.dishes.map((dish) => (
                <li key={dish.id}>{dish.title}</li>
              ))}
            </ul>
          </section>
        );
      }

      function Footer(props) {
        return (
          <footer>
            <p>Copyright {props.year}</p>
          </footer>
        );
      }

      const dishes = [
        "Black Bean Soup",
        "Macaroni and Cheese",
        "Salmon and Potatoes",
        "Pizza",
      ];
      const dishObjects = dishes.map((dish, i) => ({
        id: i,
        title: dish,
      }));

      function App() {
        return (
          <div>
            <Header name="Cindy" />
            <Main adjective="amazing" dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1520" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/be9519b8-2fba-4802-8443-527a01696507">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/9717eb3a-0298-4575-a677-a1e2161442ee)

### [https://www.pexels.com/](https://www.pexels.com/)

<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/c88ac4ab-14f0-4fb4-8735-0b1b3909f59e">
<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/765bf001-1988-45a4-be4b-8a5e9a16a5a0">

# #End</details>
  
<details>
<summary>8. React Manually with CDN - Using React Fragments </summary>

# React Manually with CDN - Using React Fragments

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header(props) {
        return (
          <header>
            <h1>{props.name}'s Kitchen</h1>
          </header>
        );
      }
      function Main(props) {
        return (
          <section>
            <img
              height={200}
              src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A fancy restaurant"
            />
            <ul>
              {props.dishes.map((dish) => (
                <li key={dish.id}>{dish.title}</li>
              ))}
            </ul>
          </section>
        );
      }

      function Footer(props) {
        return (
          <footer>
            <p>Copyright {props.year}</p>
          </footer>
        );
      }

      const dishes = [
        "Black Bean Soup",
        "Macaroni and Cheese",
        "Salmon and Potatoes",
        "Pizza",
      ];
      const dishObjects = dishes.map((dish, i) => ({
        id: i,
        title: dish,
      }));

      function App() {
        return (
          <React.Fragment>
            <Header name="Cindy" />
            <Main adjective="amazing" dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} />
          </React.Fragment>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<img width="1520" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/14c33af8-4113-4c0c-aa5d-80ad5bc81da0">

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/b90a0046-76ad-4e15-ab5a-3f2d0f0050f5)

# #End</details>
  
<details>
<summary>9. Using Create React App </summary>

# Using Create React App

## Check Node and NPM versions

```x
node -v
npm -v
```

## Create React App

```x
npx create-react-app my-app
```

## Start React App

```x
cd my-app
npm start

#npm install
```

### src-AI-Software/my_projects/02_react_ess_proj/my-app/package.json:

```js
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### src-AI-Software/my_projects/02_react_ess_proj/my-app/src/index.js:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### src-AI-Software/my_projects/02_react_ess_proj/my-app/src/App.js:

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

### src-AI-Software/my_projects/02_react_ess_proj/my-app/src/App.css:

```js
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/656df0a5-1704-4ee4-bfa9-0bc144b9fbf8">
<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/1657d3bc-2df2-4ffb-8416-7811221a155a">

# #End</details>
  
<details>
<summary>10. Destructing Arrays and Objects </summary>

# Destructing Arrays and Objects

### src-AI-Software/my_projects/02_react_ess_proj/my-app/src/index.js:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const cities = ["Tokyo", "New York", "London", "Paris"];

root.render(
  <React.StrictMode>
    <App library="React" cities={cities} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### src-AI-Software/my_projects/02_react_ess_proj/my-app/src/App.js:

```js
import "./App.css";

function App(props) {
  const [firstCity, secondCity] = props.cities;

  return (
    <div className="App">
      <h1>Hello from {props.library}</h1>
      <h2>First City: {firstCity}</h2>
      <h2>Second City: {secondCity}</h2>
    </div>
  );
}

export default App;

```

<img width="1497" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/6c93a2c7-c277-4a6d-b801-88e0afa8197e">

<img width="960" alt="image" src="https://github.com/omeatai/src-AI-Software/assets/32337103/c7cb3667-73c2-4d4e-a83b-8841711585ed">

# #End</details>
  
<details>
<summary>11. Using UseState Hook </summary>

# Using UseState Hook

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
