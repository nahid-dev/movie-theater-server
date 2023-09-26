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

const { MongoClient, ServerApiVersion } = require("mongodb");
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

    // ALL MOVIES API
    app.get("/movieList", async (req, res) => {
      const movieList = await moviesCollection.find().toArray();
      res.send(movieList);
    });

    // ALL MOVIE NEWS API
    app.get("/movieNewsList", async (req, res) => {
      const movieNewsList = await movieNewsCollection.find().toArray();
      res.send(movieNewsList);
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
