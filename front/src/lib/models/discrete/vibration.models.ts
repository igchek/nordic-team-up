import mongoose from "mongoose";

const vibrationSchema = new mongoose.Schema({
    vibeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    APP:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

const Vibration = mongoose.models.Vibration || mongoose.model('Vibration', vibrationSchema)

export default Vibration