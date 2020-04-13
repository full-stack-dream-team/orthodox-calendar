const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const passport = require("passport");
const users = require("./routes/userRoutes");
// const errorHandlers = require("./handlers/errorHandlers");

// create the Express app
const app = express();

// Take the raw requests and turn them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import Routes
app.use("/", routes);

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//-- ERROR HANDLERS --//
// 404 Error Handler
// app.use(errorHandlers.notFound);

// Development Error Handler prints stacktrace
// if (process.env.NODE_ENV === "development") {
//   app.use(errorHandlers.developmentErrors);
// }

// Production Error Handler
// app.use(errorHandlers.productionErrors);

// PRODUCTION: serve up static files from the build folder
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", () => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
