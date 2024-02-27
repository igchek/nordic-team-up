import mongoose from "mongoose";

export interface transactionData {  
    issuerId:string
    recepientId:string
    transactionType:string
    date:Date
    emission:{
        gigId:string
        subcontract?:string
    }
    value:number
    }


const transactionSchema = new mongoose.Schema ({
    core:{
        type:Object,
        issuerId:{
            type:String,
            required:[true, "issue id is required"]
        },
        recepientId:{
            type:String,
            required:[true, "recepient id is required"]
        },
        transactionType:{
            type:String,
            required:[true, "transaction type is required"]
        },
        date:{
            type:Date,
            required:[true, "date is required"]
        },
        required:[true, "core is required"]
    },
    

    // production chain emission - essentially within
    //  what contract structure transaction occurs
    emission:{
        type:Object,
        gigId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"gig",
            required:[true, "stuff is required"]
        },
        subcontract:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"targetContract",
            
        },
        required:[true, "stuff is required"]

    },
    value:{
        type:Number,
        required:[true, "stuff is required"]
    }


})

const Transaction = mongoose.models.Transation || mongoose.model('Transaction', transactionSchema)
export default Transaction