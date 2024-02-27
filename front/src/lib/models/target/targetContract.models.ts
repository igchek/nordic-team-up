import mongoose from "mongoose";
import { ArtistData } from "../profiles/artist.model";
import { userData } from "../profiles/user.models";
import { TargetGroupData } from "./targetGroup.models";
import { targetPropositionData } from "./targetProposition.models";
import { transactionData } from "../discrete/transaction.models";


export interface targetContractData {
    essentials:{
        vibeId?:string
        isIterable:boolean
        rootContract?:mongoose.Schema.Types.ObjectId|targetContractData
        geoFrame:string[]
    }
    root:{
        duration:{
            timeFrame?:{
                start:Date
                end:Date
            }
            financtialFrame?:{
                outline:{
                    terms:number
                    deposited:number
                    pending:number
                }
                gigsDeployed?:(mongoose.Schema.Types.ObjectId|targetContractData)[]
            }
        }
    }
    contractingParties:{
        recepitent:(mongoose.Schema.Types.ObjectId|ArtistData)[]
        contractors:(mongoose.Schema.Types.ObjectId|userData)[]
        targetGroup?:(mongoose.Schema.Types.ObjectId|TargetGroupData)[]
    }
    engagementStatus:{
        isNegotiated:boolean
        isIntact:boolean
        isEngaged:boolean
        isRejected:boolean
        isComplete:boolean
    }
    contents:{
        propositions:(mongoose.Schema.Types.ObjectId|targetPropositionData)[]
        engagementDate:Date
        completionDate:Date
    }
    financialOutline:{
        deposited:(mongoose.Schema.Types.ObjectId|transactionData)[]
        pending:(mongoose.Schema.Types.ObjectId|transactionData)[]
    }
}


const targetContractSchema = new mongoose.Schema({
    core:{
        type:Object,
        vibeId:{
            type:String,
            required:[true, 'stuff is required']
        },
        rootContract:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'TargetContract'
            
        },
        geoFrame:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Geo'
            },
        ],
        required:[true, 'core is required']
    },
        


    coreData:{
        type:Object,
        duration:{
            timeFrame:{
                start:{
                    type:Date,
                    required:[true, 'stuff is required']
                },
                end:{
                    type:Date,
                    required:[true, 'stuff is required']
                },
                
            },
            quantityFrame:{
                outline:{
                    terms:{
                        type:Number,
                        required:[true, 'stuff is required']
                    },
                    deposited:{
                        type:Number,
                        required:[true, 'stuff is required']
                    },
                    pending:{
                        type:Number,
                        required:[true, 'stuff is required']
                    },
                    required:[true, 'stuff is required']
                },
                gigsDeployed:[
                    {
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'target contract'
                    }
                ],
                
            },
            
        },
        
    },
    

    contractingParties:{
        type:Object,
        recepitent:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'artist'
        },
        contractors:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        targetGroup:{
            type:mongoose.Schema.Types.ObjectId,
            
            ref:'targetGroup'
        },
        required:[true, 'contracting parties sheet is required']
    },

    engagementStatus:{
        type:Object,
        isNegotiated:{
            type:Boolean,
            default:false
        },
        isIntact:{
            type:Boolean,
            default:true
        },
        isEngaged:{
            type:Boolean,
            default:false
        },
        isRejected:{
            type:Boolean,
            default:false
        },
        isComplete:{
            type:Boolean,
            default:false
        },
        required:[true, 'engagement status is required']
    },
    

    contents:{
        type:Object,
        propositions:{
            type:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'target proposition'
                }
            ],
        },
        engagementDate:{
            type:Date,
            
        },
        completionDate:{
            type:Date,
            
        },
        required:[true, 'content field is required']
    },
    

            // financial outline //
    financialOutline:{
        type:Object,

        deposited:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'target proposition'
        }],
        pending:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'target proposition'
        }],
        // TODO:herein should be a direct data pipline from gig financial outline
        required:[true, 'financial outline is required']
    }
    

            
})



const TargetContract = mongoose.models.TargetContract || mongoose.model('TargetContract', targetContractSchema)
export default  TargetContract