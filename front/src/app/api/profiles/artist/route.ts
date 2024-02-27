"use server"
import { createArtist } from "@/lib/actions/profiles/artist.actions";
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
        return NextResponse.json({newArtist}, {status:200})
    } catch (error:any) {
       console.log(`crashed posting artist:${error.message}`) 
    }
}