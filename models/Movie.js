const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  storyline: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    default: []
  },
  releaseDate: {
    type: String,
    default: " "
  },
  runtime: {
    type: String,
    required: true,
  },
  category: [
    {
      value: { type: String, required: true },
      label: { type: String, required: true },
    },
  ],
  language: [
    {
      value: { type: String, required: true },
      label: { type: String, required: true },
    },
  ],
  trailer: {
    type: String,
    required: true,
  },
  casts: [
    {
      value: { type: String, required: true },
      label: { type: String, required: true },

    },
  ],
  imdb_rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  writer: {
    type: String,
    default: "Sarif Admi"
  },
  director: {
    type: String,
    default: "Sarif Admi"
  },
  status: {
    type: Boolean,
    default: true
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
