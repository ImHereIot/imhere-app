const express = require("express");
const app = express();

app.get("/hello", function(req, res) {
  return res.send("Hello world");
});

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 8080);
