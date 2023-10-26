"use server"

import Media from "@/lib/models/discrete/media.models"
import { generateId } from "@/Utils/misc"
import { connectToDB } from "@/lib/validations/mongoose"


interface mockUploadMediaI {
    title:string
    type:string
}

export async function mockUploadMedia ({title, type}:mockUploadMediaI){
    try{
        connectToDB()
        const newMedia = await Media.create({
            id:generateId(10000),
            title:title, 
            type:type} )
         return {_id:newMedia._id}   
    }
    catch(error:any){
        throw new Error(`Crashed mock-uploading media:${error.message}`)
    }
}