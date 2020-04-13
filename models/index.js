const mongoose = require("mongoose");

// List all models here.
// Models are served in /start.js
const Product = require("./Product");
const User = require("./User");

const models = { Product, User };

module.exports = models;
