const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");
const { catchErrors } = require("../handlers/errorHandlers");

productRoutes.get("/", catchErrors(productController.getProducts));

module.exports = productRoutes;
