"use server"

import mongoose from "mongoose";
import Community, { communityData } from "../../models/community/community.models";
import Message, { messageData } from "../../models/community/message.models";
import User from "../../models/profiles/user.models";
import { connectToDB } from "@/lib/validations/mongoose";
import Vibe from "@/lib/models/content/vibe.models";
import Restriction from "@/lib/models/discrete/restriction.models";
import { CommunityParams } from "@/components/SetUp/VibeSetUp/CommunityInput";
import TargetGroup from "@/lib/models/target/targetGroup.models";
import TargetContract from "@/lib/models/target/targetContract.models";



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

// export async function createCommunity({core, contents, additional}:createCommunityI){
//     try{
//         connectToDB()
//         const newCommunity = await Community.create({
//             core,
//             contents,
//             additional
//         })
//         if (newCommunity.core.subtype.isPublic){
//             await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{publicCommunities:{_id:newCommunity._id}}})
//         }
//         else if (newCommunity.core.subtype.isPrivate){
//             await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{publicCommunities:{_id:newCommunity._id}}})
//         }
//         else if (newCommunity.core.target){
//             await Vibe.findOneAndUpdate({_id:core.hostVibeId}, {$push:{targetCommunities:{_id:newCommunity._id}}})
//         }

//         return {_id:newCommunity._id}
        
//     }
//     catch (error:any){
//         throw new Error (`Crashed creating community:${error.message}`)
//     }
// }

export interface communityCoreData{
    _id:String
    vibeId:String
    logo:String
    title:String
    subtitle?:String
    audience:Number
    push?:{
        likes?:String[]
        replies?:String[]
        note?:Boolean
    }
    type:String
}

export interface communitiesCoreData{
    publicCommunities:communityCoreData[]
    privateCommunities?:communityCoreData[]
    targetCommunities?:communityCoreData[]
    pushLoad?:communityCoreData[]
}

export async function fetchCommunities({vibeId, userId}:{vibeId:String, userId:String}){
    try{
        connectToDB()
        const user = await User.findOne({userId:userId}).populate(('community'))
        const vibe = await Vibe.findOne({vibeId:vibeId}).populate('community')

        // this is fucking lame. Pushing community based data type into user so to extract push notifications data so to optimise data flow... 
        // Its 11th hour of coding and I'm done. If anyone finds this fucking stupid he's probably right 
        
        // so first we extract pushed communities from user and map them so they fit template core data structure

        const pushLoad = user.involvement.involvedCommunities
        const pushLoadMapped = pushLoad.map((c:any)=>{
            c={
                logo:c.content.contents.logo,
                title:c.content.contents.title, 
                subtitle:c.content.contents.subtitle,
                audience:c.content.contents.audienceList.length,

                // push load specifies  push notifications so that response data monitors replies/pushes for user via web socket (i guess. I really am done Headers. Hope this works)
                push:{
                    likes:c.push.likes,
                    replies:c.push.replies,
                    note:c.push.note
                },

                type:c.contents.core.type

            }
            })
        
        // then we extract all of the communities in a vibe that are visible(the invisible ones the user has access to are stored in user, i.e. alredy fetched to pushLoad)
   

            const publicCommunititesData = vibe.communities.publicCommunities.map((c:any)=>{
                c={
                    logo:c.contents.logo,
                    title:c.contents.title, 
                    subtitle:c.contents.subtitle,
                    audience:c.contents.audienceList.length,
                    type:c.contents.core.type

                }
                })

            const privateCommunitiesData:communityCoreData[] = []
            const privateLoad = vibe.communities.privateCommunities.map((c:any)=>{
                if(c.core.subtype.isPubliclyVisible){
                    c={
                        logo:c.contents.logo,
                        title:c.contents.title, 
                        subtitle:c.contents.subtitle,
                        audience:c.contents.audienceList.length,
                        type:c.contents.core.type
        
                    }
                    privateCommunitiesData.push(c)
                }
                
                })
            const targetCommunitiesData:communityCoreData[]  = []
            const targetLoad = vibe.communities.targetCommunities.map((c:any)=>{
                if(c.core.subtype.isPubliclyVisible){
                    c={
                        logo:c.contents.logo,
                        title:c.contents.title, 
                        subtitle:c.contents.subtitle,
                        audience:c.contents.audienceList.length,
                        type:c.contents.core.type
            
                    }
                    targetCommunitiesData.push((c))
                }
                
                })    

            
            
        const communitiesCoreData:communitiesCoreData = {
            publicCommunities:publicCommunititesData,
            privateCommunities:privateCommunitiesData,
            targetCommunities:targetCommunitiesData,
            pushLoad:pushLoadMapped
        }
        return communitiesCoreData
        
    }
    catch(error:any){
        throw new Error(`Crashed fetching communities:${error.message}`)
    }
}

export interface fetchCommunityI {
    communityData:communityData
    messages:messageData[]
}

export async function fetchCommunity({communityId, userId, messageLoad}:{communityId:string, userId:string, messageLoad:Number} ){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        const communityData = await Community.findOne({id:communityId})
        .populate({
            path:'contents',
            populate:{
                path:'audienceList',
                model:User,
                select:'id log nic pic'
            }
        })
        .populate({
            path:'contents',
            populate:{
                path:'moderatorList',
                model:User,
                select:'id log nic pic'
            }
        })
        .populate('restriction')
        .populate('target proposition').exec()
        // populate it wit target group contents later on as i write it

        const messagesIdArray = await communityData.contents.messages.slice(-1, -messageLoad).reverse()
        const messages = await Message.find({_id:{$in:messagesIdArray}}).exec()

        return {communityData, messages}
        
    }
    catch(error:any){
        throw new Error(`Crashed fetching community:${error.message}`)
    }
}


export async function fetchMessages({communityId, messagesLoaded, messageLoad}:{communityId:String, messagesLoaded:number, messageLoad:number}){
    try{
        connectToDB()
        const community = await Community.findOne({id:communityId})
        const messagesIdArray = community.contents.messages.slice(-messagesLoaded, -(messagesLoaded+messageLoad)).reverse()
        const messagesData = await Message.find({_id:{$in:messagesIdArray}}).populate('media').populate({path:'conveyers', model:User, select:' pic nic id'}).exec()
        return messagesData
    }
    catch(error:any){
        throw new Error(`Crashed fetching messages:${error.message}`)
    }
}


export async function createCommunity({community}:{community:{
        title:string,
        logo:string,
        header:string,
        type:'public'|'private'|'target',
        coreVibeId:{_id:string}, 
        params:CommunityParams,
        subtitle?:string,
        Geo?:string,
        target:{
            isTargeted:boolean,
            targetGroup:mongoose.Schema.Types.ObjectId
        }  
    }}){
    try {
        connectToDB()
        
        const newCommunity = new Community ({
            core:{
                hostVibeId:community.coreVibeId,
                communityType:community.type,
                params:{
                    publicVisibility:community.params.publicVisibility,
                    internalModeration:community.params.internalModeration,
                    localization:community.params.localization,
                    mediaUpload:community.params.mediaUpload,
                    templateOffer:community.params.templateOffer,
                    chat:community.params.chat

                },
                title:community.title,
                logo:community.logo,
                header:community.header,
                Geo:community.Geo,
                target:{
                    isTargeted:community.type==='target'?true:false,
                    TargetGroup:community.target.targetGroup
                }

            },
            contents:{
                messages:[],
                audienceList:[],
                moderatorList:[],
                banList:[]
            }
        })

        const ParentVibe = await Vibe.findOne({_id:newCommunity._id})
        if(community.type==='private'){
            ParentVibe.core.communities.privateCommunities.push({_id:newCommunity._id})
        }
        else if(community.type==='public'){
            ParentVibe.core.communities.publicCommunities.push({_id:newCommunity._id})
        }
        else if(community.type==='target'){
            ParentVibe.core.communities.targetCommunities.push({_id:newCommunity._id})
        }
        ParentVibe.save()
        newCommunity.save()

    } catch (error:any) {
        throw new Error (`Crashed posting a community:${error.message}`)
    }
}