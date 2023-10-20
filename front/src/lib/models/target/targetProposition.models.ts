import mongoose from "mongoose";

const targetPropositionSchema = new mongoose.Schema({
    hostContractId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    executionTiming:{
        preliminary:{
            type:Date,
            required:false
        },
        onSpot:{
            type:Date,
            required:false
        },
        required:false
    },
    yield:{
        advance:{
            type:Number,
            required:false
        },
        wage:{
            type:Number,
            required:false
        },
        share:{
            type:Number,
            required:false
        },
        required:false
    }

})

const TargetProposition  = mongoose.models.TargetProposition || mongoose.model('TargetProposition', targetPropositionSchema)
export default TargetProposition