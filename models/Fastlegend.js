const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const fastlegendSchema = new Schema({
  jurisdiction: {
    type: String,
    required: true,
  },
  fasts: [
    {
      desc: {
        type: String,
        required: true,
      },
      allowed: {
        type: String,
        required: true,
      },
      disallowed: {
        type: String,
        required: true,
      },
      symbol: {
        type: String,
        required: true,
      },
    },
  ],
});

mongoose.model("Fastlegend", fastlegendSchema);
