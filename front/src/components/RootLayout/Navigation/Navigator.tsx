"use client"
import React from 'react'

import { useAppSelector } from '@/hooks'
import { useSession } from 'next-auth/react'
import UserOutput from '../UserContent/UserOutput'
import ArtistsContent from '../ArtistContent/ArtistContent'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './styles.module.scss'




const ContentNavigator = () => {
    const session = useSession()
    const focus = useAppSelector(({user})=>user.focusSubAccount)
    
    if(session.data?.userData)
    return (
    <motion.div
        key={'navigator'}
        initial={{width:0, opacity:0}}
        animate={{width:'auto', opacity:1}}
        exit={{width:0, opacity:0}}
        className={styles.navigator}
    >
        <AnimatePresence>
            {
                !focus &&
                <UserOutput/>
            }
            {
                focus?.type==='artist' &&
                <ArtistsContent/>
            }
        </AnimatePresence>
        
    </motion.div>
  )
  
}

export default ContentNavigator