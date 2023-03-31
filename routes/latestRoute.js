
const express = require("express");
const router = express.Router();
const Latest = require("../models/Latest");


router.get("/latest", async (req, res) => {
  const latests = await Latest.find({}).lean().exec();
  res.status(200).json({
    data: latests
  });
});

module.exports = router