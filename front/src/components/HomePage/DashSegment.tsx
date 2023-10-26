import React from 'react'
import styles from './common.module.scss'
import { vibe } from '@/store/modules/libraries/Content/Vibe'
import { sync } from '@/store/modules/libraries/Content/Sync'
import { gig } from '@/store/modules/libraries/Content/Gig'
import DashRow from './DashRow'

interface DashSegmentI {
    vibesCoupled:(vibe|sync|gig)[][]
}

const DashSegment:React.FC<DashSegmentI> = ({vibesCoupled}) => {
  return (
    <div className={styles.DashSegment}>
        {vibesCoupled.map(couple=>
        <DashRow
            vibes={couple}
        />)}
    </div>
  )
}

export default DashSegment