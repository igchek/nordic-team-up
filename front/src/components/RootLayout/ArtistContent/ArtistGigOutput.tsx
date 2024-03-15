"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppSelector } from '@/hooks'
import { gigDigest } from '@/store/subAccounts'
import ArtistGig from './Content/ArtistGig'

const ArtistGigOutput = () => {
    const [isPrimaryOutputHovered, setPrimaryOutputHover] = useState(false)
    const [isSecondaryOutputHovered, setSecondaryOutputHover] = useState(false)
    const [isSecondaryOutputSet, setSecondaryOutput] = useState(false)
    
    const gigs = useAppSelector(({subAccounts})=>subAccounts.artist?.gigs)

    return (
    <motion.div
        key={'outputWrapper'}

        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}

        className={styles.outputWrapper}
    >
        <AnimatePresence>
            <motion.div
                className={styles.primaryOutput}
            >
                {gigs && gigs.length===0 &&
                    <div
                        className={styles.outputPlaceholder}
                    >
                        No gigs deployed
                    </div>
                }
                {gigs &&
                    gigs.map((unit:gigDigest)=>{
                        return(<ArtistGig
                            id={unit.id}
                            logo={unit.base.vibe.core.media.promoLogo}
                            primaryTitle={unit.base.vibe.core.contentTitle}
                            secondaryTitle={unit.deployment.venue.title}
                            audience={unit.deployment.audience}
                        />)
                    })
                }
            </motion.div>
            {
                isSecondaryOutputSet &&
                <motion.div
                    className={styles.secondaryOutput}
                >

                </motion.div>
            }
        </AnimatePresence>

    </motion.div>
  )
}

export default ArtistGigOutput