import mongoose from "mongoose"
import { userData } from "../profiles/user.models"


export interface temporalFrameData {
    id:string
    core:{
        date:Date
        isTenable:boolean
        start?:Date
        finish?:Date
        pricing?:{
            perHour?:number
            perDay?:number
        }
    }
    option?:{
        vibeId:string
        venueId:string
        artistId:string
        yield?:{
            wage?:number
            advance?:number
            share?:number
        }
        resonation?:{
            optimum:number
            engagement:{
                initial:(mongoose.Schema.Types.ObjectId|userData)[]
                pending?:(mongoose.Schema.Types.ObjectId|userData)[]
                insufficient?:(mongoose.Schema.Types.ObjectId|userData)[]
                rejected?:(mongoose.Schema.Types.ObjectId|userData)[]
                deployed?:(mongoose.Schema.Types.ObjectId|userData)[]
            }
        }
        price:number
    }
}

const temporalFrameSchema = new mongoose.Schema({
    core:{
        type:Object,
        date:{
            type:Date,
            required:[true, "date is required"]
        },
        isTenable:{
            type:Boolean,
            required:[true, "tenability status is required"]
        },
        start:{
            type:Date,
            
        },
        finish:{
            type:Date,
            
        },
        pricing:{
            type:Object,
            perHour:{
                type:Number,
                
            },
            perDay:{
                type:Number,
                
            },
            
        },
        required:[true, "stuff is required"]
    },
    
    option:{
        type:Object,
        vibeId:{
            type:String,
            required:[true, "vibe id is required"]
        },
        venueId:{
            type:String,
            
        },
        artistId:{
            type:String,
            
        },
        yield:{
            type:Object,
            wage:{
                type:Number,
                
            },
            advance:{
                type:Number,
                
            },
            share:{
                type:Number,
                
            },
            
        },
        
        resonation:{
            type:Object,
            optimum:{
                type:Number,
                required:[true, "optimum specifics is required"]
            },
            engagement:{
                type:Object,
                initial:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                pending:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                insufficient:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                rejected:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                deployed:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                
            },
            
            
        },
        price:{
            type:Number,
            required:[true, "stuff is required"]
        },

        

    }
})

const TemporalFrame = mongoose.models.TemporalFrame || mongoose.model('TemporalFrame', temporalFrameSchema) 

export default TemporalFrame