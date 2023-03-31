
const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  cinemas: String,
  sub_region: String,
  Languages: String,
  price_range: String,
  show_timings: String,
  pricing_type: Array,
  cancellation_availability: Boolean,
});

const Location = mongoose.model("location", locationSchema);
module.exports = Location