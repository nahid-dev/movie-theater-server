const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("ok")
})

// ALL MOVIES API
router.get("/movieList", async (req, res) => {
    const resut = Movie.find({})
    console.log(resut);
    
});

// All LATEST MOVIES API
router.get("/latestMovies", async (req, res) => {
    const latestMovies = await moviesCollection.find().limit(6).toArray();
    res.send(latestMovies);
});

router.get("/movieDetails/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await moviesCollection.findOne(query);
    res.send(result);
});



//  ALL MOVIE NEWS API
router.get("/movieNewsList", async (req, res) => {
    const movieNewsList = await movieNewsCollection.find().toArray();
    res.send(movieNewsList);
});

router.get("/movieNewsList/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await movieNewsCollection.findOne(query);
    res.send(result)
});


router.get("/nowShowingMovies", async (req, res) => {
    const nowShowingMovies = await showingMovies.find().toArray();
    res.send(nowShowingMovies);
});

module.exports = router