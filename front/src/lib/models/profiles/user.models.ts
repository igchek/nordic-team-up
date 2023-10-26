import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    core:{
        id:{ type:String, required:true},
        log:{type:String, required:true},
        nic:{type:String, required:true},
        pic:{type:String, required:false},
        password:{type:String, required:true},
        email:{type:String, required:false},
        required:true
    },
    
    involvement:{
        vibes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:`Vibe`
        }],
        involvedCommunities:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Community'
            }
        ],
        involvedArtists:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Artist'
            }
        ],
        engagement:{
            artists:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'artist'
            }],
            venues:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'venue'
            }],
            targetGroups:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'target group'
            }],
            required:false
        },
        required:false
    }
    

}
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User