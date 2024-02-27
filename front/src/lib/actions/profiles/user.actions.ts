"use server"

import User from "../../models/profiles/user.models";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../../validations/mongoose";
import Vibe from "../../models/content/vibe.models";
import { generateId } from "@/Utils/misc";
import bcrypt from 'bcrypt';
import Artist from "@/lib/models/profiles/artist.model";
import Venue from "@/lib/models/profiles/venue.model";

interface editParams {
    userId:string,
    nic:string,
    pic:string,
    path:string
}

export async function updateUser(
    {
        userId,
        nic,
        pic,
        path
    }:editParams
    

):Promise<void>{
    try{
        connectToDB()
    await User.findOneAndUpdate(
        {userId:userId},
        {
            nick: nic.toLocaleLowerCase(),
            pic 
        },
        {upsert:true}
    )
    if (path==="/profile/edit"){
        revalidatePath(path)
    }
    }
    catch (error:any){
        throw new Error(`updating user ${nic} crashed: ${error.message}`)
    }
    
}

export async function fetchEngagement({id}:{id:string}){
    try {
        connectToDB()
        const engagement = await User.findOne({_id:id}).populate({
            path:'engagement',
            populate:{
                path:'artists',
                model:Artist,
                select:'description media'
            }
        }).populate({
            path:'engagement',
            populate:{
                path:'venues',
                model:Venue,
                select:'description media'
            }
        }).exec()

        if(engagement.ok){
            return engagement.json()
        }
    } catch (error:any) {
        throw new Error(`Crashed fetching engagement:${error.message}`)
    }
}


export async function fetchInvolvedVibes(userId:string) {
    try {
        connectToDB()
        const user = await User.findOne({id:userId}).
        populate({
            path:'vibes',
            model:Vibe
        }).
        exec()

        const vibes = await user.vibes

        return vibes



    }
    catch (error:any) {
        throw new Error(`Crashed fetching involved vibes: ${error.message}`)
    }
}


interface userCreateI {

        log?:string,
        nick:string,
        pic?:string,
        password:string,
        email?:string,
        geo:string


}
export async function createUser({nick,pic, password, email, geo}:userCreateI){
    try{
        await connectToDB()
        const id = generateId(10000)
         const newUser = await User.create({
            id:id,
            core:{
                log:`${nick+id.toString()}`,
                nick:nick,
                pic:pic,
                geo:geo,
                password:await bcrypt.hash(password, 10),
                email:email
            },
            engagement:{
                artists:{
                    focus:null,
                    accounts:[]
                },
                venues:{
                    focus:null,
                    accounts:[]
                },
                targetGroups:{
                    focus:null,
                    accounts:[]
                }
            }

        })
        return newUser
    }
    catch(error:any){
        throw new Error(`Crashed creating user profile: ${error.message}`)
    }
}


export interface userCoreData {
        id:String,
        log:String,
        nic:String,
        pic?:String,
        password:String,
        email?:String,
        geo:String
    

}

export async function getEngagement({id}:{id:string}){
    try {
         const user = await fetch (`http://localhost:3000/api/profiles/user/data/engagement/${id}`,{
            method:"GET",
            cache:'no-cache',
            headers:{
                "Content-Type":"application/js"
            }
        }).then(res=>{ return res.json()})

        return user
        
    } catch (error:any) {
        throw new Error(`Crashed fetching engagement:${error.message}`)
    }
}

