import React from 'react'
import styles from './content.module.scss'
import SvgSelector from '@/Utils/SvgSelector'

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
            <img className={styles.img} src={`src/assets/community/logos/${communityLogo}.jpg`} alt="cLogo" />
        </div>
        <div className={styles.titleSegment}>
            {communityTitle}
        </div>
        <div className={styles.pushSegment}>
            {
                push?
                <div className={styles.pushSocket}>
                    <SvgSelector
                        value={`${push}`}
                        tier='standart'
                        focus={focus}
                    />
                </div>
                
                :
                null
            }
        </div>

    </div>
  )
}

export default CommunutyUnit