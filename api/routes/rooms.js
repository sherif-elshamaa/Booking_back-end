import express from "express";
import Room from "../schema/Rooms.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const romes = await Room.find()
        res.status(200).json(romes)
    } catch (err) {
        res.status(500).json(err)
    }
})

export default router