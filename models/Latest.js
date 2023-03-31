


const mongoose = require("mongoose");
const latestSchema = new mongoose.Schema({
  image: String,
  event_name: String,
  venue: String,
});
const Latest = mongoose.model("latest", latestSchema);
module.exports = Latest