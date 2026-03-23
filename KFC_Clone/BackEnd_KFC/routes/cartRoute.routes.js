const express = require("express");
const { cartSchemaModule } = require("../modules/cartSchema.Module");
const cartRoute = express.Router();
const cors = require("cors");
const app = express();
app.use(cors());

cartRoute.post("/cart", async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware
    const { foodId, quantity } = req.body;

    // 1. Check food exists
    const food = await cartSchemaModule.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }

    // 2. Find user's cart
    let cart = await cartSchemaModule.findOne({ userId });

    // 3. If cart does not exist, create new
    if (!cart) {
      cart = new cartSchemaModule({
        userId,
        items: [{ foodId, quantity }],
        totalPrice: food.price * quantity,
      });
    } else {
      // 4. Check if item already in cart
      const itemIndex = cart.items.findIndex(
        (item) => item.foodId.toString() === foodId,
      );

      if (itemIndex > -1) {
        // Increase quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item
        cart.items.push({ foodId, quantity });
      }

      cart.totalPrice += food.price * quantity;
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = { cartRoute };
