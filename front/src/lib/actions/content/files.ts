"use server"

import { utapi } from "@/Utils/server/uploadthing"




export async function uploadLogo(files:File[]) {
    try {


        const res = await utapi.uploadFiles(files[0])
        if(res.data?.url){
            console.log('uploadthing res is', res.data)
            return res
        }
        // const uploadRes =  await startUpload(logoFile)
            
        // if(uploadRes){
        //     console.log('uploadRes is', uploadRes)
        // }
        // debugger
        return
    } catch (error) {
        
    }
}