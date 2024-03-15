"use client"
import React from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import { gig } from '@/store/modules/libraries/Content/Gig'

interface ArtistGigIssueManagementDeskI{
    isPrimaryOutputHovered:boolean
    gigId:string
}

const ArtistGigIssueManagementDesk:React.FC<ArtistGigIssueManagementDeskI> = ({isPrimaryOutputHovered, gigId}) => {
    const [wrapperScope, animateWrapper] = useAnimate()
    const [upperHeaderScope, animateUpperHeader] = useAnimate()
    const [controlsScope, animateControls] = useAnimate()


  return (
    <motion.div
        key={`${gigId} gig  management desk wrapper`}
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
                    key={'gig management icon'}
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

export default ArtistGigIssueManagementDesk