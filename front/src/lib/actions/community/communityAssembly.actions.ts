"use server"

import mongoose from "mongoose";
import { connectToDB } from "../../validations/mongoose";
import Community from "../../models/community/community.models";
import CommunityAssembly from "../../models/community/communityAssembly.models";


export async function fetchCommunity (id:mongoose.Schema.Types.ObjectId){
    try{
        connectToDB()
        const community = await Community.findOne({_id:id}).exec()
        return community
    }
    catch (error:any){
        throw new Error (`Crashed fetching community: ${error.message}`)
    }
}


export async function fetchCommunities(vibeId:string){
    try{
        connectToDB()
        const communityFetchQuery = await CommunityAssembly.findOne({vibeId:vibeId})
        .populate({
            path:'publicCommunities',
            model:Community
        })
        .populate({
            path:'privateCommunitites',
            model:Community 
        })
        .populate({
            path:'localCommunities',
            model:Community 
        })
        .populate({
            path:'targetCommunities',
            model:Community 
        })

        const communityAssembly = await communityFetchQuery.exec()
        const communities  = []
        communities.push(...communityAssembly.publicCommunities, ...communityAssembly.privateCommunitites, ...communityAssembly.localCommunities, ...communityAssembly.targetCommunities)
        return communities
    }
    catch (error:any) {
        throw new Error(`Crashed fetching communities: ${error.message}`)
    }
}