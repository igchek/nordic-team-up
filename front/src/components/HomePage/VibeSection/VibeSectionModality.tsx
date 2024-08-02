import React, { useState } from 'react'
import styles from '../common.module.scss'
import { motion } from 'framer-motion'
import VibeMSVG from '@/components/common/svg/VibeMSVG'
import SyncMSVG from '@/components/common/svg/SyncMSVG'
import GigMSVG from '@/components/common/svg/GigMSVG'

interface VibeSectionModality {
    modality:'vibe'|'sync'|'gig'
}

const VibeSectionModality = ({modality}:VibeSectionModality) => {
    const [hover, setHover] = useState(false)
  return (
    <motion.div
        className={styles.modalitySegment}
    >
        <motion.div
            onMouseEnter={()=>{
                setHover(true)
            }}
            onMouseLeave={()=>{
                setHover(false)
            }}
            className={styles.modalitySocket}
        >
            {
                modality==='vibe' &&
                <VibeMSVG
                    focus={hover}
                />
            }
            {
                modality==='sync' &&
                <SyncMSVG
                    focus={hover}
                />
            }
            {
                modality==='gig' &&
                <GigMSVG
                    focus={hover}
                />
            }
        </motion.div>
    </motion.div>
  )
}

export default VibeSectionModality