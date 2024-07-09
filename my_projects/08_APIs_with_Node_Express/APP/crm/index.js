import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoute";
import basicLogger from "./src/middlewares/basicLoggerMiddleware";
import checkAuth from "./src/middlewares/checkAuthMiddleware";
import errorHandler from "./src/middlewares/errorHandlerMiddleware";

const app = express();
const PORT = 3001;

// middleware to log basic request info
app.use(basicLogger);

// mongoose connection
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/crm", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost/CRMdb");

// middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

routes(app, checkAuth);

app.get("/", (req, res) =>
  res.send(`<h1>Your server is running on port ${PORT}</h1>`)
);

// middleware to log Errors
app.use(errorHandler);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
