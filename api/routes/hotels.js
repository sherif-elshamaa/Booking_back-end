import express from "express";
import Hotel from "../schema/Hotels.js"

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
    }
    
})

//Create
router.post("/create", async (req, res) => {
    const body = req.body;
    try {
        const data = await Hotel.findOne({ hotelId: body.hotelId });
        if (data) {
          return res.status(401).send({ msg: "hotell already registered" });
        }
        const newHotel = new Hotel({...body})
        newHotel.save();
        console.log(newHotel)
    }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: `error ${err.message}` });
        }
})
//update 
//delete 


export default router; 