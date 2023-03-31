const express = require("express");
const router = express.Router();
const Popular = require("../models/Popular");


router.get("/popular", async (req, res) => {
  const populars = await Popular.find({}).lean().exec();
  res.status(200).json({
    data: populars
  });
});

module.exports = router