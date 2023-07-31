const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(path.resolve(__dirname, "../build")));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, function () {
  console.log("Started application on port %d", 3000);
});
