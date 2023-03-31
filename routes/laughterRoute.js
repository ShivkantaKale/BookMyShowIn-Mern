const express = require("express");
const router = express.Router();
const Laughter = require("../models/Laughter");


router.get("/laughter", async (req, res) => {
  const laughters = await Laughter.find({}).lean().exec();
  res.status(200).json({
    data: laughters
  });
});

module.exports = router