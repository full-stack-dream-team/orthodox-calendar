const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");

const passport = require("passport");
const cors = require("cors");
// const errorHandlers = require("./handlers/errorHandlers");

// create the Express app
const app = express();

// Take the raw requests and turn them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

let whitelist = [
  "https://oca.org",
  "https://orthocal.info",
  "https://www.holytrinityorthodox.com",
];

let corsOptionsDelegate = function (req, callback) {
  let corsOptions;

  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: true,
      optionsSuccessStatus: 200,
      preflightContinue: true,
    }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// Import Routes
app.options("*", cors()); // enable pre-flight request for all requests
app.use("/", cors(corsOptionsDelegate), routes);

// Redirect to https
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    let host = req.headers.host;

    if (req.headers["x-forwarded-proto"] !== "https")
      return res.redirect(301, "https://" + host + req.url);
    else return next();
  } else return next();
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//-- ERROR HANDLERS --//
// 404 Error Handler
// app.use(errorHandlers.notFound);

// Development Error Handler prints stacktrace
// if (process.env.NODE_ENV === "development") {
//   app.use(errorHandlers.developmentErrors);
// }

// Production Error Handler
// app.use(errorHandlers.productionErrors);

// Redirect http to https
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    if (req.headers["x-forwarded-proto"] !== "https")
      return res.redirect("https://" + req.headers.host + req.url);
    else return next();
  } else return next();
});

// PRODUCTION: serve up static files from the build folder
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
