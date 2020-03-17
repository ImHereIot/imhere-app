const express = require("express");
const firebase = require("firebase")
const app = express();
const session = require("express-session");


mongoose.connect(url, options);
mongoose.set("useCreateIndex", true);

mongoose.connection.on("error", err => {
  console.log("Erro na conexão do banco de dados" + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("aplicação desconectada do bd");
});

mongoose.connection.on("connected", () => {
  console.log("aplicação conectada corretamente");
});

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "aloha",
    resave: true,
    saveUninitialized: true
    //cookie: { secure: true }
  })
);
app.use(express.static("files"));
app.use("/api/users/", usersRoute);
app.use("/api/business/", businessRoute);
app.use("/api/products/", productsRoute);
app.use("/api/cart/", cartRoute);

app.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(3000);

module.exports = app;