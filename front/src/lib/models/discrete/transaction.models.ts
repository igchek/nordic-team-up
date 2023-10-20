import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema ({
    issuer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recepient:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },

    // production chain emission - essentially within
    //  what contract structure transaction occurs
    emission:{
        gig:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        subcontract:{
            type:mongoose.Schema.Types.ObjectId,
            required:false
        },
        required:true

    },
    quantity:{
        type:Number,
        required:true
    }


})

const Transaction = mongoose.models.Transation || mongoose.model('Transaction', transactionSchema)
export default Transaction