"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ArtistGigI{
    id:string
    logo:string
    primaryTitle:string
    secondaryTitle:string
    issues?:[]
    audience:number
}

const ArtistGig:React.FC<ArtistGigI> = ({id, logo, primaryTitle, secondaryTitle, issues, audience}) => {
  return (
    <motion.div
        key={`${id}`}
        initial={{x:-5, opacity:0}}
        animate={{x:-5, opacity:0}}
        exit={{x:-5, opacity:0}}
    className={styles.unitWrapper}
    >
    <motion.div
        className={styles.logoWrapper}
    >
        <motion.div
            className={styles.logo}
            style={{backgroundImage:`url(${logo})`}}
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
                issues &&
                <motion.div
                    key={`${primaryTitle} issues`}
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

export default ArtistGig