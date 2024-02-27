import mongoose from "mongoose";
import { temporalFrameData } from "../discrete/temporalFrame.models";
import { VenueData } from "../profiles/venue.model";
import { userData } from "../profiles/user.models";
import { transactionData } from "../discrete/transaction.models";
import { targetPropositionData } from "../target/targetProposition.models";


export interface GigData {
    id:string
    vibeId:string
    deployment:{
        base:mongoose.Schema.Types.ObjectId|temporalFrameData
        venue:mongoose.Schema.Types.ObjectId|VenueData
        deploymentDate:Date
        geo:string
    }
    flow:{
        initiators:(mongoose.Schema.Types.ObjectId|userData)[]
        purchase:(mongoose.Schema.Types.ObjectId|userData)[]
        swapQuery:(mongoose.Schema.Types.ObjectId|userData)[]
        swaped:(mongoose.Schema.Types.ObjectId|userData)[]
        purchaseQuery:(mongoose.Schema.Types.ObjectId|userData)[]
    }
    capacity:{
        deployed:number
        residual:number
        maximal:number
        price:number
    }
    funds:{
        security:{
            artist:mongoose.Schema.Types.ObjectId|transactionData
            venue:mongoose.Schema.Types.ObjectId|transactionData
            target:mongoose.Schema.Types.ObjectId|targetPropositionData
        }
        advance:{
            artist:mongoose.Schema.Types.ObjectId|transactionData
            venue:mongoose.Schema.Types.ObjectId|transactionData
            target:mongoose.Schema.Types.ObjectId|targetPropositionData
        }
        profits:{
            sales:number
            artist:{
                share:number
                value:number
                deposition:mongoose.Schema.Types.ObjectId|transactionData
            }
            venue:{
                share:number
                value:number
                deposition:mongoose.Schema.Types.ObjectId|transactionData
            }
        }
    }
    }

const gigSchema = new mongoose.Schema({
    id:{
        type:String
    },
    vibeId:{
        type:String,
        required:true
    },
    deployment:{
        base:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'temporal frame'
        },
        venue:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'venue',
            required:true
        },
        deploymentDate:{
            type:Date,
            required:true
        },
        geo:{
            type:String,
            required:true
        },
        required:true
    },
    flow:{
        initiators:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        purchase:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        swapQuery:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        swaped:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }],
        purchaseQuery:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }]
    },

    capacity:{
        deployed:{
            type:Number,
            required:true
        },
        residual:{
            type:Number,
            required:true
        },
        maximal:{
            type:Number,
            
        },
        price:{
            type:Number,
            
        }
    },

    funds:{
       security:{
            artist:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'transaction'
            },
            venue:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'transaction'
            },
            target:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target proposition'
            }],
            required:true
       },
       advance:{
            artist:{
                type:mongoose.Schema.Types.ObjectId,
                
                ref:'transaction'
            },
            venue:{
                type:mongoose.Schema.Types.ObjectId,
                
                ref:'transaction'
            },
            target:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target proposition'
            }],
            
        },
        profits:{
            sales:{
                type:Number,
                required:true
            },
            artist:{
                share:{
                    type:Number,
                    
                },
                value:{
                    type:Number,
                    
                },
                deposition:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction',
                    
                },
                
                
            },
            venue:{
                share:{
                    type:Number,
                    
                },
                value:{
                    type:Number,
                    
                },
                deposition:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction',
                    
                },
                
            },
            
        }
    }
    
})

const Gig = mongoose.models.Gig || mongoose.model('Gig', gigSchema)
export default Gig