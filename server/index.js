const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(path.resolve(__dirname, "../build")));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Started application on port %d", 3000);
});
