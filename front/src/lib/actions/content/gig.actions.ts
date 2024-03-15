"use server"

import Gig from "@/lib/models/content/gig.models";
import TemporalFrame from "@/lib/models/discrete/temporalFrame.models";
import Venue from "@/lib/models/profiles/venue.model";
import { connectToDB } from "@/lib/validations/mongoose";
import mongoose from "mongoose";
import { temporalFrameData } from "../discrete/temporalFrame.actions";
import { userCoreData } from "../profiles/user.actions";
import { transactionData } from "../discrete/transaction.actions";
import Artist from "@/lib/models/profiles/artist.model";


export interface gigData {
    vibeId?:mongoose.Schema.Types.ObjectId
    deployment:{
        base:mongoose.Schema.Types.ObjectId|temporalFrameData
        venue:mongoose.Schema.Types.ObjectId
        deploymentDate:Date
        geo:String
    }
    flow?:{
        initiators:(mongoose.Schema.Types.ObjectId|userCoreData)[]
        purchase:(mongoose.Schema.Types.ObjectId|userCoreData)[]
        swapQuery:(mongoose.Schema.Types.ObjectId|userCoreData)[]
        swaped:(mongoose.Schema.Types.ObjectId|userCoreData)[]
        purchaseQuery:(mongoose.Schema.Types.ObjectId|userCoreData)[]
    }
    capacity:{
        deployed:Number
        residual:Number
        maximal:Number
        price:Number
    }
    funds?:{
        security:{
            artist:mongoose.Schema.Types.ObjectId|transactionData
            venue:mongoose.Schema.Types.ObjectId|transactionData
            target:mongoose.Schema.Types.ObjectId|transactionData
        }
        advance:{
            artist:mongoose.Schema.Types.ObjectId|transactionData
            venue:mongoose.Schema.Types.ObjectId|transactionData
            target:mongoose.Schema.Types.ObjectId|transactionData
        }
        profits:{
            sales:Number
            artist:{
                shared:Number
                value:Number
                deposition?:mongoose.Schema.Types.ObjectId|transactionData
            }
            venue:{
                shared:Number
                value:Number
                deposition?:mongoose.Schema.Types.ObjectId|transactionData
            }
        }
    }
}

export async function fetchGigEssentials(gigId:mongoose.Schema.Types.ObjectId){
    try{
        connectToDB()
        const gigData = await Gig.findOne({_id:gigId}).populate({
            path:'deployment',
            populate:{
                path:'base',
                model:TemporalFrame
            }
        })
        .populate({
            path:'deployment',
            populate:{
                path:'venue',
                model:Venue
            }
        })
        return gigData

    }
    catch(error:any){
        throw new Error(`crashed fetching gig:${error.message}`)
    }
    
}


