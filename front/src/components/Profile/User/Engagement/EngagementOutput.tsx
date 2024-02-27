"use client"
import { SubAccountShort } from '@/store/user'
import EngagementInput from './EngagementInput'
import EngagementUnit from './EngagementUnit'
import styles from './styles.module.scss'
import {AnimatePresence, motion} from 'framer-motion'

import React from 'react'

interface EngagementOutputI {
    selector:string
    artists:SubAccountShort[]
    venues:SubAccountShort[]
    targetGroups:SubAccountShort[]
}

const EngagementOutput:React.FC<EngagementOutputI> = ({selector, artists, venues,
targetGroups}) => {
    if(selector==='artist')
    return (
        <motion.div 
            key={'output'}
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-15}}
        className={styles.engagementOutput}>
            <AnimatePresence>

            
            {artists.map((artist)=>
                <EngagementUnit
                    role='artist'
                    _id={artist._id}
                    title={artist.title}
                    pic={artist.image}
                />
            )}
            <EngagementInput
                role={'artist'}
            />
            </AnimatePresence>
        </motion.div>
        )
    else if(selector==='venue')
    return (
        <motion.div
            key={'output'}
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-15}}
        className={styles.engagementOutput}>
            <AnimatePresence>

            {venues.map((venue)=>
                <EngagementUnit
                    role='venue'
                    _id={venue._id}
                    title={venue.title}
                    pic={venue.image}
                />
            )}
            <EngagementInput
                role={'venue'}
            />
            </AnimatePresence>
        </motion.div>
        )
    else if(selector==='target')
    return (
        <motion.div
            key={'output'}
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-15}}
        className={styles.engagementOutput}>
            <AnimatePresence>

            
            {targetGroups.map((targetGroup)=>
                <EngagementUnit
                    role='target group'
                    _id={targetGroup._id}
                    title={targetGroup.title}
                    pic={targetGroup.image}
                />
            )}
            <EngagementInput
                role={'target'}
            />
            </AnimatePresence>
        </motion.div>
        )
}

export default EngagementOutput