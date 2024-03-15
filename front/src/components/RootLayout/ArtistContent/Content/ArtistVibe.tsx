"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'


interface ArtistVibeI {
    id:string
    logo:string
    title:string
    subtitle?:string
    resonations:number
    updates?:string

}

const ArtistVibe:React.FC<ArtistVibeI> = ({id, logo, title, subtitle, resonations, updates}) => {
  return (
    <motion.div
        key={`${title} wrapper`}
            initial={{x:-15, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-15, opacity:0}}
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
                {title}
            </motion.div>
            {
                subtitle &&
                <motion.div
                className={styles.secondaryTitle}
                >
                    {subtitle}
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
                    updates &&
                    <motion.div
                        key={`${title} updates`}
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
                            key={`${title} resonations`}
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

export default ArtistVibe