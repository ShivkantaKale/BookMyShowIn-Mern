
const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");



router.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({
    data: movie
  });
});
router.get("/movies", async (req, res) => {
  const movies = await Movie.find({}).lean().exec();
  res.status(201).json({
    data: movies
  });
});
router.get("/movies/:id", async (req, res) => {
  const movies = await Movie.findById(req.params.id).lean().exec();
  res.status(201).json({
    data: movies
  });
});
router.patch("/movies/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    data: movie
  });
});

module.exports = router