import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    hotelId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    name:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    photos:{
        type : [String]
    },
    title:{
        type: String,
    },
    desc:{
        type: String,
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    distance: {
        type: String,
    },
    rooms: {
        type: [String],
    },
    cheapestPrice:{
        type: Number,
    },
    featured: {
        type: Boolean,
    },
    

});


export default mongoose.model("Hotel", HotelSchema)


