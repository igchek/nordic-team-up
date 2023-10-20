import mongoose from "mongoose";


const resonationSchema = new mongoose.Schema({
    vibeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    aggregation:{
        isAggregated:{
            type:Boolean,
            required:true
        },
        subdivisions:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'resonation',
        }],
        geo:{
            type:mongoose.Schema.Types.ObjectId,
            required:false
        },
        required:false
    },
    audience:{
        total:{
            type:Number,
            required:true
        },
        list:[{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }],
        required:true
    },
    priceDistribution:{
        resonator:{
            percentage:{
                type:Number,
                required:true
            },
            current:{
                type:Number,
                required:true
            }
        },
        vibrations:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'vibration'
        }],
        required:false
    }
})



const Resonation = mongoose.models.Resonation || mongoose.model('Resonation', resonationSchema)

export default Resonation