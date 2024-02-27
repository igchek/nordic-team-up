"use server"

import mongoose from "mongoose"
import { userCoreData } from "../profiles/user.actions"


export interface transactionData {
    issuer:userCoreData
    recepient:userCoreData
    type:String
    date:Date
    emission:{
        gig:mongoose.Schema.Types.ObjectId
        subcontract:mongoose.Schema.Types.ObjectId
    }
    value:Number
}