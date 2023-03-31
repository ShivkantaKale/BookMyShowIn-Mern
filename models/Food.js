const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  food_name: String,
  food_price: Number,
  is_popcorn: Boolean,
  is_coke: Boolean,
  is_combo: Boolean,
  food_tag: String,
  food_image: String,
});
const Food = mongoose.model("food", foodSchema);
module.exports = Food