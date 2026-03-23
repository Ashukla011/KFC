const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
},{ timestamps: true });
const foodStructure = mongoose.model("Food", foodSchema);

module.exports = { foodStructure };
