import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    core:{
        communityId:{type:mongoose.Schema.Types.ObjectId, required:true},
        emitterId:{type:mongoose.Schema.Types.ObjectId, required:true},
        date:{type:Date, required:true},
        required:true
    },

    content:{
        textContent:{type:String, required:false},
        mediaContent:[
            {
                type:mongoose.Schema.Types.ObjectId, ref:'media'
            }
        ],
    
        reply:{type:mongoose.Schema.Types.ObjectId, required:false},
        edit:{
            isEdited:{
                type:Boolean,
                required:true,
                default:false
            },
            date:{
                type:Date,
                required:false
            }
        },
        required:true
    },
    response:{
        likes:{
            // TODO:create like model for multiple like types simultaneously
            quantity:{
                type:Number,
                required:true
            },
            conveyers:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'user'
            }]
        },
        required:false
    }
    
})

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)
export default Message