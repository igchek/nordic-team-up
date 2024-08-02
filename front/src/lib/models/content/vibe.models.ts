import mongoose from "mongoose";
import { ArtistData } from "../profiles/artist.model";
import { mediaData } from "../discrete/media.models";
import { communityData } from "../community/community.models";
import { resonationData } from "../discrete/resonation.models";
import { GigData } from "./gig.models";
import { SyncData } from "./sync.models";


export interface vibeData {
    _id:string
    vibeId:string
    core:{
        creator:mongoose.Schema.Types.ObjectId|ArtistData,
        creatorTitle:string
        contentTitle:string
        tagList?:{
            ascribed?:string[]
            computed:string[]
        }
        format?:string
        media:{
            artistLogo:string
            promoLogo:string
            reel?:mediaData[]
            description?:string
        }
    }
    communities:{
        publicCommunities:(mongoose.Schema.Types.ObjectId|communityData)[]
        privateCommunities:(mongoose.Schema.Types.ObjectId|communityData)[]
        targetCommunities:(mongoose.Schema.Types.ObjectId|communityData)[]
    }
    vibrations:{
        total:{
            quantity:number
            resonation:resonationData
        }
        distributed?:resonationData
    }
    deployment?:{
        syncs:(mongoose.Schema.Types.ObjectId|SyncData)[]
        gigs:(mongoose.Schema.Types.ObjectId|GigData)[]
    }
}

const VibeSchema = new mongoose.Schema({
    vibeId:{type:String, required:[true, 'Needs a parent vibe id']},

    core:{
        type:Object,
        creator:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'artist',
            
        },
        creatorTitle:{
            type:String, required:[true, 'Needs a creator title']
        },
        contentTitle:{type:String, required:[true, 'Needs a content title']},
        tagList:{
            ascribed:[{
            type:String,
            ref:'Tag'
                }],
                
            computed:[{
                type:String,
                ref:'Tag'
            }],
            
            },
        format:{
            type:String,
            
        },
        description:{
            tyoe:String,
            required:[true, 'Needs a description']
        },
        required:[true, 'Needs a core']
        },


        media:{
            type:Object,
            artistLogo:{
                type:String,
                required:[true, 'Needs an artist logo']
            },
            promoLogo:{type:String},
            reel:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'media'
            }],
            required:[true, 'Needs a media core']
        },
    
    communities:{
        type:Object,
        publicCommunities:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'community'
            }
        ],
        privateCommunities:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'community'
            }
        ],
        targetCommunities:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'community'
            }
        ],
        required:[true, 'Needs communities']
    },

    vibrations:{
        total:{
            type:Object,
            quantity:{
                type:Number,
                required:[true, 'Needs '],
                default:0
            },
            resonation:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'resonation',
                
            },
            required:[true, 'Needs total vivrations']
        },
        distributed:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'resonation'
        }],
        
    },

    deployment:{
        syncs:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'sync'
        }],
    
        gigs:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'gig'
        }],
        
           
    }
     
    })

    
    
 

const Vibe = mongoose.models.Vibe || mongoose.model('Vibe', VibeSchema)
export default Vibe