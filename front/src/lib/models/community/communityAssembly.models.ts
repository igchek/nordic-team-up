import mongoose from "mongoose";


const CommunityAssemblySchema = new mongoose.Schema({
    vibeId:{type:mongoose.Schema.Types.ObjectId, required:true},

    contents:{
        publicCommunities:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'community'
            }
        ],
        privateCommunitites:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'community'
            }
        ],
        localCommunities:[
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
        required:true
    },

    additional:{
        vibeRuleSet:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'restriction'
        }]
    }


    

})

const CommunityAssembly = mongoose.models.VibeCommunities || mongoose.model('VibeCommunities',CommunityAssemblySchema)

export default CommunityAssembly