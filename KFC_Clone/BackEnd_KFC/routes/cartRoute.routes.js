const express = require("express");
const { cartSchemaModule } = require("../modules/cartSchema.Module");
const { foodStructure } = require("../modules/foodStructur.Module");
const cartRoute = express.Router();

// GET user cart
cartRoute.get("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await cartSchemaModule.findOne({ userId }).populate("items.foodId");
    if (!cart) {
      return res.status(200).json({ items: [], totalPrice: 0 });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD/Update item in cart
cartRoute.post("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const { foodId, quantity = 1 } = req.body;

    const food = await foodStructure.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }

    let cart = await cartSchemaModule.findOne({ userId });

    if (!cart) {
      cart = new cartSchemaModule({
        userId,
        items: [{ foodId, quantity }],
        totalPrice: food.price * quantity,
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.foodId.toString() === foodId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ foodId, quantity });
      }

      // Recalculate total price
      const updatedCart = await cart.populate("items.foodId");
      cart.totalPrice = updatedCart.items.reduce((acc, item) => {
          return acc + (item.foodId.price * item.quantity);
      }, 0);
    }

    await cart.save();
    const finalCart = await cartSchemaModule.findById(cart._id).populate("items.foodId");
    res.status(200).json(finalCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update item quantity (Set specific quantity)
cartRoute.put("/:foodId", async (req, res) => {
    try {
        const userId = req.user.id;
        const { foodId } = req.params;
        const { quantity } = req.body;

        let cart = await cartSchemaModule.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const itemIndex = cart.items.findIndex(item => item.foodId.toString() === foodId);
        if (itemIndex === -1) return res.status(404).json({ message: "Item not in cart" });

        if (quantity <= 0) {
            cart.items.splice(itemIndex, 1);
        } else {
            cart.items[itemIndex].quantity = quantity;
        }

        await cart.save();
        const updatedCart = await cartSchemaModule.findById(cart._id).populate("items.foodId");
        
        // Recalculate total
        updatedCart.totalPrice = updatedCart.items.reduce((acc, item) => acc + (item.foodId.price * item.quantity), 0);
        await updatedCart.save();

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Remove item from cart
cartRoute.delete("/:foodId", async (req, res) => {
  try {
    const userId = req.user.id;
    const { foodId } = req.params;

    let cart = await cartSchemaModule.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.foodId.toString() !== foodId);
    
    await cart.save();
    const updatedCart = await cartSchemaModule.findById(cart._id).populate("items.foodId");
    
    updatedCart.totalPrice = updatedCart.items.reduce((acc, item) => acc + (item.foodId.price * item.quantity), 0);
    await updatedCart.save();

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = { cartRoute };
