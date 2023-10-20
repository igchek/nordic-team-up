"use server"

import mongoose from "mongoose";
import Community from "../../models/community/community.models";
import Message from "../../models/community/message.models";
import User from "../../models/profiles/user.models";


export async function fetchMessages (id:mongoose.Schema.Types.ObjectId){
    try{
        const messageQuery = await Community.findOne({_id:id}).populate({
            path:'messages',
            model:Message
        }).exec()

        const messages = await messageQuery.messages

        return messages
    }
    catch (error:any) {
        throw new Error(`Crashed fetching messages: ${error.message}`)
    }
}

export async function fetchAudienceList (id:mongoose.Schema.Types.ObjectId){
    try{
        const audienceQuery = await Community.findOne({_id:id})
        .populate({
            path:'audienceList',
            model:User
        })
        .exec()

        const audienceList = await audienceQuery.audienceList
        return audienceList
    }
    catch (error:any){
        throw new Error(`Crashed fetching audience list: ${error.message}`)
    }
}
