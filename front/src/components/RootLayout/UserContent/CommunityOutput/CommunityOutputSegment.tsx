"use client"

import React from 'react'
import styles from './common.module.scss'
import SvgSelector from '@/Utils/SvgSelector'
import {motion} from 'framer-motion'



interface CommunityOutputSegmentI {
    segmentType:string
    selection:boolean
}

const CommunityOutputSegment:React.FC<CommunityOutputSegmentI> = ({segmentType,selection}) => {
  return (
    <motion.div className={styles.segmentWrapper}>
        <div className={styles.segmentTopping}>
            <div className={styles.pointerWrapper}>
                <div className={styles.pointerSocket}>
                    <SvgSelector
                        value='ponter-horizontal'
                        tier='standart'
                        focus={selection}
                    />
                </div>
            </div>
            <div className={styles.iconWrapper}>
                <div className={styles.iconSocket}>
                    <SvgSelector
                        value={segmentType}
                        tier='standart'
                        focus={selection}
                    />
                </div>
            </div>
            <div className={styles.titleSegment}>
                {segmentType}
            </div>
        </div>
        <motion.div className={styles.segmentOutput}>
            {/* communities with correspondent type maped here */}
        </motion.div>
    </motion.div>
  )
}

export default CommunityOutputSegment