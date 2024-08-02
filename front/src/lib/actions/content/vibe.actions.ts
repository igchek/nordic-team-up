"use server"

import Vibe from "@/lib/models/content/vibe.models";
import Media from "@/lib/models/discrete/media.models";
import Artist from "@/lib/models/profiles/artist.model";
import mongoose from "mongoose";
import { createCommunity } from "../community/comunity.actions";
import { connectToDB } from "@/lib/validations/mongoose";
import Community from "@/lib/models/community/community.models";
import Resonation from "@/lib/models/discrete/resonation.models";
import Sync from "@/lib/models/content/sync.models";
import User from "@/lib/models/profiles/user.models";
import { fetchGigEssentials, gigData } from "./gig.actions";
import { SyncData, fetchSync } from "./sync.actions";
import { ArtistCoreData } from "../profiles/artist.actions";
import { resonationData } from "../discrete/resonation.actions";
import communities from "@/store/communities";
import { CommunityParams } from "@/components/SetUp/VibeSetUp/CommunityInput";

export interface idObject {
    _id:mongoose.Schema.Types.ObjectId
    
}
export interface vibeCreateParams{
    artistId:string
    core:{
        creator:idObject,
        contentTitle:string,
        tagList:{
                    ascribed?:string[]
                },
        format?:string
        },
    media:{
        artistLogo:string
        promoLogo?:string,
        reel:string[],
        description?:string,
    }
    
}

export interface VibeTemplate {
    title:string
    description:string
    header:string
    logo:string
    format?:string
    media?:{url:string, isHeader:boolean}[]
    communities?:{
        title:string
        type:'public'|'private'|'target'
        logo:string,
        header:string,
        subtitle?:string,
        params:CommunityParams,
        geo?:string
    }[]

}


// export async function createVibe({artistId, core, media}:vibeCreateParams){
//     try{
//         connectToDB()
//         const artist = await Artist.findOne({id:artistId})
//         let promoLogo=undefined
//         let reelObjArray=[]
//         if(media.promoLogo){
//             const promoIdObj = await Media.create({title:media.promoLogo, type:'.jpg'})
//             promoLogo={_id:promoIdObj._id}
//         }
//         if (media.reel && media.reel.length>0){
//             reelObjArray = []
//             for (let reel of media.reel){
//                 const reelObj = await Media.create({title:reel, type:'.jpg'})
//                 reelObjArray.push({_id:reelObj._id})
//             }
//         }
//         const artistLogo = await Media.findOne({title:media.artistLogo})

//         const newVibe = await Vibe.create({
//         vibeId:Math.floor(Math.random()*10000).toString(),
//         core:{
//             creator:{_id:artist._id},
//             contentTitle:core.contentTitle,
//             tagList:core.tagList,
//             format:core.format,
//             media:{
//                 artistLogo:artistLogo,
//                 promoLogo:promoLogo,
//                 reel:reelObjArray,
//                 description:media.description
//             }
//         }

//         })

//         await artist.content.vibes.push({_id:newVibe._id}).save()
//         const defaultPublicCommunity = await createCommunity({
//             core:{
//                 hostVibeId:newVibe.vibeId,
//                 subtype:{
//                     isPublic:true,
//                     isPrivate:false,
//                     isPubliclyVisible:true,
//                     isModerated:false,
//                 }
//             },
//             contents:{
//                 title:`${newVibe.core.contentTitle} main`,
//                 logo:newVibe.core.media.promoLogo,
//                 messages:[],
//                 audienceList:[...artist.contributors],
//                 moderatorList:[]
//             }
//         })
//         await newVibe.communities.publicCommunities.push({_id:defaultPublicCommunity._id}).save()

//         return newVibe

//     }
//     catch(error:any){
//         throw new Error(`Crashed creating a vibe: ${error.message}`)
//     }
    
    
// }



interface vibeData {
    vibeId?:String
    core:{
        creator:ArtistCoreData
        contentTitle:string
        tagList?:{
            ascribed?:string[]
            computed?:string[]
        }
        format?:string
    }
    media:{
        artistLogo:string
        promoLogo:string
        reel:string[]
        description?:string
    }
    vibrations:{
        total:{
            quantity:number
            resonations:resonationData
        }
        distributed?:resonationData
    }
}




export interface VibeDataStructure {
    vibe:vibeData
    sync?:SyncData
    gig?:gigData
}

export interface fetchVibeI {
    vibeId:string
    userId?:string
}
export async function fetchVibePresent({vibeId, userId}:fetchVibeI):Promise<VibeDataStructure>{
    try{
        connectToDB()
        const vibe = await Vibe.findOne({vibeId:vibeId}).populate({
            path:'core',
            populate:{
                path:'creator',
                model:Artist
            }
        }).populate({
            path:'core',
            populate:{
                path:'media',
                populate:{
                    path:'reel',
                    model:Media
                }
            }
        })
        .populate({
            path:'publicCommunities',
            model:Community
        })
        .populate({
            path:'privateCommunities',
            model:Community
        })
        .populate({
            path:'targetCommunities',
            model:Community
        })
        .populate({
            path:'vibrations',
            populate:{
                path:'total',
                populate:{
                    path:'resonation',
                    model:Resonation
                }
            }
        })
        .populate({
            path:'vibrations',
            populate:{
                path:'distributed',
                model:Resonation
            }
        })
        .populate({
            path:'deployment',
            populate:{
                path:'syncs',
                model:Sync
            }
        })
        .populate({
            path:'vibrations',
            populate:{
                path:'distributed',
                model:Resonation
            }
        })
        let vibeData:VibeDataStructure = {
            vibe:vibe
        }
        if (userId){
            const user = await User.findOne({id:userId})
            if (vibe.deployment.gigs.some((gig:any)=> {gig.deployment.geo===user.core.geo})){
                const gig = await fetchGigEssentials(vibe.deployment.gigs.find((gig:any)=>gig.vibeId===vibe._id)._id)

                vibeData = {...vibeData, gig:gig}
                return vibeData
            }
            else if 
                    (!(vibe.deployment.gigs.some((gig:any)=> {gig.deployment.geo===user.core.geo})) 
                && 
                    (vibe.deployment.syncs.some((sync:any)=> {sync.deployment.geo===user.core.geo})))
            {
                const sync = await fetchSync(vibe.deployment.syncs.find((sync:any)=>sync.vibeId===vibe._id)._id)

                vibeData = {...vibeData, sync:sync}
                return vibeData
            }
            else return vibeData
        }
        return vibeData
        

    }
    catch (error:any){
        throw new Error(`Crashed fetching a vive: ${error.message}`)
    }
}

export interface fetchInvolvedVibesI{
    userId:String
    uploadQuantity:number
    uploadedQuantity:number
}

export interface involvedVibeCore {
    vibeId:String
    contentTitle:String
    promoLogo:String
    audience:String
    modality:String
}

export async function fetchInvolvedVibes({userId, uploadQuantity, uploadedQuantity}:fetchInvolvedVibesI){
    try{
        connectToDB()
        const user = await User.findOne({userId:userId})
        const vibeIds = user.innvolvement.vibes.slice(uploadedQuantity, (uploadQuantity+uploadedQuantity))
        const vibes = await Vibe.find({_id:{$in:vibeIds}})

        const InvolvedVibesData:involvedVibeCore[] = []
        for (let vibe of vibes){
            let dataChunk:involvedVibeCore = {
                vibeId:vibe.content.vibeId,
                contentTitle:vibe.content.core.contentTitle,
                promoLogo:vibe.content.media.promoLogo,
                audience:vibe.content.vibrations.total.quantity,
                modality:vibe.modality
            }
            InvolvedVibesData.push(dataChunk)
        }
        return InvolvedVibesData
        

    }
    catch(error:any){
        throw new Error(`Crashed fetching involved vibes:${error.message}`)
    }
}



export async function fetchVibes4Dash({load,loaded, userId}:{load:number,loaded:number, userId?:String}){
    try{
        connectToDB()
        
        // first we get all vibes and skip them by already uploaded quantity in case its an additional fetch within standart upload limit
            const vibes = await Vibe.find({}).skip(loaded).limit(load).populate('media')
            .populate({
                path:'core',
                populate:{
                    path:'creator',
                    model:Artist,
                    select:'artistId description media'
                }
            }).populate('resonation').populate('sync').populate('gig').exec()

            // then we map it to the required interface. By default it returns only vibe modality since we don't get geo from an unlogged user

            const vibeData = vibes.map((v:any)=>{
                v =
                {
                    _id:v._id,
                    id:v.vibeId,
                    core:v.core,
                    vibrations:v.vibrations,
                    artist:v.core.creator,
                    modality:'vibe'
                }
            })

            // but in case we have a geo from a user, we can also filter the output by already involved vibes and check modalities
        
        if(userId){
            const user = await User.findOne({id:userId})
            const userVibesObjArray = await user.involvement.vibes.map((uv:any)=>{uv.content})
            const vibesDataObjArray = vibeData.map((v:any)=>{v._id})
            const vibesObjFilteredArray = vibesDataObjArray.filter(item=>!userVibesObjArray.includes(item))
            const filteredPersonalVibeOutput =  await Vibe.find({_id:{$in:vibesObjFilteredArray}}, {skip:loaded}).populate('media')
            .populate({
                path:'core',
                populate:{
                    path:'creator',
                    model:Artist,
                    select:'artistId description media'
                }
            }).populate('resonation').populate('sync').populate('gig').exec()

            const vibeFilteredData = Promise.all(filteredPersonalVibeOutput.map(async (v:any)=>{
                let vibeId = v.vibeId
                let modality = await checkModality({userId, vibeId})
                v =
                {
                    _id:v._id,
                    id:v.vibeId,
                    core:v.core,
                    vibrations:v.vibrations,
                    artist:v.core.creator,
                    modality:modality
                }
            }))
            return vibeFilteredData
            
        }
        return vibeData
        

    }
    catch(error:any){
        throw new Error(`Crashed fetching vibes for dash:${error.message}`)
    }
}


export async function checkModality({userId, vibeId}:{userId:String, vibeId:any}){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        const vibe = await Vibe.findOne({id:vibeId}).populate('sync').populate('gig').exec()
        for (let sync of vibe.deployment.syncs){
            if (sync.geo===user.core.geo)return 'sync'
        }
        for (let gig of vibe.deployment.gigs){
            if(gig.deployment.geo === user.core.geo) return 'gig'
        }

        return 'vibe'
    }
    catch(error:any){
        throw new Error(`Crashed checking out ${vibeId} modality for user ${userId}:${error.message}`)
    }
}

export async function uploadVibe({artistId, userId, vibeContents,}:{artistId:string, userId:string, vibeContents:VibeTemplate}){
    try {
        connectToDB()
        const user = await User.findOne({_id:userId})
        const artist = await Artist.findOne({_id:artistId})
        const newVibe = await Vibe.create({
            core:{
                creator:artist._id,
                creatorTitle:artist.title,
                contentTitle:vibeContents.title,
                tags:{
                    ascribed:[],
                    computed:[]
                },
                format:vibeContents.format,
                description:vibeContents.description
            },
            media:{
                artistLogo:artist.artistLogo,
                promoLogo:vibeContents.logo,
                reel:vibeContents.media
            },
            communities:{
                
            }
        })
        if (vibeContents.communities){
            vibeContents.communities.forEach(async (c)=>{
                const community = await Community.create({
                    core:{
                        hostVibeId:newVibe._id,
                        communityType:c.type,
                        params:{
                            publicVisibility:c.params.publicVisibility,
                            internalModeration:c.params.internalModeration,
                            localization:c.params.localization,
                            mediaUpload:c.params.mediaUpload,
                            templateOffer:c.params.templateOffer,
                            chat:c.params.chat
                        },
                        title:c.title,
                        header:c.header,
                        logo:c.logo,
                        subtitle:c.subtitle,
                        Geo:c.geo,
                        target:{
                            isTargeted:c.type==='target'?true:false
                        }
                    },
                    contents:{
                        messages:[],
                        audienceList:[],
                        moderatorList:[],
                        banList:[]
                    }
                    
                })
                if(c.type==='private'){
                    newVibe.communities.coomunities.priivateCommunities.push({_id:community._id})
                }
                else if(c.type==='public'){
                    newVibe.communities.publicCommunities.push({_id:community._id})
                }
                else {
                    newVibe.communities.targetCommunities.push({_id:community._id})
                }
            })
        }

    } catch (error:any) {
        throw new Error (`Crashed posting a vibe:${error.message}`)
    }
}

