var express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const signRoute = require('./model')

mongoose.connect("mongodb://localhost:3000", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const aluno = mongoose.model("aluno", {
  name: string,
  aula: string,
  matriculado: Boolean
});

app.use('/api/check',signRoute);
app.use('/api/class',classRoute);



app.listen(3000, () => {
  console.log("servidor up");
});

module.exports = app;
