const express = require("express");
const routes = express.Router();

// List all routes here.
// Routes are served in /app.js
const productRoutes = require("./productRoutes");

routes.use("/api/product", productRoutes);

module.exports = routes;
