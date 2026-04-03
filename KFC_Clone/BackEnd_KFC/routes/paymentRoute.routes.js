const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "sk_test_4eC39HqLyjWDarjtT1zdp7dc"); // Placeholder test key
const { OrderModel } = require("../modules/orderSchema.Module");
const { cartSchemaModule } = require("../modules/cartSchema.Module");
const paymentRoute = express.Router();

paymentRoute.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, address, totalAmount } = req.body;
    const userId = req.user.id;

    // Create a new order in pending state
    const orderItems = items.map(item => ({
      foodId: item.foodId._id,
      name: item.foodId.name,
      price: item.foodId.price,
      quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.foodId.name,
            images: [item.foodId.image],
          },
          unit_amount: Math.round(item.foodId.price * 100), // Stripe expects amounts in cents/paise
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3001/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3001/Cart`,
      customer_email: req.user.email,
    });

    const newOrder = new OrderModel({
      userId,
      items: orderItems,
      address,
      totalAmount,
      stripeSessionId: session.id,
      paymentStatus: "pending"
    });

    await newOrder.save();

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// CREATE COD ORDER
paymentRoute.post("/create-cod-order", async (req, res) => {
  try {
    const { items, address, totalAmount } = req.body;
    const userId = req.user.id;

    // Create order items
    const orderItems = items.map(item => ({
      foodId: item.foodId._id,
      name: item.foodId.name,
      price: item.foodId.price,
      quantity: item.quantity
    }));

    // Create new COD order
    const newOrder = new OrderModel({
      userId,
      items: orderItems,
      address,
      totalAmount,
      paymentStatus: "pending",
      paymentMethod: "cod"
    });

    await newOrder.save();

    // Clear user's cart after order creation
    await cartSchemaModule.findOneAndDelete({ userId });

    res.status(201).json({
      success: true,
      message: "Order placed successfully with Cash on Delivery",
      order: newOrder
    });
  } catch (err) {
    console.error("COD Order Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Webhook or success verification (simplified for demo)
paymentRoute.get("/verify-payment/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const order = await OrderModel.findOneAndUpdate(
        { stripeSessionId: sessionId },
        { paymentStatus: "paid" },
        { new: true }
      );
      
      // Clear user's cart after successful payment
      if (order) {
        await cartSchemaModule.findOneAndDelete({ userId: order.userId });
      }

      res.json({ success: true, order });
    } else {
      res.json({ success: false, message: "Payment not completed" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { paymentRoute };
