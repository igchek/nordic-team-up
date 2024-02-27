"use server"
import mongoose from "mongoose";
import { mediaData } from "../discrete/media.models";

export interface messageData {
    id:string,
    core:{
        communityId:string
        emitterId:string
        date:Date
    }
    content:{
        textContent?:string
        mediaContent?:({_id:mongoose.Schema.Types.ObjectId}|mediaData)[]
        
        edit:{
            isEdited:boolean
            date?:Date

        }
    }
    response?:{
        reply?:string
        likes?:{
            quantity:number
            conveyers:string[]
        }
    }
}


const messageSchema = new mongoose.Schema({
    core:{
        type:Object,
        communityId:{type:String, required:[true, "community id is required"]},
        emitterId:{type:String, required:[true, "emitter id is required"]},
        date:{type:Date, required:[true, "date is required"]},
        required:[true, "core is required"]
    },

    content:{
        type:Object,
        textContent:{type:String, },
        mediaContent:[
            {
                type:mongoose.Schema.Types.ObjectId, ref:'media'
            }
        ],
        edit:{
            type:Object,
            isEdited:{
                type:Boolean,
                default:false
            },
            date:{
                type:Date,
            },
            required:[true, "edit status is required"]
        },
        required:[true, "content field is required"]
    },
    response:{
        type:Object,
        replies:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'message'
        }],
        likes:{
            type:Object,
            // TODO:create like model for multiple like types simultaneously
            quantity:{
                type:Number,
                required:[true, "quantity is required"]
            },
            conveyers:{
                type:[{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'user'
                }],
                required:[true, 'conveyer list id required']
            }
        },
        
    }
    
})

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)
export default Message