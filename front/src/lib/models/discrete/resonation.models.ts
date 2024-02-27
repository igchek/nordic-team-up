import mongoose from "mongoose";
import { userData } from "../profiles/user.models";
import { vibrationData } from "./vibration.models";

export interface resonationData {
    id:string
    vibeId:string
    aggregation:{
        isAggregated:boolean
        subdivisions?:(mongoose.Schema.Types.ObjectId|resonationData)[]
        geo:string
    }
    audience:{
        total:number
        list:(mongoose.Schema.Types.ObjectId|userData)[]
    }
    priceDistribution?:{
        resonator?:{
            percentage:number
            current:number
        }
        vibrations:(mongoose.Schema.Types.ObjectId|vibrationData)[]
    }
}


const resonationSchema = new mongoose.Schema({
    vibeId:{
        type:String,
        required:[true, "stuff is required"]
    },
    aggregation:{
        type:Object,
        isAggregated:{
            type:Boolean,
            required:[true, "aggregation status is required"]
        },
        subdivisions:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'resonation',
        }],
        geo:{
            type:mongoose.Schema.Types.ObjectId,
            
        },
        required:[true, "aggregation sepcification is required"]
    },
    audience:{
        type:Object,
        total:{
            type:Number,
            required:[true, "total number is required"]
        },
        list:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        required:[true, "audience specification is required"]
    },
    priceDistribution:{
        type:Object,
        resonator:{
            type:Object,
            percentage:{
                type:Number,
                required:[true, "resonator percentage preset is required"]
            },
            current:{
                type:Number,
                default:0
            },
            
        },
        vibrations:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'vibration'
        }],
        
    }
})



const Resonation = mongoose.models.Resonation || mongoose.model('Resonation', resonationSchema)

export default Resonation