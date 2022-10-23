const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT|| 5000
app.use(cors())
const hotels = require("./data/hotels.json")

app.get("/" , (resq , res)=>{
    res.send("servetr eunnin")
})

app.get("/hotels" , (req, res)=>{
    res.send(hotels);
})
app.get("/hotels/:id" , (req, res)=>{
     const id = req.params.id;
     const hotel = hotels.find(hotel => hotel.id == id)
    res.send(hotel);
})



app.listen(port ,()=>{
    console.log("running on por " , port);
})
