const express = require("express");
const routes = express.Router();

// List all routes here.
// Routes are served in /app.js
const userRoutes = require("./userRoutes");
const calendarRoutes = require("./calendarRoutes");

routes.use("/api/users", userRoutes);
routes.use("/api/calendar", calendarRoutes);

module.exports = routes;
