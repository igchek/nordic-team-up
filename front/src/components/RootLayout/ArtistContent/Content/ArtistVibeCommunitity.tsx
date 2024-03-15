"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface ArtistVibeCommunitityI {
    id:string
    primaryTitle:string
    logo:string
    secondaryTitle?:string
    pushes:[]
    audience:number
}

const ArtistVibeCommunitity:React.FC<ArtistVibeCommunitityI> = ({id, primaryTitle, logo, secondaryTitle, pushes, audience}) => {
  return (
    <motion.div
    key={`${primaryTitle} wrapper`}
    initial={{x:15, opacity:0}}
    animate={{x:0, opacity:1}}
    exit={{x:15, opacity:0}}
    className={styles.unitWrapper}
>
    <motion.div
        style={{backgroundImage:`url(${logo})`}}
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
            {primaryTitle}
        </motion.div>
        {
            secondaryTitle &&
            <motion.div
            className={styles.secondaryTitle}
            >
                {secondaryTitle}
            </motion.div>
        }
        

    </motion.div>
    <motion.div
        className={styles.indicators}
    >
        <motion.div
            className={styles.updateWrapper}
        >
            <AnimatePresence>
            {
                pushes &&
                <motion.div
                    key={`${primaryTitle} pushes`}
                    initial={{opacity:0, y:-15}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-15}}
                className={styles.updateSocket}
                >
                    
                </motion.div>
            }
            </AnimatePresence>
            
        </motion.div>
        <motion.div
            className={styles.indicatorWrapper}
        >
            <AnimatePresence>
                {
                    audience!==0 &&
                    <motion.div
                        key={`${primaryTitle} audience`}
                        initial={{x:15, opacity:0}}
                        animate={{x:0, opacity:1}}
                        exit={{x:15, opacity:0}}
                        className={styles.indicatorSocket}
                    >
                        {audience}
                    </motion.div>
                }
            </AnimatePresence>
            
        </motion.div>
    </motion.div>

</motion.div>
  )
}

export default ArtistVibeCommunitity