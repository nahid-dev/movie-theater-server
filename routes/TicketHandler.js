const express = require("express");
const router = express.Router();
// const Admin = require("../models/Admin");


router.get("/", async(req, res)=>{
    res.send("ok")
})

//     // ALL MOVIE BOOKING API'S HERE
//     app.get("/bookingSeats/:id", async (req, res) => {
//       const id = req.params;
//       const query = { _id: new ObjectId(id) };
//       const result = await showingMovies.findOne(query);
//       res.send(result);
//     });

//     // SEAT SELECT API HERE:
//     app.post("/selectSeat/:seatNumber", async (req, res) => {
//       const seatNumber = req.
//       console.log(res);
//     })


module.exports = router