"use client"
import React from 'react'
import styles from './top.module.scss'
import Profile from './Profile'
import Authentication from './Authentication'
import {useSession} from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import { SubAccountShort, parseUserEngagementData } from '@/store/user'


interface TopI {
  subAccounts?:{
    artist?:SubAccountShort
    venue?:SubAccountShort
  }
}




const Top:React.FC<TopI> =  () => {
  const session = useSession()

  return (
    <div className={styles.topWrapper}>
      <AnimatePresence mode='sync'>
        {
            session.data?.userData?
            
            <Profile/>
            :
            <Authentication/>
        }
      </AnimatePresence>
    </div>
  )
}

export default Top