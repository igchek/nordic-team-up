import mongoose from "mongoose";

const targetContractSchema = new mongoose.Schema({
    
    essentials:{
        vibeId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        isIterable:{
            type:Boolean,
            required:true
        },
        rootContract:{
            type:mongoose.Schema.Types.ObjectId,
            required:false
        },
        geoFrame:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Geo'
            },
        ],
        required:true
    },
        


    root:{
        duration:{
            timeFrame:{
                start:{
                    type:Date,
                    required:true
                },
                end:{
                    type:Date,
                    required:true
                },
                required:false
            },
            quantityFrame:{
                outline:{
                    terms:{
                        type:Number,
                        required:true
                    },
                    deployed:{
                        type:Number,
                        required:true
                    },
                    toDeploy:{
                        type:Number,
                        required:true
                    },
                    required:true
                },
                gigsDeployed:[
                    {
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'gig'
                    }
                ],
                required:false
            },
            required:false
        },
        required:false
    },
    

    contractingParties:{
        recepitent:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'artist'
        },
        contractors:[{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'user'
        }],
        targetGroup:{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:'target group'
        },
        required:true
    },

    engagementStatus:{
        isNegotiated:{
            type:Boolean,
            required:true,
            default:false
        },
        isIntact:{
            type:Boolean,
            required:true,
            default:false
        },
        isEngaged:{
            type:Boolean,
            required:false,
            default:false
        },
        isRejected:{
            type:Boolean,
            required:true,
            default:false
        },
        isComplete:{
            type:Boolean,
            required:false,
            default:false
        },
        required:true
    },
    

    contents:{
        propositions:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'target proposition'
            }
        ],
        engagementDate:{
            type:Date,
            required:false
        },
        completionDate:{
            type:Date,
            required:false
        },
        required:true
    },
    

            // financial outline //
    financialOutline:{

        deposited:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'target proposition'
        }],
        pending:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'target proposition'
        }],
        // TODO:herein should be a direct data pipline from gig financial outline
        required:true
    }
    

            
})



const TargetContract = mongoose.models.TargetContract || mongoose.model('TargetContract', targetContractSchema)
export default  TargetContract