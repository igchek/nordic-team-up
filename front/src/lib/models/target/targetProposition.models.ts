import mongoose from "mongoose";


export interface targetPropositionData {
    hostContractId:string
    title:string
    description?:string
    executionTiming?:{
        preliminary?:Date
        onSpot?:Date
    }
    yield?:{
        advance?:number
        wage?:number
        share?:number
    }
}



const targetPropositionSchema = new mongoose.Schema({
    hostContractId:{
        type:String,
        required:[true, 'stuff is required']
    },
    title:{
        type:String,
        required:[true, 'Need a title']
    },
    description:{
        type:String,
        
    },
    executionTiming:{
        type:Object,
        preliminary:{
            type:Date,
            
        },
        onSpot:{
            type:Date,
            
        },
        
    },
    yield:{
        type:Object,
        advance:{
            type:Number,
            
        },
        wage:{
            type:Number,
            
        },
        share:{
            type:Number,
            
        },
        required:[true, "yield description is required"]
        
    }

})

const TargetProposition  = mongoose.models.TargetProposition || mongoose.model('TargetProposition', targetPropositionSchema)
export default TargetProposition