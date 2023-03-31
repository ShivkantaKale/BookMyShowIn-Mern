const express = require("express");
const router = express.Router();
const Outdoor = require("../models/Outdoor");


router.get("/outdoor", async (req, res) => {
  const outdoors = await Outdoor.find({}).lean().exec();
  res.status(200).json({
    data: outdoors
  });
});

module.exports = router