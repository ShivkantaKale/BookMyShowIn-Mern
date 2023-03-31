
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: true
  },
  cover_url: {
    type: String,
    required: true
  },
  banner_url: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  screen_types: {
    type: Array,
    required: true
  },
  languages: {
    type: Array,
    required: true
  },
  movie_duration: {
    type: String,
    required: true
  },
  rating: {
    percentage: {
      type: Number
    },
    no_of_ratings: Number
  },
  about_movie: {
    type: String,
    required: true
  },
  cast: {
    type: Array,
    required: true
  },
  crew: {
    type: Array,
    required: true
  },
  review: {
    type: Array,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  is_primier: {
    type: Boolean
  }
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie