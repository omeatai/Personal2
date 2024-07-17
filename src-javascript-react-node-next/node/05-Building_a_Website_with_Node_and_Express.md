## +Linkedin-Building a Website with Node.js and Express.js

## [COURSE](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/dynamic-websites-with-node-and-express?resume=false)

<details>
<summary>1. Clone Project Directory </summary>

# Clone Project Directory

## [https://github.com/danielkhan/building-website-nodejs-express/tree/master](https://github.com/danielkhan/building-website-nodejs-express/tree/master)

```x
git clone --bare https://github.com/danielkhan/building-website-nodejs-express.git
cd building-website-nodejs-express.git
git config --bool core.bare false
git reset --hard
git branch
q
```

# #END</details>

<details>
<summary>2. Setup Node Environment </summary>

# Setup Node Environment

## Initialize npm

```x
npm init -y
```

## Install Express and Nodemon

```x
npm install --save express nodemon
```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```x
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  }
}

```

# #END</details>

<details>
<summary>3. Setup Express Server </summary>

# Setup Express Server

### src-AI-Software/my_projects/01_building_a_website/server.js:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express :)");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Ctrl + C to stop");
});

```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```x
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --ignore feedback.json server.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  }
}
```

## Run Server

```x
npm run start
```

```x
➜  01_building_a_website git:(main) ✗ npm run start

> 01_building_a_website@1.0.0 start
> nodemon server.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running on port 3000
Ctrl + C to stop
```

![image](https://github.com/user-attachments/assets/61bc6bf1-d244-466e-ab70-4d7b63bace60)

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/73d72bb0-fb1b-4033-86a5-e495d60c32ad">

# #END</details>

<details>
<summary>4. Setup HTML Static Template </summary>

# Setup HTML Static Template

### src-AI-Software/my_projects/01_building_a_website/server.js:

```js
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "./static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

app.get("/speakers", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/speakers.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Ctrl + C to stop");
});

```

### src-AI-Software/my_projects/01_building_a_website/static/index.html:

```html
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
  <head>
    <script src="./assets/js/color-modes.js"></script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Roux Meetups--Home</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
    />
    <link href="./assets/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="./css/carousel.css" rel="stylesheet" />
  </head>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
        />
        <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
        />
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        />
      </symbol>
    </svg>

    <div
      class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
    >
      <button
        class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul
        class="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="auto"
            aria-pressed="true"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <header data-bs-theme="dark">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Roux Meetups</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">All Speakers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feedback</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Carousel Slider
  ================================================== -->
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="btn btn-light"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/background.jpg" alt="carousel 1" width="100%" />
            <div class="container">
              <div class="carousel-caption text-start text-light">
                <h1>The Art of Abstract</h1>
                <p class="opacity-75">
                  The Roux Academy gets thousands of submissions every year for artists interesting in participating in the
            CAC exhibits, and selects approximately 200 distinct pieces of contemporary art for display in their
            collective exhibit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/background2.jpg" alt="carousel 2" width="100%" />
            <div class="container">
              <div class="carousel-caption text-light">
                <h1>Art in Full Bloom</h1>
                <p>
                  Each Featured Artist has an opportunity to speak at one of our meetups and share his or her vision,
            perspective, and techniques with attendees on a more personal level than at our large conference.
                </p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/background3.jpg" alt="carousel 3" width="100%" />
            <div class="container">
              <div class="carousel-caption text-end text-light">
                <h1>Deep Sea Wonders</h1>
                <p>
                  CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant
            careers in art.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev btn btn-primary opacity-25"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next btn btn-primary opacity-25"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Marketing messaging and featurettes
  ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <img
              src="./images/Hillary_Goldwynn_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Hilliary Goldwynn</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              src="./images/Lorenzo_Garcia_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Lorenzo Garcia</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              src="./images/Riley_Rewington_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Riley Rewington</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              Who are we?
              <span class="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              The Roux Academy gets thousands of submissions every year for
              artists interesting in participating in the CAC exhibits, and
              selects approximately 200 distinct pieces of contemporary art for
              display in their collective exhibit.
            </p>
          </div>
          <div class="col-md-5">
            <img src="./images/artwork/Hillary_Goldwynn_03.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              What we do.
              <span class="text-body-secondary">See for yourself.</span>
            </h2>
            <p class="lead">
              Each Featured Artist has an opportunity to speak at one of our
              meetups and share his or her vision, perspective, and techniques
              with attendees on a more personal level than at our large
              conference. While you attend the conference, head over to our gallery where you can check out some
            of the work from our speakers.
            </p>
          </div>
          <div class="col-md-5">
            <img src="./images/artwork/Hillary_Goldwynn_07.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              And lastly, Who should come?
              <span class="text-body-secondary">Checkmate.</span>
            </h2>
            <p class="lead">
            <ul class="sidebar-body">
                <li>Anybody interested in art and the creative industry</li>
                <li>Painters, sculptors, photographers and graphic artists</li>
                <li>Those interested in meeting and making a connection with others in the local art scene.</li>
            </ul>
            </p>
          </div>
            <div class="col-md-5">
                <img src="./images/artwork/Hillary_Goldwynn_02.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
            </div>
            </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->

      <!-- FOOTER -->
      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>
          &copy; 2024 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </main>
    <script src="./assets/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

```


![image](https://github.com/user-attachments/assets/471551d2-6e1b-4f94-b74d-644bd4096ccd)
![image](https://github.com/user-attachments/assets/21a67aad-4049-4f87-b23a-1cadfb4054b1)

![image](https://github.com/user-attachments/assets/1af87bb2-3cd8-4a00-b4cb-5a4b7d97f4e9)
![image](https://github.com/user-attachments/assets/08641379-d1a2-44e7-bb17-e52ab6d47e6b)
![image](https://github.com/user-attachments/assets/1821684e-8684-426c-a499-4564df2afdab)
![image](https://github.com/user-attachments/assets/9530e051-75e6-4ab2-a25d-b7b1e9618f00)

# #END</details>

<details>
<summary>5. Install and Initialize ESLint and Prettier </summary>

# Install and Initialize ESLint and Prettier

```x
npm install --save-dev eslint
```

## Initialize eslint

```x
npx eslint --init
```

<img width="733" alt="image" src="https://github.com/user-attachments/assets/39d77d18-b2e0-4ce2-b071-cf2c81aa49ad">

## Install Prettier

```x
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
#npm install --save-dev eslint-airbnb-base eslint-plugin-import
```

### src-AI-Software/my_projects/01_building_a_website/eslint.config.mjs:

```mjs
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: ["prettier"],
    extends: ["prettier"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];

```

### src-AI-Software/my_projects/01_building_a_website/.prettierrc:

```prettierrc
{
    "trailingComma": "es5",
    "printWidth": 100,
    "singleQuote": true
}
```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```js
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --ignore feedback.json server.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.7.0",
    "eslint": "^9.7.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "globals": "^15.8.0",
    "prettier": "^3.3.3"
  }
}
```

### src-AI-Software/my_projects/01_building_a_website/server.js:

```js
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Ctrl + C to stop');
});

```

<img width="1397" alt="image" src="https://github.com/user-attachments/assets/35db9c25-11d7-447f-84df-35470287dff1">
<img width="1353" alt="image" src="https://github.com/user-attachments/assets/ed8701a8-4ac8-4aeb-b62f-7bfc6a3cd4c0">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/0da1c614-1dce-45d8-8def-3790274c6f22">

<img width="1353" alt="image" src="https://github.com/user-attachments/assets/21177cbc-4fe6-4e52-aeae-d9e46f545053">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/b1e3ae4b-99b2-4994-9835-0d5c902f88df">
<img width="1397" alt="image" src="https://github.com/user-attachments/assets/88e19c11-88de-4e6c-ba65-848d2668602c">

# #END</details>

<details>
<summary>6. Using Express Template Engine - EJS </summary>

# Using Express Template Engine - EJS

## [https://ejs.co/](https://ejs.co/)

![image](https://github.com/user-attachments/assets/0465790c-6fb4-44c3-973d-0525f59aeb87)
![image](https://github.com/user-attachments/assets/9c93a2bc-2035-41da-a302-47e18c6ad26a)

# Install EJS

```js
npm install ejs
```

### src-AI-Software/my_projects/01_building_a_website/package.json:

```json
{
  "name": "01_building_a_website",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --ignore feedback.json server.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.7.0",
    "eslint": "^9.7.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "globals": "^15.8.0",
    "prettier": "^3.3.3"
  }
}

```

### src-AI-Software/my_projects/01_building_a_website/server.js:

```js
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, './static/index.html'));
  const context = {
    pageTitle: 'Welcome',
    name: 'Roux Meetups',
  };
  res.render('pages/index', context);
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Ctrl + C to stop');
});

```

### src-AI-Software/my_projects/01_building_a_website/views/pages/index.ejs:

```ejs
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">
  <head>
    <script src="./assets/js/color-modes.js"></script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><%= name %>--<%= pageTitle %></title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
    />
    <link href="./assets/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="./css/carousel.css" rel="stylesheet" />
  </head>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
        />
        <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
        />
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        />
      </symbol>
    </svg>

    <div
      class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
    >
      <button
        class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul
        class="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="auto"
            aria-pressed="true"
          >
            <svg class="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <header data-bs-theme="dark">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><%= name %></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">All Speakers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feedback</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Carousel Slider
  ================================================== -->
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="btn btn-light"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/background.jpg" alt="carousel 1" width="100%" />
            <div class="container">
              <div class="carousel-caption text-start text-light">
                <h1>The Art of Abstract</h1>
                <p class="opacity-75">
                  The Roux Academy gets thousands of submissions every year for artists interesting in participating in the
            CAC exhibits, and selects approximately 200 distinct pieces of contemporary art for display in their
            collective exhibit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/background2.jpg" alt="carousel 2" width="100%" />
            <div class="container">
              <div class="carousel-caption text-light">
                <h1>Art in Full Bloom</h1>
                <p>
                  Each Featured Artist has an opportunity to speak at one of our meetups and share his or her vision,
            perspective, and techniques with attendees on a more personal level than at our large conference.
                </p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/background3.jpg" alt="carousel 3" width="100%" />
            <div class="container">
              <div class="carousel-caption text-end text-light">
                <h1>Deep Sea Wonders</h1>
                <p>
                  CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant
            careers in art.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev btn btn-primary opacity-25"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next btn btn-primary opacity-25"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Marketing messaging and featurettes
  ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <img
              src="./images/Hillary_Goldwynn_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Hilliary Goldwynn</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              src="./images/Lorenzo_Garcia_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Lorenzo Garcia</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              src="./images/Riley_Rewington_tn.jpg"
              alt="carousel 2"
              width="50%"
              class="bd-placeholder-img rounded-circle"
            />
            <h2 class="fw-normal">Riley Rewington</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              Who are we?
              <span class="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              The Roux Academy gets thousands of submissions every year for
              artists interesting in participating in the CAC exhibits, and
              selects approximately 200 distinct pieces of contemporary art for
              display in their collective exhibit.
            </p>
          </div>
          <div class="col-md-5">
            <img src="./images/artwork/Hillary_Goldwynn_03.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              What we do.
              <span class="text-body-secondary">See for yourself.</span>
            </h2>
            <p class="lead">
              Each Featured Artist has an opportunity to speak at one of our
              meetups and share his or her vision, perspective, and techniques
              with attendees on a more personal level than at our large
              conference. While you attend the conference, head over to our gallery where you can check out some
            of the work from our speakers.
            </p>
          </div>
          <div class="col-md-5">
            <img src="./images/artwork/Hillary_Goldwynn_07.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              And lastly, Who should come?
              <span class="text-body-secondary">Checkmate.</span>
            </h2>
            <p class="lead">
            <ul class="sidebar-body">
                <li>Anybody interested in art and the creative industry</li>
                <li>Painters, sculptors, photographers and graphic artists</li>
                <li>Those interested in meeting and making a connection with others in the local art scene.</li>
            </ul>
            </p>
          </div>
            <div class="col-md-5">
                <img src="./images/artwork/Hillary_Goldwynn_02.jpg" alt="carousel 1" width="500" height="500"  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
            </div>
            </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->

      <!-- FOOTER -->
      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>
          &copy; 2024 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </main>
    <script src="./assets/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

```

![image](https://github.com/user-attachments/assets/226ccc6a-76a9-4da7-a963-d5ce93df43ae)

<img width="1349" alt="image" src="https://github.com/user-attachments/assets/e82f2b43-3055-4016-a243-3eb078c55314">

# #END</details>

<details>
<summary>7. Using Express Template Engine - EJS </summary>

# Using Express Template Engine - EJS

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

# #END<details>
