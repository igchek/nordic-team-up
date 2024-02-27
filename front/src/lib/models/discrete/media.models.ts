"use server"

import mongoose from "mongoose";


export interface mediaData {
    id:string
    title:string
    type:string
}

const mediaSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true, "stuff is required"]
    },
    title:{
        type:String,
        required:[true, "stuff is required"]
    },
    type:{
        type:String,
        required:[true, "stuff is required"]
    }
})

const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema)
export default Media