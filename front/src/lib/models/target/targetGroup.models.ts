import mongoose from "mongoose";

const targetGroupSchema = new mongoose.Schema({
    // TODO: here should be an entity quite like venue without 
    // an adress (which doesnt mean it performs beyond a single geo.
    // Basically it should be a collection of artists, vibes and gigs its involved in with
    // template services presented optionally. Its a form of permanent target community 
    // which should fit any supplementary actors in the market (including lables and producers)
})

const TargetGroup = mongoose.models.TargetGroup || mongoose.model('TargetGroup', targetGroupSchema)

export default TargetGroup