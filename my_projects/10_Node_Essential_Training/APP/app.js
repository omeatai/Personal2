const fs = require("fs");

let message = `
    This is a New File
    ==================

    ES6 Template Strings are cool. They honor whitespace.

    * Template Strings
    * Node File System
    * Readline CLIs
`;

fs.writeFile("newReadme.md", message.trim(), function (err) {
  if (err) {
    throw err;
  }
  fs.appendFileSync("newReadme.md", "\n\n### Node.js Everyone!");
  console.log("Markdown Created");
});
