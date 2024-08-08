## +Youtube-Deploy-on-Docker-and-Kubernetes

## [COURSE](https://www.youtube.com/watch?v=-ANCcFQBk6I) - Deploy 12 apps to AWS, Azure, & Google Cloud

<details>
<summary>1. React on Docker - Create React App </summary>

# React on Docker - Create React App

```x
npx create-react-app my_demo_app
```

## Run React App

```x
npm run start
```

### my_projects/10_deploy_on_docker/my_demo_app/src/index.js:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
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

### my_projects/10_deploy_on_docker/my_demo_app/src/App.js:

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to REACT!</h1>
      </header>
    </div>
  );
}

export default App;

```

![image](https://github.com/user-attachments/assets/32522335-cc71-48d4-97e1-c2c93686ca25)

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/004d4aa9-0408-4d87-8b3a-bd5d1129a7fd">
<img width="1439" alt="image" src="https://github.com/user-attachments/assets/66257601-8df5-4313-a97e-a2757d0f0022">

# #END</details>

<details>
<summary>2. React on Docker - Setup Docker for React App </summary>

# React on Docker - Setup Docker for React App

## Install Docker

```x
https://docs.docker.com/desktop/install/mac-install/
```

<img width="788" alt="image" src="https://github.com/user-attachments/assets/722d073d-025f-4271-a282-89040f006298">

## Check Docker Versions

```x
docker
docker --version
docker-compose --version
```

<img width="970" alt="image" src="https://github.com/user-attachments/assets/23f48e1f-7cf9-494e-a1d8-443520ab5a69">
<img width="1443" alt="image" src="https://github.com/user-attachments/assets/f6273484-bfd6-4515-83be-da1c66d24aa0">

### my_projects/10_deploy_on_docker/my_demo_app/Dockerfile:

```x
FROM node:15.4 as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

```

### Run NPM Build

```x
npm run build
```

<img width="1350" alt="image" src="https://github.com/user-attachments/assets/0d1a0e86-10e9-4f51-a093-f210f6cdab21">
<img width="1350" alt="image" src="https://github.com/user-attachments/assets/51348bc1-301d-48bb-b273-39efe56726b0">

# #END</details>

<details>
<summary>3. React on Docker - Setup Nginx </summary>

# React on Docker - Setup Nginx

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

# #END</details>
