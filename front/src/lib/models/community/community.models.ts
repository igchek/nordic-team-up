import mongoose from "mongoose";
import { messageData } from "./message.models";
import { restrictionData } from "../discrete/restriction.models";
import { targetPropositionData } from "../target/targetProposition.models";
import { targetContractData } from "../target/targetContract.models";


export interface communityData {
    id:string
    core?:{
        hostVibeId:string
        type:string
        subtype:{
            isPublic:boolean
            isLocal:boolean
            isPubliclyVisible:boolean
            isModerated:boolean
        }
        Geo?:string
        target:{
            isTargeted:boolean
            targeGroup?:{_id:mongoose.Schema.Types.ObjectId}
        }
    }
    contents?:{
        title:string
        logo:string
        subtitle:string
        messages:(mongoose.Schema.Types.ObjectId|messageData)[]
        audienceList:(mongoose.Schema.Types.ObjectId|{id:string, nic:string, logo:string})[]
        moderatorList?:(mongoose.Schema.Types.ObjectId|{id:string, nic:string, logo:string})[]
        banList:(mongoose.Schema.Types.ObjectId|restrictionData)[]
    }
    additional?:{
        localRuleSet:({_id:mongoose.Schema.Types.ObjectId}|restrictionData)[]
        target?:{
            targetPropositions:(mongoose.Schema.Types.ObjectId|targetPropositionData)[]
            targetContract:(mongoose.Schema.Types.ObjectId|targetContractData)[]
        }
    }
}


const communitySchema = new mongoose.Schema({
    core:{
        hostVibeId:{type:String, required:[true, "host vibe id is required"]},
        communityType:{type:String, required:[true, "community type is required"]},
        params:{
            type:Object,
            publicVisibility:{type:Boolean, required:[true, "publicity specification is required"]},
            internalModeration:{type:Boolean, required:[true, "locality specification is required"]},
            localization:{type:Boolean, default:true},
            mediaUpload:{type:Boolean, required:[true, "moderation status is required"]},
            templateOffer:{type:Boolean, required:[true, "template offer is required"]},
            chat:{type:Boolean, required:[true, "chat is required"]},
            required:[true, "preset specification is required"]
        },
        title:{type:String, required:[true, "community is required"]},
        header:{type:String, default:[true, "header is required"]},
        logo:{type:String, default:'default' },
        subtitle:{type:String,  },
        Geo:{type:String, },
        target:{
            type:Object,
            isTargeted:{
                type:Boolean,
                required:[true, "target status is required"]
            },
            targetGroup:{
                type:mongoose.Schema.Types.ObjectId,
                
                ref:'targetGroup'
            },
            required:[true, "target specification is required"]
        },
    },
    contents:{
        type:Object,
        
        
        messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'message'
            }
        ],
        audienceList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:[true, "at least one user is required"],
                ref:'user'
            }
        ],
        moderatorList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'user'
            }
        ],
        banList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'restriction'
            }
        ],
        required:[true, "contents specification is required"]
    },

    // additional infrastrucure

    additional:{
        type:Object,
        localRuleSet:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'restriction'
    
            }
        ],
        target:{
            type:Object,
            targetPropositions:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'targetProposition'
            }],
            targetContract:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'targetContract'
            },
            
        },
        
        

    }
    

    
})


const Community = mongoose.models.Community || mongoose.model('Community', communitySchema)


export default Community