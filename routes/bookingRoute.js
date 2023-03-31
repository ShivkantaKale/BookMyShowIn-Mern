const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");


router.post("/booking", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json({
    data: booking
  });
});
router.get("/booking", async (req, res) => {
  const booking = await Booking.find({}).lean().exec();
  res.status(200).json({
    data: booking
  });
});
router.patch("/booking/:id", async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    data: booking
  });
});

module.exports = router