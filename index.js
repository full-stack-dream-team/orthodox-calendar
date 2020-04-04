const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
require("./models/Product");

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

require("./routes/productRoutes")(app);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", () => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`express is running on port ${PORT}`);
});
