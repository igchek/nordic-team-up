"use server"

import mongoose from "mongoose"



export interface vibrationData{
    vibeId:mongoose.Schema.Types.ObjectId
    user:{
        user:mongoose.Schema.Types.ObjectId
        userId:String
    }
    APP:String
    Date:Date

}