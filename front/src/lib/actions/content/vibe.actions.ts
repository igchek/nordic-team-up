"use server"

import Vibe from "@/lib/models/content/vibe.models";
import Media from "@/lib/models/discrete/media.models";
import Artist from "@/lib/models/profiles/artist.model";
import mongoose from "mongoose";

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


export async function createVibe({artistId, core, media}:vibeCreateParams){
    try{
        const artist = await Artist.findOne({id:artistId})
        let promoLogo=undefined
        let reelObjArray=[]
        if(media.promoLogo){
            const promoIdObj = await Media.create({title:media.promoLogo, type:'.jpg'})
            promoLogo={_id:promoIdObj._id}
        }
        if (media.reel && media.reel.length>0){
            reelObjArray = []
            for (let reel of media.reel){
                const reelObj = await Media.create({title:reel, type:'.jpg'})
                reelObjArray.push({_id:reelObj._id})
            }
        }
        const artistLogo = await Media.findOne({title:media.artistLogo})

        const newVibe = await Vibe.create({
        vibeId:Math.floor(Math.random()*10000).toString(),
        core:{
            creator:{_id:artist._id},
            contentTitle:core.contentTitle,
            tagList:core.tagList,
            format:core.format,
            media:{
                artistLogo:artistLogo,
                promoLogo:promoLogo,
                reel:reelObjArray,
                description:media.description
            }
        }

        })

        await Artist.findOneAndUpdate({_id:artist._id},{$push:{:newVibe._id}})

        return newVibe

    }
    catch(error:any){
        throw new Error(`Crashed creating a vibe: ${error.message}`)
    }
    
    
}

