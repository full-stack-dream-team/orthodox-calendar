const mongoose = require("mongoose");

// List all models here.
// Models are served in /start.js
const User = require("./User");
const Jurisdiction = require("./Jurisdiction");
const Fast = require("./Fast");

const models = { User, Jurisdiction, Fast };

module.exports = models;
