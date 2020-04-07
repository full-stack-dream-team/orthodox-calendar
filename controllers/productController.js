const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  return res.status(200).send(products);
};
