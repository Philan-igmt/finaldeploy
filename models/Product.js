const mongoose = require("mongoose");

//product schema
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
