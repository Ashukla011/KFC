const express = require("express");
const {foodStructure} = require("../modules/foodStructur.Module");
const foodStureRoute = express.Router();
const cors = require("cors");
const app = express();
app.use(cors());

foodStureRoute.get("/getItem",  async (req, res) => {
  try {
    let data = await foodStructure.find();
    res.send(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

foodStureRoute.post("/addNewItem", async (req, res) => {
  try {
    const { name,price,image,description,type,icon,foodType,quantity} = req.body;
    const addNewItem = new  foodStructure({ name,price,image,description,type,icon,foodType,quantity });
    await addNewItem.save();   
    res.status(201).json(addNewItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// update document
foodStureRoute.patch("/updateItem/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedItem = await foodStructure.findByIdAndUpdate(
      id,
      req.body,        // fields to update
      {
        new: true,     // return updated document
        runValidators: true
      }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Search By titel description price and orther things
foodStureRoute.get("/getItem", async (req, res) => {
  try {
    const { foodType } = req.query;

    const filter = {};

    if (foodType) {
      filter.foodType = foodType;
    }

    const foodItems = await foodStructure.find(filter);

    res.status(200).json(foodItems);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = { foodStureRoute };
