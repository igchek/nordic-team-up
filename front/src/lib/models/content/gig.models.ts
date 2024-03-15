import mongoose from "mongoose";
import { temporalFrameData } from "../discrete/temporalFrame.models";
import { VenueData } from "../profiles/venue.model";
import { userData } from "../profiles/user.models";
import { transactionData } from "../discrete/transaction.models";
import { targetPropositionData } from "../target/targetProposition.models";
import { vibeData } from "./vibe.models";
import { SyncData } from "./sync.models";


export interface GigData {
    _id:string
    base:{
        vibe:vibeData
        sync:SyncData
    }
    deployment:{
        base:temporalFrameData
        venue:VenueData
        deploymentDate:Date
        geo:string
    }
    flow:{
        initiators:userData[]
        purchase:userData[]
        swapQuery:userData[]
        swaped:userData[]
        purchaseQuery:userData[]
    }
    capacity:{
        deployed:number
        residual:number
        maximal:number
        price:number
    }
    funds:{
        security:{
            artist:transactionData
            venue:transactionData
            target:targetPropositionData
        }
        advance:{
            artist:transactionData
            venue:transactionData
            target:targetPropositionData
        }
        profits:{
            sales:number
            artist:{
                share:number
                value:number
                deposition:transactionData
            }
            venue:{
                share:number
                value:number
                deposition:transactionData
            }
        }
    }
    }

const gigSchema = new mongoose.Schema({
    id:{
        type:String
    },
    base:{
        type:Object,
        vibe:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'vibe',
            required:[true, 'stuff is required']
        },
        sync:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'sync',
            required:[true, 'stuff is required']
        }
    },
    deployment:{
        type:Object,
        base:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true, 'stuff is required'],
            ref:'temporal frame'
        },
        venue:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'venue',
            required:[true, 'stuff is required']
        },
        deploymentDate:{
            type:Date,
            required:[true, 'stuff is required']
        },
        geo:{
            type:String,
            required:[true, 'stuff is required']
        },
        required:[true, 'stuff is required']
    },
    flow:{
        type:Object,
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
        type:Object,
        deployed:{
            type:Number,
            required:[true, 'stuff is required']
        },
        residual:{
            type:Number,
            required:[true, 'stuff is required']
        },
        maximal:{
            type:Number,
            
        },
        price:{
            type:Number,
            
        }
    },

    funds:{
        type:Object,
       security:{
            type:Object,
            artist:{
                type:mongoose.Schema.Types.ObjectId,
                required:[true, 'stuff is required'],
                ref:'transaction'
            },
            venue:{
                type:mongoose.Schema.Types.ObjectId,
                required:[true, 'stuff is required'],
                ref:'transaction'
            },
            target:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target proposition'
            }],
            required:[true, 'stuff is required']
       },
       advance:{
            type:Object,
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
            type:Object,
            sales:{
                type:Number,
                required:[true, 'stuff is required']
            },
            artist:{
                type:Object,
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
                type:Object,
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