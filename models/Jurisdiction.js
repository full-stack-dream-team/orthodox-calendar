const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const jurisdictionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  acronym: {
    type: String,
    required: true,
  },
  calendar: {
    type: String,
    required: true,
  },
});

mongoose.model("Jurisdiction", jurisdictionSchema);
