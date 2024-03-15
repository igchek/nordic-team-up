"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'


interface ArtistSyncI {
    id:string
    logo:string
    primaryTitle:string
    secondaryTitle?:string
    updates:[]
    resonations:number
}

const ArtistSync:React.FC<ArtistSyncI> = ({id, logo, primaryTitle, secondaryTitle, updates, resonations}) => {
  return (
    <motion.div
        key={`${primaryTitle} wrapper`}
        initial={{x:-10, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-10, opacity:0}}
    className={styles.unitWrapper}
    >
    <motion.div
        className={styles.logoWrapper}
    >
        <motion.div
            style={{backgroundImage:`url(${logo})`}}
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
        <motion.div
            className={styles.secondaryTitle}
        >
            {secondaryTitle}
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
                updates.length &&
                <motion.div
                    key={`${primaryTitle} updates`}
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
                    resonations!==0 &&
                    <motion.div
                        key={`${primaryTitle} resonations`}
                        initial={{x:15, opacity:0}}
                        animate={{x:0, opacity:1}}
                        exit={{x:15, opacity:0}}
                        className={styles.indicatorSocket}
                    >
                        {resonations}
                    </motion.div>
                }
            </AnimatePresence>
            
        </motion.div>
    </motion.div>
</motion.div>
  )
}

export default ArtistSync