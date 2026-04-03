const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  address: {
    name: String,
    mobileNumber: String,
    houseNo: String,
    area: String,
    city: String,
    state: String,
    zipCode: String
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending"
  },
  paymentMethod: {
    type: String,
    enum: ["card", "cod"],
    default: "card"
  },
  stripeSessionId: String,
}, { timestamps: true });

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = { OrderModel };
