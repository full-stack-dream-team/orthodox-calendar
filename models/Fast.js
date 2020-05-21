const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const fastSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
  allowed: {
    type: String,
  },
  disallowed: {
    type: String,
  },
  symbol: {
    type: String,
  },
});

mongoose.model("Fast", fastSchema);
