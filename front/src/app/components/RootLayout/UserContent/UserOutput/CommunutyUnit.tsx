import React from 'react'
import styles from './content.module.scss'
import SvgSelector from '@/app/Utils/SvgSelector'

interface CommunityUnitI {
    id:string
    communityLogo:string
    communityTitle:string
    communityType:string
    focus:boolean
    push:string|null
}
const CommunutyUnit:React.FC<CommunityUnitI> = ({id, communityLogo, communityTitle,focus, push}) => {
  return (
    <div className={styles.communityUnit}>
        <div className={styles.imgSegment}>
            <img src={`src/assets/community/logos/${communityLogo}.jpg`} alt="cLogo" />
        </div>
        <div className={styles.titleSegment}>
            {communityTitle}
        </div>
        <div className={styles.pushSegment}>
            {
                push?
                <SvgSelector
                    value={`${push}`}
                    tier='standart'
                    focus={focus}
                />
                :
                null
            }
        </div>

    </div>
  )
}

export default CommunutyUnit