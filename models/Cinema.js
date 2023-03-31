


const mongoose = require("mongoose");
const cinemaSchema = new mongoose.Schema({
  name: String,
  sub_region: String,
  cancellation_availability: String,
  timings: Array,
});
const Cinema = mongoose.model("cinema", cinemaSchema);
module.exports = Cinema