## +Youtube-Deploy-on-Docker-and-Kubernetes

## [COURSE](https://www.youtube.com/watch?v=-ANCcFQBk6I) - Deploy 12 apps to AWS, Azure, & Google Cloud

<details>
<summary>1. Create React App </summary>

# Create React App

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
<summary>2. Install and Configure Mysql for Django </summary>

# Install and Configure Mysql for Django

## Install Xampp for MAC

```x
python manage.py runserver
```

# #END</details>
