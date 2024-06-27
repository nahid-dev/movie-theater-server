const express = require("express");
const app = express();
const cors = require("cors");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleWere
app.use(cors());
app.use(express.json());

// test get method:
app.get("/", (req, res) => {
  res.send("Movie Theater Server Is Running");
});

// MongoDB all code HERE================

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7rh25i5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // ALL MY COLLECTION NAME HERE:
    const moviesCollection = client.db("movieServer").collection("movieList");
    const movieNewsCollection = client
      .db("movieServer")
      .collection("movieNewsList");
    const showingMovies = client.db("movieServer").collection("nowShowing");

    // ALL MOVIES API
    app.get("/movieList", async (req, res) => {
      const movieList = await moviesCollection.find().toArray();
      res.send(movieList);
    });

    // All LATEST MOVIES API
    app.get("/latestMovies", async (req, res) => {
      const latestMovies = await moviesCollection.find().limit(6).toArray();
      res.send(latestMovies);
    });

    app.get("/movieDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await moviesCollection.findOne(query);
      res.send(result);
    });

    app.get("/addShowtime/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await moviesCollection.findOne(query);
      res.send(result);
    });

    app.post("/addMovie", async (req, res) => {
      const newMovie = req.body;
      const query = { name: newMovie.name };
      const existingMovie = await moviesCollection.findOne(query);
      if (existingMovie) {
        return res.send({ message: "Movie already Added!" });
      }
      const result = await moviesCollection.insertOne(newMovie);
      res.send(result);
    });

    app.get("/nowShowingMovies", async (req, res) => {
      const nowShowingMovies = await showingMovies.find().toArray();
      res.send(nowShowingMovies);
    });
    app.post("/addShowtimeMovie", async (req, res) => {
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

    // ALL MOVIE BOOKING API'S HERE
    app.get("/bookingSeats/:id", async (req, res) => {
      const id = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await showingMovies.findOne(query);
      res.send(result);
    });

    // SEAT SELECT API HERE:
    app.post("/selectSeat/:seatNumber", async (req, res) => {
      const seatNumber = req.
      console.log(res);
    })

    // ALL MOVIE NEWS API
    app.get("/movieNewsList", async (req, res) => {
      const movieNewsList = await movieNewsCollection.find().toArray();
      res.send(movieNewsList);
    });

    app.get("/movieNewsList/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieNewsCollection.findOne(query);
      res.send(result)
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Movie theater server running on ${port}`);
});
