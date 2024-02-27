import mongoose from "mongoose";
import { vibeData } from "../content/vibe.models";
import { communityData } from "../community/community.models";
import { ArtistData } from "./artist.model";
import { VenueData } from "./venue.model";
import { TargetGroupData } from "../target/targetGroup.models";



export interface userVibe {
    content:vibeData
    modality:string
    push?:{
        note:boolean
        progression?:boolean
    }
}
export interface userData {
    id:string
    core:{
        log:string
        nick:string
        pic?:string
        password:string
        email?:string
        geo:String,
        
    }
    involvement?:{
        vibes:{
            content:mongoose.Schema.Types.ObjectId|vibeData
            modality:string
            push?:{
                note:Boolean,
                progression?:Boolean
            }
        }[]
        involvedCommunities:{
            content:mongoose.Schema.Types.ObjectId|communityData
            type:string
            push?:{
                likes:string[]
                replies:string[]
                note:boolean
            }
        }[]
        involvedArtists?:(mongoose.Schema.Types.ObjectId|ArtistData)[]
        engagement?:{
                focus:string|null
                accounts:(mongoose.Schema.Types.ObjectId|ArtistData)[]
            }
            venues?:{
                focus:string|null
                accounts:(mongoose.Schema.Types.ObjectId|VenueData)[]
            }
            targetGroups?:{
                focus:string|null
                accounts:(mongoose.Schema.Types.ObjectId|TargetGroupData)[]
            }
        }
    }


const UserSchema = new mongoose.Schema({
    id:{ type:String, required:true },
    core:{
        log:{type:String, required:true},
        nick:{type:String, required:true },
        pic:{type:String,  },
        password:{type:String, required:true },
        email:{type:String,  },
        geo:{type:String, required:true },
        
    },
    
    involvement:{
        vibes:{
            type:[{
                content:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'vibe',
                    
                },
                modality:{
                    type:String,
                    
                },
                push:{
                    note:{
                        type:Boolean,
                        
                        
                    },
                    progression:{
                        type:Boolean,
                        
                        
                    },
                    
                }
            }],
            
        },
        involvedCommunities:{
            type:[
                {
                    content:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'community'
                    }, 
                    type:{
                        type:String,
                        
                    },
                    push:{
                        likes:[{String}],
                        replies:[{String}],
                        note:Boolean,
                        
                        
                    }
    
    
                    
                }
            ],
            
        },
        involvedArtists:{
            type:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Artist'
                }
            ],
            
        },
        
       
    },
    engagement:{
        type:Object,
        artists:{
            type:Object,
            focus:{
                type:String||null,
                default:null
            },
            accounst:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'artist'
            }],
            // required:[true, 'stuff is required']
        },
        venues:{
            type:Object,
            focus:{
                type:String||null,
                default:null
            },
            accounts:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'venue'
            }]
        },
        targetGroups:
            {
            type:Object,
            focus:{
                type:String||null,
                default:null
            },
            accounts:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target group'
            }]
        },
        required:[true, 'engagement is required']
        
        
    },
    

}
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User