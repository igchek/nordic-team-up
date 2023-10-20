import mongoose from "mongoose";

const VibeSchema = new mongoose.Schema({
    vibeId:{type:String, required:true},

    core:{
        creator:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'artist',
            required:true
        },
        contentTitle:{type:String, required:true},
        tagList:{
            ascribed:[{
            type:String,
            ref:'Tag'
                }],
                
            computed:[{
                type:String,
                ref:'Tag'
            }],
            required:false
            },
        format:{
            type:String,
            required:false
        },
        required:true
        },


        media:{
            artistLogo:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'artist'
            }],
            promoLogo:{type:String, required:false},
            reel:[{
                type:String,
                ref:'media'
            }],
            description:{
                type:String,
                required:false
            },
            required:true
        },

    vibrations:{
        total:{
            quantity:{
                type:Number,
                required:false,
                default:0
            },
            resonation:{
                type:mongoose.Schema.Types.ObjectId,
                required:false
            }
        },
        distributed:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'resonation'
        }],
        required:false
    },

    syncs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sync'
    }],

    gigs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'gig'
    }]
        
    })

    
    
 

const Vibe = mongoose.models.Vibe || mongoose.model('Vibe', VibeSchema)
export default Vibe