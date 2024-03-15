"use server"
import UserHeader from '@/components/Profile/User/UserHeader'
import styles from './styles.module.scss'


import React from 'react'
import UserDescription from '@/components/Profile/User/Description/UserDescription'
import UserEngagement from '@/components/Profile/User/Engagement/UserEngagement'
import UserProfileTop from '@/components/RootLayout/ProlfileTop/UserProfileTop'
import { motion } from 'framer-motion'

async function getUserData(id:string){
    try {
        const engagement = await fetch(`http://localhost:3000/api/profiles/user/data/${id}`,{
            method:"GET",
            cache:'no-cache',
            headers:{
                "Content-Type":"application/js"
            }
        }).then( async(res)=>{
            
           let jres =  await res.json()
            return jres
        })

        
        return engagement
    } catch (error:any) {
        throw new Error(`Crashed fetching engagement:${error.message}`)
    }
}


export default async function page({params}:{params:{id:string}}) {
    const {id} = params
    const {user} = await getUserData(id)
    
   
  return (
    <div 
    className={styles.UserWrapper}>
        <UserHeader
            nick={user.core.nick}
            cover='default'
            pic={user.core.pic}
        />
        <UserDescription
            log={user.core.log}
            nick={user.core.nick}
            geo={user.core.geo}
            email={user.core.email}
        />
        <UserEngagement
        />
    </div>
  )
}