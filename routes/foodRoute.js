const express = require("express");
const router = express.Router();
const Food = require("../models/Food");


router.get("/food", async (req, res) => {
  const food = await Food.find({}).lean().exec();
  res.status(200).json({
    data: food
  });
});
module.exports = router