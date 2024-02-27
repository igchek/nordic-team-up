import mongoose from "mongoose";
import { userData } from "../profiles/user.models";


export interface vibrationData {
    id:string
    vibeId:string
    userId:string
    APP:number
    date:Date
}

const vibrationSchema = new mongoose.Schema({
    vibeId:{
        type:String,
        required:[true, "vibe id is required"]
    },
    userId:{
        type:String,
        required:[true, "user id is required"]
    },
    APP:{
        type:Number,
        required:[true, "purchasing power is required"]
    },
    date:{
        type:Date,
        required:[true, "date is required"]
    }
})

const Vibration = mongoose.models.Vibration || mongoose.model('Vibration', vibrationSchema)

export default Vibration