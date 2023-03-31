
const mongoose = require("mongoose");
const popularSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Popular = mongoose.model("popular", popularSchema);
module.exports = Popular