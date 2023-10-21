"use server"

import Media from "@/lib/models/discrete/media.models"
import Artist from "@/lib/models/profiles/artist.model"
import User from "@/lib/models/profiles/user.models"
import { connectToDB } from "@/lib/validations/mongoose"
import mongoose from "mongoose"

interface createArtistI{
    contributors:string[]
    description:{
        title:string
        subtitle?:{
            role?:string
            description?:string
        }
        tagLine?:{
            selfAdjusted?:string[]
        }
    }
    media:{
        logo?:string
        header?:string
    }
}

export async function createArtist({contributors, description, media}:createArtistI){
    connectToDB()
    try{
        const usersObjArray = []
        for (let userId of contributors){
            let user = await User.findOne({userId:userId})
            usersObjArray.push({_id:user._id})
        }
        let headerObj = undefined
        if (media.header){
            const newHeaderM = await Media.create({title:media.header, type:'jpg'})
            headerObj = {_id:newHeaderM._id}
        }

        let logoObj = undefined
        if (media.logo){
            const newLogoM = await Media.create({title:media.logo, type:'jpg'})
            logoObj = {_id:newLogoM._id}
        }

        const newArtist = await Artist.create({
            artistId:Math.floor(Math.random()*10000).toString(),
            contributors:usersObjArray,
            description:{
                title:description.title,
                subtitle:{
                    role:description.subtitle?.role,
                    description:description.subtitle?.description
                },
                tagLine:{
                    selfAdjusted:description.tagLine?.selfAdjusted
                }

            },
            media:{
                logo:logoObj,
                header:headerObj
            }
        })

        for (let userId of contributors){
            const user = await User.findOne({userId:userId})
            await User.findOneAndUpdate(user, {$push:{artists:newArtist}})
        }
        return newArtist
    }
    catch (error:any){
        throw new Error (`Crashed creating an artist profile: ${error.message}`)
    }
    
}