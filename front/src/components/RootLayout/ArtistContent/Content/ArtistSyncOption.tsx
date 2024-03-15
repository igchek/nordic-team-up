"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ArtistSyncOptionI{
    id:string
    logo:string
    vibeTitle:string
    venueTitle:string
    updates:[]
    optionQuantity:number
}

const ArtistSyncOption:React.FC<ArtistSyncOptionI> = ({id, logo, vibeTitle, venueTitle, updates, optionQuantity}) => {
        const [isHovered, setHover] = useState(false)
    return (
    <motion.div
    key={`${vibeTitle} wrapper`}
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
            {venueTitle}
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
                    key={`${venueTitle} updates`}
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
                    optionQuantity!==0 &&
                    <motion.div
                        key={`${venueTitle} option quantity`}
                        initial={{x:15, opacity:0}}
                        animate={{x:0, opacity:1}}
                        exit={{x:15, opacity:0}}
                        className={styles.indicatorSocket}
                    >
                        {optionQuantity}
                    </motion.div>
                }
            </AnimatePresence>
            
        </motion.div>
    </motion.div>

</motion.div>
  )
}

export default ArtistSyncOption