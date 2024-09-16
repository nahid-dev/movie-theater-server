const express = require("express");
const router = express.Router();
// const Admin = require("../models/Admin");


router.get("/", async(req, res)=>{
    res.send("ok")
})

router.post("/addMovie", async (req, res) => {
      const newMovie = req.body;
      const query = { name: newMovie.name };
      const existingMovie = await moviesCollection.findOne(query);
      if (existingMovie) {
        return res.send({ message: "Movie already Added!" });
      }
      const result = await moviesCollection.insertOne(newMovie);
      res.send(result);
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