"use server"
import { createArtist } from "@/lib/actions/profiles/artist.actions";
import User from "@/lib/models/profiles/user.models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {id, title, subTitle, desctription,  tags, header, logo} = await request.json()
        const contributors = [id]
        const description = {
            title:title,
            subtitle:{
                role:subTitle,
                description:desctription
            },
            tagline:{
                selfAdjusted:tags
            }

        }
        const media = {
            logo:logo,
            header:header
        }
        const newArtist =  await createArtist({contributors, description, media})


        if(newArtist){
            for (let contributorId of newArtist.contributors){
                
                const contributor = await User.findOne({_id:contributorId})
                const updcontributor = await User.findOneAndUpdate({_id:contributorId}, {$push:{'engagement.artists.accounts':newArtist._id}},{upsert:true})
                
            }
        }


        return NextResponse.json({_id:newArtist._id, title:newArtist.description.title, image:newArtist.media.logo}, {status:200})
    } catch (error:any) {
       console.log(`crashed posting artist:${error.message}`) 
    }
}