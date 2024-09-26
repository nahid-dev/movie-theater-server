const express = require("express");
const Movie = require("../models/Movie");
const { default: mongoose } = require("mongoose");
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("ok")
})

// ALL MOVIES API
router.get("/movieList", async (req, res) => {
    try {
        let result = await Movie.find({});
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving movies", error });
    }
});


// All LATEST MOVIES API
router.get("/latestMovies", async (req, res) => {
    const latestMovies = await Movie.find().limit(6)
    res.send(latestMovies);
});


// MOVIE DETAILS API
router.get("/movieDetails", async (req, res) => {
    try {
        const id = req.query.id;
        const result = await Movie.findOne({ _id : id })
        if (!result) {
            return res.status(404).send({ message: "Movie not found" });
        }

        res.send(result);
    } catch (error) {
        console.error("Error retrieving movie details:", error);

        // Handle invalid ObjectId format error
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).send({ message: "Invalid movie ID format" });
        }
        res.status(500).send({ message: "Error retrieving movie details", error });
    }
});






// //  ALL MOVIE NEWS API
// router.get("/movieNewsList", async (req, res) => {
//     const movieNewsList = await movieNewsCollection.find().toArray();
//     res.send(movieNewsList);
// });

// router.get("/movieNewsList/:id", async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) };
//     const result = await movieNewsCollection.findOne(query);
//     res.send(result)
// });


// router.get("/nowShowingMovies", async (req, res) => {
//     const nowShowingMovies = await showingMovies.find().toArray();
//     res.send(nowShowingMovies);
// });

module.exports = router