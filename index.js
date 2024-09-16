const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json()); //body parser 
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

// MongoDB connection 
require('./configs/DBConfig.js')

const AdminHandler = require('./routes/AdminHandler.js');
const UserHandler = require('./routes/UserHandler.js');
const TicketHandler = require('./routes/TicketHandler.js');
const MovieHandler = require('./routes/MovieHandler.js');

// test get method:
app.get("/", (req, res) => {
  res.send(`Express Server is Running at Port ${port}`);
});

app.use("/admin", AdminHandler)
app.use("/user", UserHandler)
app.use("/movie", MovieHandler)
app.use("/ticket", TicketHandler)

app.listen(port, () => {
  console.log(`Movie theater server running on ${port}`);
});


//     app.get("/addShowtime/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await moviesCollection.findOne(query);
//       res.send(result);
//     });
