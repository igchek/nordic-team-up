import mongoose from "mongoose";

const syncSchema = new mongoose.Schema({
    vibeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    options:{
        requested:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'temporal frame'
        }],
        rejected:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'temporal frame'
        }],
        approved:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'temporal frame'
        }],

        required:true
    },
    engagement:{
        status:{
            initialization:{
                isInitializaed:{
                    type:Boolean,
                    required:true,
                    default:false
                },
                date:{
                    type:Date,
                    required:false
                },
                required:false
            },
            setBack:{
                isSetBack:{
                    type:Boolean,
                    required:true,
                    default:false
                },
                date:{
                    type:Date,
                    required:false
                },
                refresh:{
                    type:Date,
                    required:false
                },
                required:false
            },
            cancelation:{
                isCanceled:{
                    type:Boolean,
                    required:true,
                    default:false
                },
                date:{
                    type:Date,
                    required:false
                },
                refresh:{
                    type:Date,
                    required:false
                },
                required:false
            },
            deployment:{
                isDeployed:{
                    type:Boolean,
                    required:true,
                    default:false
                },
                date:{
                    type:Date,
                    required:false
                },
                refresh:{
                    type:Date,
                    required:false
                },
                required:false
            }


        },
        timeFrame:{
            start:{
                type:Date,
                required:true
            },
            deadline:{
                type:Date,
                required:true
            },
            finish:{
                type:Date,
                required:false
            },
            required:false
        },
        required:true
    }

})

const Sync = mongoose.models.Sync || mongoose.model('Sync', syncSchema)
export default Sync