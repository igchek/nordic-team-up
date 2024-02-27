"use server"
import {NextRequest, NextResponse} from 'next/server'
import { connectToDB } from "@/lib/validations/mongoose"
import User from '@/lib/models/profiles/user.models'


export async function PUT(request:NextRequest, {params}:{params:{id:string}}){
    try {
        await connectToDB()
        const {id} = params
        const {update} = await request.json()

        const res = await User.findOneAndUpdate({_id:id}, {update}) 
        if (res.ok) return NextResponse.json({message:'user updated'}, {status:200})

    } catch (error:any) {
        throw new Error(`Crashed puting geo edit:${error.message}`)
    }
}

export async function GET(request:NextRequest, {params}:{params:{id:string}}){
    try {
        await connectToDB()
        const {id} = params

        const user = await User.findOne({_id:id})
        
            return NextResponse.json({user}, {status:200})
        
    } catch (error:any) {
        throw new Error(`Crashed getting user data edit:${error.message}`)
    }
}