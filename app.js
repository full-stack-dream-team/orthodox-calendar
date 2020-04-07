const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");

// create the Express app
const app = express();

// Take the raw requests and turn them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import Routes
app.use("/", routes);

// PRODUCTION: serve up static files from the build folder
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", () => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
