"use server"
import Vibe from "@/lib/models/content/vibe.models"
import Artist from "@/lib/models/profiles/artist.model"
import { connectToDB } from "@/lib/validations/mongoose"
import { NextResponse } from "next/server"

export async function GET({params}:{params:{id:string}}){
    try {
     await connectToDB()

    const {id} = params


    const content = await Artist.findOne({_id:id}).populate({
        path:'content',
            populate:{
                path:'vibes', 
                select:`_id vibeId core vibrations`,
                model:Vibe
            }
    })

    return NextResponse.json(content, {status:200})

} catch (error:any) {
    throw new Error(`crashed fetching artist vibes data:${error.message}`)
}
}