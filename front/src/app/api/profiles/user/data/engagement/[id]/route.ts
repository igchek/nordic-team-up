"use server"
import {NextRequest, NextResponse} from 'next/server'
import User from "@/lib/models/profiles/user.models"
import { connectToDB } from "@/lib/validations/mongoose"
import Artist from "@/lib/models/profiles/artist.model"
import Venue from '@/lib/models/profiles/venue.model'
import TargetGroup from '@/lib/models/target/targetGroup.models'
export async function GET(request:NextRequest, {params}:{params:{id:string}}){
    try {
        const {id} = params
        await connectToDB()
        const data = await User.findOne({_id:id})
        .populate({
                path:'engagement',
                populate:{
                    path:'artists',
                    populate:{
                        path:'accounts',
                        select:'_id contributors description media',
                        model:Artist
                    }

                }
        }).populate({
            path:'engagement',
                populate:{
                    path:'venues',
                    populate:{
                        path:'accounts',
                        select:'_id contributors description media',
                        model:Venue
                    }
                    
                }
        }).populate({
            path:'engagement',
                populate:{
                    path:'targetGroups',
                    populate:{
                        path:'accounts',
                        select:'id contributors description media',
                        model:TargetGroup
                    }
                }
        }).exec()
        
        
    
        const engagement = data.engagement
        // console.log(`engagement is`, data.engagement)
        return NextResponse.json({engagement}, {status:200})
        

    } catch (error:any) {
        throw new Error(`Crashed fetching user data:${error.message}`)
    }
}