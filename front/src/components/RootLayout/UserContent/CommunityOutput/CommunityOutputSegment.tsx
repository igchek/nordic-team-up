"use client"

import React from 'react'
import styles from './styles.module.scss'
import SvgSelector from '@/Utils/SvgSelector'
import {motion} from 'framer-motion'
import { communityCoreData } from '@/lib/actions/community/comunity.actions'
import CommunutyUnit from './CommunutyUnit'
import { useAppSelector } from '@/hooks'



interface CommunityOutputSegmentI {
    communities:communityCoreData[]
    segmentType:string
    selection:boolean
}

const CommunityOutputSegment:React.FC<CommunityOutputSegmentI> = ({communities, segmentType,selection}) => {
  const focusedCommunity = useAppSelector(({focus})=>{focus.focusCommunity})
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
            {communities.map((community)=>{
                return(
                    <CommunutyUnit
                        id={community._id as string}
                        vibeId={community.vibeId as string}
                        communityLogo={community.logo as string}
                        communityTitle={community.title as string}
                        communityType={community.type as string}
                        push={community.push?true:false}
                        
                    />
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default CommunityOutputSegment