const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is the Index App: Hello World!</h1>");
});

app.listen(3000, () => {
  console.log("Index app listening on port 3000!");
});
