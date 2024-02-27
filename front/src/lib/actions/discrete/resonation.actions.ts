"use server"

import mongoose from "mongoose";
import { userCoreData } from "../profiles/user.actions";
import { vibrationData } from "./vibration.actions";



export interface resonationData {

    vibeId:String
    aggregation?:{
        isAggregated:Boolean
        subdivisions?:mongoose.Schema.Types.ObjectId[]|resonationData
        geo:String
    }
    audience:{
        total:Number
        list:mongoose.Schema.Types.ObjectId|userCoreData[]
    }
    priceDistribution?:{
        resonator?:{
            percentage:Number
            current:Number
        }
        vibrations:vibrationData[]
    }
}

export async function fetchResonation (id:mongoose.Schema.Types.ObjectId){
    try{

    }
    catch(error:any)
    {
        throw new Error(`Crashed fetching resonation: ${error.message}`)
    }
}