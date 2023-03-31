
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
      movie_name: String,
      silver: Array,
      date: Number,
      day: String,
      time: String,
      cinemas_name: String,
      silver: Array,
      platinium: Array,
      price: Number,
      total_price: Number,
      banner_image_url: String,
      movie_grade: String
    });
    const Booking = mongoose.model("bookings", bookingSchema);
    module.exports = Booking