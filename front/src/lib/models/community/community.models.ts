import mongoose from "mongoose";


const communitySchema = new mongoose.Schema({
    core:{
        hostVibeId:{type:mongoose.Schema.Types.ObjectId, required:true},
        subtype:{
            isPublic:{type:Boolean, required:true},
            isLocal:{type:Boolean, required:true},
            isPubliclyVisible:{type:Boolean, default:true, required:true},
            isModerated:{type:Boolean, required:true},
            required:true
        },
        Geo:{type:mongoose.Schema.Types.ObjectId, required:false},
        target:{
            isTargeted:{
                type:Boolean,
                required:true
            },
            targetGroup:{
                type:mongoose.Schema.Types.ObjectId,
                required:false,
                ref:'target group'
            }
        },
    },
    contents:{
        title:{type:String, required:true},
        logo:{type:String, required:false},
        
        messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'message'
            }
        ],
        audienceList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'user'
            }
        ],
        moderatorList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:false,
                ref:'user'
            }
        ],
        banList:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:false,
                ref:'restriction'
            }
        ],
        required:true
    },

    // additional infrastrucure

    additional:{
        localRuleSet:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'restriction'
    
            }
        ],
        target:{
            targetPropositions:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target propositions'
            }],
            targetContract:{type:mongoose.Schema.Types.ObjectId, required:false},
            required:false
        },
        required:false
        

    }
    

    
})


const Community = mongoose.models.Community || mongoose.model('Community', communitySchema)


export default Community