"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ArtistSyncOptionManagementDeskI{
    syncId:string
    isPrimaryOutputHovered:boolean
}

const ArtistSyncOptionManagementDesk:React.FC<ArtistSyncOptionManagementDeskI> = ({syncId, isPrimaryOutputHovered}) => {
    const [wrapperScope, animateWrapper] = useAnimate()
    const [upperHeaderScope, animateUpperHeader] = useAnimate()
    const [controlsScope, animateControls] = useAnimate()

    return (
    <motion.div
        key={`${syncId} vibe community management desk wrapper`}
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'100%'}}
        exit={{opacity:0, width:0}}
        ref={wrapperScope}
        className={styles.managementDeskWrapper}
    >
        <motion.div
            ref={upperHeaderScope}
            className={styles.upperHeader}
        >
            Community
        </motion.div>
        <motion.div
            className={styles.placeHolder}
        >
            <AnimatePresence>
            {
                isPrimaryOutputHovered &&
                <motion.div
                    key={'community management icon'}
                    className={styles.iconSocket}
                >
                    <SvgSelector
                        tier='standart'
                        value='networking'
                        focus={isPrimaryOutputHovered}
                    />
                </motion.div>

            }
            </AnimatePresence>
        </motion.div>
        <motion.div
            ref={controlsScope}
            className={styles.controls}
        >
            {/* here be controls */}
        </motion.div>
    </motion.div>
  )
}

export default ArtistSyncOptionManagementDesk