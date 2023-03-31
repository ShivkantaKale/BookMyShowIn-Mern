const express = require("express");
const router = express.Router();
const Location = require("../models/Location");


router.get("/location", async (req, res) => {
  const locations = await Location.find({}).lean().exec();
  res.status(200).json({
    data: locations
  });
});

module.exports = router