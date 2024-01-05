const { Schema, model } = require("mongoose");
const laptop = new Schema({
  id: {
    type: String,
  },
  productName: {
    type: String,
    required: [true, "Set name for laptop"],
  },
  image: {
    type: String,
  },
  cpu: {
    type: String,
    required: [true, "Set the model for cpu"],
  },
  ram: {
    type: String,
    required: [true, "Set the ram"],
  },
  storage: {
    type: String,
    required: [true, "Set the storage"],
  },
  screen: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Set the price for laptop"],
  },
  description: {
    type: String,
    required: [true, "Set the description for laptop"],
  },
});
const Laptop = model("laptops", laptop);

module.exports = Laptop;
