"use server"

import Sync from "@/lib/models/content/sync.models"
import TemporalFrame from "@/lib/models/discrete/temporalFrame.models"
import { connectToDB } from "@/lib/validations/mongoose"
import mongoose from "mongoose"
import { temporalFrameData } from "../discrete/temporalFrame.actions"


export interface SyncData {
    vibeId?:mongoose.Schema.Types.ObjectId
    options:{
        requested:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        rejected:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        approved:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
    }
    engagement:{
        status:{
            initialization:{
                isInitialized:Boolean
                date:Date
            }
            setBack?:{
                isSetBack:Boolean
                date:Date
                refresh?:Date
            }
            cancelation?:{
                isCanceled:Boolean
                date:Date
            }
            deployment?:{
                isDeployed:Boolean
                date?:Date
                refresh?:Date
            }
        }
        timeFrame:{
            start:Date
            deadline:Date
            finish:Date
        }
    }
}



export async function fetchSync(syncId:mongoose.Schema.Types.ObjectId){
    try{
        connectToDB()
        const syncData = await Sync.findOne({_id:syncId}).populate({
            path:'options',
            populate:{
                path:'requested',
                model:TemporalFrame
            }
        })
        .populate({
            path:'options',
            populate:{
                path:'rejected',
                model:TemporalFrame
            }
        })
        .populate({
            path:'options',
            populate:{
                path:'approved',
                model:TemporalFrame
            }
        })

        return syncData
    }
    catch(error:any)
    {
        throw new Error(`crashed fetching Sync Essentials: ${error.message}`)
    }
}