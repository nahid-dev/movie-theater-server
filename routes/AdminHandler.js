const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("ok")
})

router.post("/addMovie", async (req, res) => {
  const movieName = req.body.name;
  const newMovie = new Movie(req.body)
  const isExist = await Movie.findOne({ name: movieName })
  if (!isExist) {
    newMovie.save()
      .then((result) => {
        res.send("Movie created");
      })
      .catch((err) => {
          res.send(err)
      });
  }

});


router.post("/addShowtimeMovie", async (req, res) => {
  const newShowtime = req.body;
  const query = { name: newShowtime.name };
  const existShowtime = await showingMovies.findOne(query);
  if (existShowtime) {
    return res.send({ message: "Movie already Added!" });
  }
  const movieId = req.body.movieId;
  const filter = { _id: new ObjectId(movieId) };
  const updateDocument = {
    $set: {
      status: true,
    },
  };
  const result2 = await moviesCollection.updateOne(filter, updateDocument);
  const result = await showingMovies.insertOne(newShowtime);
  res.send({ result, result2 });
});


module.exports = router;