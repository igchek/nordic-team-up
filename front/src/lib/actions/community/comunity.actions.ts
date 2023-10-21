"use server"

import mongoose from "mongoose";
import Community from "../../models/community/community.models";
import Message from "../../models/community/message.models";
import User from "../../models/profiles/user.models";
import { connectToDB } from "@/lib/validations/mongoose";
import Vibe from "@/lib/models/content/vibe.models";


export async function fetchMessages (id:mongoose.Schema.Types.ObjectId){
    try{
        connectToDB()
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
        connectToDB()
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

interface createCommunityI{
    core:{
        hostVibeId:string
        subtype:{
            isPublic:boolean
            isPrivate:boolean
            isPubliclyVisible:boolean
            isModerated:boolean
        }
        Geo?:{_id:mongoose.Schema.Types.ObjectId}
        target?:{
            isTargeted:boolean
            targetGroup?:{_id:mongoose.Schema.Types.ObjectId}
        }
    }
    contents:{
        title:string
        logo?:string
        messages:{_id:mongoose.Schema.Types.ObjectId}[]
        audienceList:{_id:mongoose.Schema.Types.ObjectId}[]
        moderatorList:{_id:mongoose.Schema.Types.ObjectId}[]
        
    }
    additional?:{
        localRuleSet?:{_id:mongoose.Schema.Types.ObjectId}[]
        target?:{
            targetPropositions:{_id:mongoose.Schema.Types.ObjectId}[]
            targetContract:{_id:mongoose.Schema.Types.ObjectId}
        }
    }
}

export async function createCommunity({core, contents, additional}:createCommunityI){
    try{
        connectToDB()
        const newCommunity = await Community.create({
            core,
            contents,
            additional
        })
        if (newCommunity.core.subtype.isPublic){
            await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{publicCommunities:{_id:newCommunity._id}}})
        }
        else if (newCommunity.core.subtype.isPrivate){
            await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{publicCommunities:{_id:newCommunity._id}}})
        }
        else if (newCommunity.core.target){
            await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{targetCommunities:{_id:newCommunity._id}}})
        }

        return {_id:newCommunity._id}
        
    }
    catch (error:any){
        throw new Error (`Crashed creating community:${error.message}`)
    }
}
