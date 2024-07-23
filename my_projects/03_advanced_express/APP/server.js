const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const fs = require("fs");
const util = require("util");
const { marked } = require("marked");

const app = express();
const PORT = 3000;

const fsreadfile = util.promisify(fs.readFile);

app.engine("md", async (filePath, options, callback) => {
  try {
    const content = await fsreadfile(filePath, "utf-8");
    const rendered = content.toString().replace(`{headline}`, options.headline);
    return callback(null, marked(rendered));
  } catch (err) {
    return callback(err);
  }
});

app.set("views", "views");
app.set("view engine", "md");

function handler(req, res) {
  //   return res.send("<h1>Hello World</h1>");
  return res.render("index", { headline: "Hello World" });
}

app.get("/", handler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl-C to stop the server");
});
