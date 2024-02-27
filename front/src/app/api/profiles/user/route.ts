"use server"

import { createUser } from "@/lib/actions/profiles/user.actions"
import User from "@/lib/models/profiles/user.models"
import { connectToDB } from "@/lib/validations/mongoose"
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request:NextRequest){
    try {
        const {nick, pic, password, email, geo} = await request.json()
        const newUser = await createUser({nick,pic, password, email, geo})
        // console.log('new user is, ',newUser)
        return NextResponse.json({newUser}, {status:200})
    } catch (error:any) {
        console.log(`posting user crash:`, error)
    }
}


export async function GET(request:NextRequest){
    try {
        await connectToDB()
        const {nick} = await request.json()
        const user = await User.findOne({core:{nick:nick}})
        return NextResponse.json({user}, {status:200})
    } catch (error) {
        
    }
}