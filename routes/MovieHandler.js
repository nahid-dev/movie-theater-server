
//     // ALL MY COLLECTION NAME HERE:
//     const moviesCollection = client.db("movieServer").collection("movieList");
//     const movieNewsCollection = client
//       .db("movieServer")
//       .collection("movieNewsList");
//     const showingMovies = client.db("movieServer").collection("nowShowing");

//     // ALL MOVIES API
//     app.get("/movieList", async (req, res) => {
//       const movieList = await moviesCollection.find().toArray();
//       res.send(movieList);
//     });

//     // All LATEST MOVIES API
//     app.get("/latestMovies", async (req, res) => {
//       const latestMovies = await moviesCollection.find().limit(6).toArray();
//       res.send(latestMovies);
//     });

//     app.get("/movieDetails/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await moviesCollection.findOne(query);
//       res.send(result);
//     });



 // ALL MOVIE NEWS API
//     app.get("/movieNewsList", async (req, res) => {
//       const movieNewsList = await movieNewsCollection.find().toArray();
//       res.send(movieNewsList);
//     });

//     app.get("/movieNewsList/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await movieNewsCollection.findOne(query);
//       res.send(result)
//     });


//     app.get("/nowShowingMovies", async (req, res) => {
//       const nowShowingMovies = await showingMovies.find().toArray();
//       res.send(nowShowingMovies);
//     });