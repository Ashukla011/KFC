const express = require("express");
const { AddressModel } = require("../modules/addressSchema.Module");
const addressRoute = express.Router();

// GET all addresses for a user
addressRoute.get("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const addresses = await AddressModel.find({ userId });
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD a new address
addressRoute.post("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, mobileNumber, houseNo, area, city, state, zipCode, isDefault } = req.body;

    if (isDefault) {
      await AddressModel.updateMany({ userId }, { isDefault: false });
    }

    const newAddress = new AddressModel({
      userId,
      name,
      mobileNumber,
      houseNo,
      area,
      city,
      state,
      zipCode,
      isDefault: isDefault || false
    });

    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an address
addressRoute.delete("/:id", async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    await AddressModel.findOneAndDelete({ _id: id, userId });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = { addressRoute };
