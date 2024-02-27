import mongoose from "mongoose";
import { userData } from "../profiles/user.models";
import { targetContractData } from "./targetContract.models";
import { gigData } from "@/lib/actions/content/gig.actions";
import { transactionData } from "../discrete/transaction.models";

export interface TargetGroupData {
    _id:string,
    core:{
        contributors:(userData|{_id:string})[]
        pic:string
        title:string
    }
    contracts:{
        templates:(targetContractData|{_id:string})[]
        intact:(targetContractData|{_id:string})[]
        negotiated:(targetContractData|{_id:string})[]
        engaged:(targetContractData|{_id:string})[]
        completed:(targetContractData|{_id:string})[]
        rejected:(targetContractData|{_id:string})[]
    }
    balanceSheet:{
        assets:{
            deposited:{
                quantity:number
                gigs:gigData[]
                transactions:transactionData[]
            }
            pending:{
                quantity:number
                gigs:gigData[]
                transactions:transactionData[]
            }
        }
        obligations:{
            deposited:{
                quantity:number
                gigs:gigData[]
                transactions:transactionData[]
            }
            pending:{
                quantity:number
                gigs:gigData[]
                transactions:transactionData[]
            }
        }
    }
}


const targetGroupSchema = new mongoose.Schema({
    core:{
        type:Object,
        contributors:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }],
            required:[true, "At lease one contributor is required"]
        },
        pic:{
            type:String,
            default:'default'
        },
        title:{
            type:String,
            required:[true, "Title is required"]
        },
        required:[true, "Core data is required"]
    },
    contracts:{
        type:Object,
        templates:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
        intact:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
        negotiated:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
        engaged:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
        completed:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
        rejected:{
            type:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"targetContract"
            }]
        },
    },
    balanceSheet:{
        type:Object,
        assets:{
            type:Object,
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:String,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            
            },
        obligations:{
            type:Object,
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                
                default:0

            },
            
        }
    }
    


})

const TargetGroup = mongoose.models.TargetGroup || mongoose.model('TargetGroup', targetGroupSchema)

export default TargetGroup