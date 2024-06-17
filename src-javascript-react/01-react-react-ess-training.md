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
<summary>2. Setting Up React Manually with CDN - Basic Setup </summary>

# Setting Up React  Manually with CDN - Basic Setup

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
<summary>3. Setting Up React Manually with CDN - JSX implementation using Babel </summary>

# Setting Up React Manually with CDN - JSX implementation using Babel

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
<summary>4. Setting Up React Manually with CDN - Using JSX Components </summary>

# Setting Up React Manually with CDN - Using JSX Components

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
<summary>5. Setting Up React Manually with CDN - Adding JSX Props </summary>

# Setting Up React Manually with CDN - Adding JSX Props

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
<summary>6. Setting Up React Manually with CDN - Workng with Arrays </summary>

# Setting Up React Manually with CDN - Workng with Arrays

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
