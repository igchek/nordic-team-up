"use server"

import mongoose from "mongoose"
import { userCoreData } from "../profiles/user.actions"



export interface temporalFrameData {
    core:{
        date:Date
        isTenable:Boolean
        start:Date
        finish:Date
        pricing?:{
            perHour?:Number
            perDay?:Number
        }
    }
    option?:{
        venueId:mongoose.Schema.Types.ObjectId
        artistId:mongoose.Schema.Types.ObjectId
        vibeId:mongoose.Schema.Types.ObjectId
        yield:{
            wage:Number
            advance:Number
            share:Number
        }
        resonation?:{
            optimum:Number
            engagement:{
                initial:(mongoose.Schema.Types.ObjectId|userCoreData)[]
                pending:(mongoose.Schema.Types.ObjectId|userCoreData)[]
                insufficient:(mongoose.Schema.Types.ObjectId|userCoreData)[]
                rejected:(mongoose.Schema.Types.ObjectId|userCoreData)[]
                deployed:(mongoose.Schema.Types.ObjectId|userCoreData)[]
            }
        }
        price:Number
    }
}