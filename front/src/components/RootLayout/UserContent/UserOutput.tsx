"use client"

import React from 'react'
import styles from './styles.module.scss'

import {  useState, useEffect } from 'react'
import ContentOutput from './VibeOutput/ContentOutput'
import CommunityOutput from './CommunityOutput/CommunityOutput'
import {useSession} from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setInvolvedVibes } from '@/store/involvedContent'
import { motion } from 'framer-motion'

interface UserOutputI {
}





const UserOutput:React.FC<UserOutputI> =   () => {

    const vibes = useAppSelector(({involvedContent})=>involvedContent.vibes)
    const focusVibe = useAppSelector(({focus})=>focus.focusVibe)
    const session = useSession()
    if(session.data?.userData){
        
        


    



    return (
        <motion.div 
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:'30%'}}
            exit={{opacity:0, width:0}}
        className={styles.InvolvementWrapper}>
            {focusVibe?
                <>
                    <ContentOutput
                        vibes={vibes}
                        focus={focusVibe?true:false}
                        communityTarget={false}
                    />
                    <CommunityOutput
                        
                    />
                </>

            :
               
                    <ContentOutput
                        vibes={vibes}
                        focus={focusVibe?true:false}
                        communityTarget={false}
                    />
                
            }
        </motion.div>

  )
    }
    else return null
    
}

export default UserOutput