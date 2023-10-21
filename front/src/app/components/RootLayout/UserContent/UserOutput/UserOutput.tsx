import React from 'react'
import styles from './common.module.scss'
import { NavBurger } from './NavBurger'
import CommunityToping from './CommunityToping'
import CommunityOutputSegment from './CommunityOutputSegment'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useEffect, useState } from 'react'
import { setInvolvedMocks } from '@/store/involvedContent'
import { motion } from 'framer-motion'

interface UserOutputI {
    communityTarget:boolean
    specificSearch:boolean
}

// essentialy UserOutput is a root layout navigation feature . 
// Probably should implement global content exploration via it much like youtube side bar

const UserOutput:React.FC<UserOutputI> = ({communityTarget, specificSearch}) => {
    const dispatch = useAppDispatch()
    const involvedContent = useAppSelector(({involvedContent})=>involvedContent.content)
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
        <motion.div className={styles.layeredOutput}> 
            {!isVibeSelected?
                <div className={styles.ContentOutput}>
                <NavBurger
                    focus={false}
                    communityTarget={false}
                />
                {/* content create push */}
                {/* maped all vibes user is pluged into */}
            
                </div>
            :
            <div className={styles.ContentOutput}>
                <NavBurgerger
                    focus={false}
                    communityTarget={false}
                />
                {/* content create push */}
                {/* maped all vibes user is pluged into */}
        
            </div>
                <div className={styles.CommunityOutputSegment}>
                    <CommunityToping
                        logo={'logo'}
                        contentTitle={'Def Title'}
                        modality={'vibe'}
                    />
                    <div className={styles.CommunityOutput}>
                        <CommunityOutputSegment
                            segmentType='public'
                            selection={false}                       
                        />
                        <CommunityOutputSegment
                            segmentType='local'
                            selection={false}                       
                        />
                        {/* best to map a selector state correspondendt 
                        to community contents of a selected vibe */}
                    </div>
                </div>
                    } 
        </motion.div>
  )
}

export default UserOutput