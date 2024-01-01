const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const peopleRouter = require("./people");

const app = express();
app.use(bodyParser.json());
app.use(logger("tiny"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/people", peopleRouter);

module.exports = app;
