"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ArtistGigIssueUnitI {
    id:string
    title:string
    immediacyStatus:'standart'|'emergent'|'critical'
    pic:string
    pushes:[]
    emergencyTimer?:Date
    cancelationProbability:boolean
}


const ArtistGigIssueUnit:React.FC<ArtistGigIssueUnitI> = ({id, title, immediacyStatus, pic, pushes, emergencyTimer, cancelationProbability}) => {
    const [isHovered, setHover] = useState(false)

            // emergency timer

    

  return (
    <motion.div
    key={`${title} wrapper`}
    initial={{x:15, opacity:0}}
    animate={{x:0, opacity:1}}
    exit={{x:15, opacity:0}}
    className={styles.unitWrapper}
>
    <motion.div
        style={{backgroundImage:`url(${pic})`}}
        className={styles.logoWrapper}
    >
        <motion.div
            className={styles.logo}
        />
    </motion.div>
    <motion.div
        className={styles.titles}
    >
        <motion.div
            className={styles.primaryTitle}
        >
            {title}
        </motion.div>
        <motion.div
            className={styles.secondaryTitle}
        >
            {immediacyStatus}
        </motion.div>

        

    </motion.div>
    <motion.div
        className={styles.indicators}
    >
        <motion.div
            className={styles.updateWrapper}
        >
            <AnimatePresence>
            {
                pushes.length &&
                <motion.div
                    key={`${title} ${id} issue pushes`}
                    initial={{opacity:0, y:-15}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-15}}
                className={styles.updateSocket}
                >
                    <SvgSelector
                        tier='standart'
                        value='netrowking'
                        focus={true}
                    />
                </motion.div>
            }
            </AnimatePresence>
            
        </motion.div>
        <motion.div
            className={styles.indicatorWrapper}
        >
            
            <AnimatePresence>
                {
                    emergencyTimer &&
                    <motion.div
                        key={`${title} ${id} emergency timer`}
                        initial={{x:15, opacity:0}}
                        animate={{x:0, opacity:1}}
                        exit={{x:15, opacity:0}}
                        className={styles.indicatorSocket}
                    >
                        {Date.now()}
                    </motion.div>
                }
            </AnimatePresence>
            
        </motion.div>
    </motion.div>

</motion.div>
  )
}

export default ArtistGigIssueUnit