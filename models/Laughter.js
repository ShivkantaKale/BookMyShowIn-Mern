const mongoose = require("mongoose");
const laughterSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Laughter = mongoose.model("laughter", laughterSchema);
module.exports = Laughter