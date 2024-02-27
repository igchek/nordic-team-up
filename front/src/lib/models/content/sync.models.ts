import mongoose from "mongoose";
import { temporalFrameData } from "../discrete/temporalFrame.models";


export interface SyncData {
    id:string
    vibeId:string
    geo:string
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
        required:true
    },
    vibeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    geo:{
        type:String,
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
                    
                },
                required:true
            },
            setBack:{
                isSetBack:{
                    type:Boolean,
                    required:true,
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
                isCanceled:{
                    type:Boolean,
                    required:true,
                    default:false
                },
                date:{
                    type:Date,
                    
                },
                
            },
            deployment:{
                isDeployed:{
                    type:Boolean,
                    required:true,
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
                
            },
            
        },
        required:true
    }

})

const Sync = mongoose.models.Sync || mongoose.model('Sync', syncSchema)
export default Sync