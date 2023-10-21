import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema)
export default Media