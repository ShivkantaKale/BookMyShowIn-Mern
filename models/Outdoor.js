

const mongoose = require("mongoose");
const outdoorSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
  is_popular: Boolean,
});
const Outdoor = mongoose.model("outdoor", outdoorSchema);
module.exports = Outdoor
