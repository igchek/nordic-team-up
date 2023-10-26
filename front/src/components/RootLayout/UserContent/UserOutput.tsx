"use client"

import React from 'react'
import styles from './styls.module.scss'
import { NavBurger } from './VibeOutput/NavBurger'
import CommunityToping from './CommunityOutput/CommunityToping'
import CommunityOutputSegment from './CommunityOutput/CommunityOutputSegment'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useEffect, useState } from 'react'
import { setInvolvedMocks } from '@/store/involvedContent'
import { motion } from 'framer-motion'
import ContentOutput from './VibeOutput/ContentOutput'
import CommunityOutput from './CommunityOutput/CommunityOutput'

interface UserOutputI {
    communityTarget:boolean
    specificSearch:boolean
}

// essentialy UserOutput is a root layout navigation feature . 
// Probably should implement global content exploration via it much like youtube side bar

const UserOutput:React.FC<UserOutputI> = ({communityTarget, specificSearch}) => {
    const dispatch = useAppDispatch()
    const involvedMocks = useAppSelector(({involvedContent})=>involvedContent.mockContent)

    const [isVibeSelected, setVibeSelction] = useState(false)

    useEffect(()=>{
        dispatch(setInvolvedMocks(involvedMocks))
    }, [])

    if (communityTarget){
    return(
        <motion.div className={styles.userOutput}>
            {/* maped all chats user has ever posted in  */}
        </motion.div>
    )
  }
  else
    return (
        <div className={styles.rootWrapper}>
            {isVibeSelected?
                <div  className={styles.wrapper}>
                    <ContentOutput
                        focus={isVibeSelected}
                        communityTarget={communityTarget}
                    />
                    <CommunityOutput
                        
                    />
                </div>

            :
                <div className={styles.wrapper}>
                    <ContentOutput
                        focus={isVibeSelected}
                        communityTarget={communityTarget}
                    />
                </div>
            }
        </div>

  )
}

export default UserOutput