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
<summary>2. Setting Up React  Manually with CDN </summary>

# Setting Up React  Manually with CDN

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
