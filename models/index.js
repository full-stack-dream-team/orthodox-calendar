const mongoose = require("mongoose");

// List all models here.
// Models are served in /start.js
const User = require("./User");
const Jurisdiction = require("./Jurisdiction");
const Fastlegend = require("./Fastlegend");

const models = { User, Jurisdiction, Fastlegend };

module.exports = models;
