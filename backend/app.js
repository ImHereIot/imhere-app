var express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentsRoute = require('./packages/students/routes')
const classRoute  = require('./packages/class/routes')

mongoose.connect("mongodb://localhost:3000", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const aluno = mongoose.model("aluno", {
  name: string,
  aula: string,
  matriculado: Boolean
});

app.use('/api/check',studentsRoute);
app.use('/api/class',classRoute);



app.listen(3000, () => {
  console.log("servidor up");
});

module.exports = app;
