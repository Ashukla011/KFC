const mongoose = require("mongoose");
const KfcMenuScheema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  icon: { type: String, required: true },
  type: { type: String, required: true },
  foodType: { type: String, required: true },
  quantity: { type: Number, required: true },
});
const KfcMenuModel = mongoose.model("task", KfcMenuScheema);

module.exports = { KfcMenuModel };
