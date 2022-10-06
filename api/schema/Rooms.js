import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    type:{
        type: String,
        required: true
    },
    photos:{
        type : [String]
    },
    price:{
        type: Number,
    },
    features: {
        type: [],
    },
});
export default mongoose.model("Room", RoomSchema)


