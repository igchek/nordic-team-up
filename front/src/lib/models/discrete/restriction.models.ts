import mongoose from "mongoose";

export interface restrictionData {
    id:string
    isIntact:boolean
    target:{
        vibeId?:string
        communityId?:string
        venueId?:string
        userId?:string
    }
    source:{
        patform:boolean
        venue?:boolean
        artist:boolean
        community:boolean
    }
    contents:{
        title:string
        description?:string
    }
    execution?:{
        penalty:{
            mute?:false
            ban:{
                vibe:boolean
                community:boolean
                venue?:boolean
                artist:boolean
            }
        }
        duration:{
            deployment:Date
            suspension?:Date
            termination?:Date
        }
        breachSource:{
            posts:string[]
            visibility:boolean
        }
    }
}



const restrictionSchema = new mongoose.Schema({
    isIntact:{
        type:Boolean,
        required:[true, "intact status is required"],
        default:true
    },
    target:{
        type:Object,
        vibeId:{
            type:String,
            
        },
        communityId:{
            type:String,
            
        },
        venueId:{
            type:String,
            
        },
        userId:{
            type:String,
            
        },
        required:[true, "target specification is required"]
    },
    source:{
        type:Object,
        platform:{
            type:Boolean,
        },
        venue:{
            type:Boolean,
            
        },
        artist:{
            type:Boolean,
        },
        community:{
            type:Boolean,
            required:[true, "community specification is required"]
        },
        required:[true, "source specification is required"]
    },
    contents:{
        type:Object,
        title:{
            type:String,
            required:[true, "title specidication is required"]
        },
        description:{
            type:String,
            
        },
        required:[true, "content specification is required"]
    },
    execution:{
        type:Object,
        penalty:{
            type:Object,
            mute:{
                type:Boolean,
                
            },
            ban:{
                type:Object,
                vibe:{
                    type:Boolean,
                    default:false,
                },
                community:{
                    type:Boolean,
                    default:true,
                },
                venue:{
                    type:Boolean,
                    
                },
                artist:{
                    type:Boolean,
                    default:false,
                    
                },
                
            },
            required:[true, "penalty specification is required"]
        },
        duration:{
            type:Object,
            deployment:{
                type:Date,
                required:[true, "deployment date is required"]
            },
            suspension:{
                type:Date,
                
            },
            termination:{
                type:Object,
                agent:{
                    type:mongoose.Schema.Types.ObjectId,
                    required:[true, "agent specification is required"]
                },
                date:{
                    type:Date,
                    required:[true, "date is required"]
                },
                
            },
            required:[true, "duration is required"]
        },
        breachSource:{
            type:Object,
            posts:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'message'
            }],
            visibility:{
                type:Boolean,
                default:true
            },
            required:[true, "breach source is required"]
        },
        
    }

})

const Restriction = mongoose.models.Restriction || mongoose.model('Restriction', restrictionSchema)
export default Restriction