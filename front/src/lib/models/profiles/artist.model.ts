import mongoose from "mongoose";
import { mediaData } from "../discrete/media.models";
import { VibeDataStructure } from "@/lib/actions/content/vibe.actions";
import { vibeData } from "../content/vibe.models";
import { GigData } from "../content/gig.models";
import { transactionData } from "../discrete/transaction.models";
import { userData } from "./user.models";

export type ArtistData = {
    _id:string
    contributors?:(mongoose.Schema.Types.ObjectId|userData)[]
    description?:{
        title?:string
        subtitle?:{
            role?:string
            description?:string
        }
        tagLine?:{
            selfAdjusted?:string[]
            computed?:string[]
        }
    }
    media?:{
        logo?:string
        header?:string
        reel?:mediaData[]
    }
    content?:{
        vibes?:(mongoose.Schema.Types.ObjectId|vibeData)[]
        gigs?:(mongoose.Schema.Types.ObjectId|GigData)[]
    }
    balanceSheet?:{
        assets:{
            deposited:{
                quantity:number
                gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
            pending:{
                quantity:number
                gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
        }
        obligations:{
            deposited:{
                quantity:number
                gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
            pending:{
                quantity:number
                gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
                transactions:(mongoose.Schema.Types.ObjectId|transactionData)[]
            }
        }
    }
}


const artistSchema = new mongoose.Schema({
    contributors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    description:{
        type:Object,
        title:{
            type:String,
            required:[true, 'stuff is required']
        },
        subtitle:{
            type:Object,
            role:{
                type:String,
                required:[true, 'stuff is required']
            },
            description:{
                type:String,
                required:[true, 'stuff is required']
            },
            required:[true, 'stuff is required']
        },
        tagLine:{
            type:Object,
            selfAdjusted:[{
                type:String,
                ref:'tag'
            }],
            computed:[{
                type:String,
                ref:'tag'
            }],
            required:[true, 'stuff is required']
        },
        required:[true, 'stuff is required']

    },
    media:{
        type:Object,
        logo:{
            type:String,
            required:[true, 'stuff is required'],
            default:'artistLogo'
        },
        header:{
            type:String,
            required:[true, 'stuff is required'],
            default:'hostHeader'
        },
        reel:[{
            type:String,
            ref:'reel'
        }],
        required:[true, 'stuff is required']
    },
    content:{
        type:Object,
        vibes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'vibe'
        }],
        gigs:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'gig'
        }],
        required:[true, 'stuff is required']
    },
    balanceSheet:{
        type:Object,
        assets:{
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    required:[true, 'stuff is required']
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                required:[true, 'stuff is required'],
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    required:[true, 'stuff is required']
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                required:[true, 'stuff is required'],
                default:0

            },
            required:[true, 'stuff is required']
            },
        obligations:{
            type:Object,
            deposited:{
                type:Object,
                quantity:{
                    type:Number,
                    required:[true, 'stuff is required']
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                required:[true, 'stuff is required'],
                default:0

            },
            pending:{
                type:Object,
                quantity:{
                    type:Number,
                    required:[true, 'stuff is required']
                },
                gigs:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'gig'
                }],
                transactions:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'transaction'
                }],
                required:[true, 'stuff is required'],
                default:0

            },
            required:[true, 'stuff is required']
        },
        required:[true, 'stuff is required']

    }
})

const Artist = mongoose.models.Artist || mongoose.model('Artist', artistSchema)

export default Artist