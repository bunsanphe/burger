const express = require("express")
// const orm = require("./config/orm")
const exphbs = require("express-handlebars");
const burgerController = require("./controllers/burgers_controller")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

app.use(burgerController);

app.engine("handlebars", exphbs( {defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost: " + PORT);
})
