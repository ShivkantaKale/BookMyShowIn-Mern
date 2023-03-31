
const express = require("express");
const router = express.Router();
const Cinema = require("../models/Cinema");

router.get("/cinema", async (req, res) => {
  const cinemas = await Cinema.find({}).lean().exec();
  res.status(200).json({
    data: cinemas
  });
});

module.exports = router