const express = require("express");
const router = express.Router();

// Require controller for conditional code
const userController = require("../controllers/userController");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", userController.registerUser);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", userController.loginUser);

// Export router for use
module.exports = router;
