const express = require("express");
const router = express.Router();
// const Admin = require("../models/Admin");


router.get("/", async (req, res) => {
    console.log('req came in ticketHandler');
    res.send("req successfuly going to ticketHandler")
})

// ALL MOVIE BOOKING API'S HERE
router.get("/bookingSeats/:id", async (req, res) => {
    const id = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await showingMovies.findOne(query);
    res.send(result);
});


// SEAT SELECT API HERE:
router.post("/selectSeat/:seatNumber", async (req, res) => {
    const seatNumber = req.
        console.log(res);
})


module.exports = router