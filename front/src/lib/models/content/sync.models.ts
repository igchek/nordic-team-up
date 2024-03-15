import mongoose from "mongoose";
import { temporalFrameData } from "../discrete/temporalFrame.models";
import { vibeData } from "./vibe.models";


export interface SyncData {
    _id:string
    baseVibe:vibeData
    geo:string
    audience:number
    options:{
        requested:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        rejected?:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
        approved?:(mongoose.Schema.Types.ObjectId|temporalFrameData)[]
    }
    engagement?:{
        status:{
            initialization:{
                isInitializaed:boolean
                date:Date
            }
            setBack:{
                isSetBack:boolean
                date?:Date
                refresh?:Date
            }
            cancelation:{
                isCanceled:boolean
                date?:Date   
            }
            deployment:{
                isDeployed:boolean
                date?:Date
                refresh?:Date
            }
        }
        timeFrame:{
            start:Date
            deadline:Date
            finish?:Date
        }
    }

}


const syncSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true, 'stuff is required']
    },
    baseVibe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'vibe',
        required:[true, 'stuff is required']
    },
    geo:{
        type:String,
        required:[true, 'stuff is required']
    },
    audience:{
        type:Number,
        required:[true, 'stuff is required'],
        default:0
    },
    options:{
        type:Object,
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

        required:[true, 'stuff is required']
    },
    engagement:{
        type:Object,
        status:{
            type:Object,
            initialization:{
                type:Object,
                isInitializaed:{
                    type:Boolean,
                    required:[true, 'stuff is required'],
                    default:false
                },
                date:{
                    type:Date,
                    
                },
                required:[true, 'stuff is required']
            },
            setBack:{
                type:Object,
                isSetBack:{
                    type:Boolean,
                    required:[true, 'stuff is required'],
                    default:false
                },
                date:{
                    type:Date,
                    
                },
                refresh:{
                    type:Date,
                    
                },
                
            },
            cancelation:{
                type:Object,
                isCanceled:{
                    type:Boolean,
                    required:[true, 'stuff is required'],
                    default:false
                },
                date:{
                    type:Date,
                    
                },
                
            },
            deployment:{
                type:Object,
                isDeployed:{
                    type:Boolean,
                    required:[true, 'stuff is required'],
                    default:false
                },
                date:{
                    type:Date,
                    
                },
                refresh:{
                    type:Date,
                    
                },
                
            }


        },
        timeFrame:{
            type:Object,
            start:{
                type:Date,
                required:[true, 'stuff is required']
            },
            deadline:{
                type:Date,
                required:[true, 'stuff is required']
            },
            finish:{
                type:Date,
                
            },
            
        },
        required:[true, 'stuff is required']
    }

})

const Sync = mongoose.models.Sync || mongoose.model('Sync', syncSchema)
export default Sync