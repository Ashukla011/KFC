const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  totalPrice: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const cartSchemaModule =  mongoose.model("Cart", cartSchema);

module.exports = { cartSchemaModule };

