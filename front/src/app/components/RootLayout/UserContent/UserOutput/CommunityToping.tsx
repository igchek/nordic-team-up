import React from 'react'
import styles from './common.module.scss'
import SvgSelector from '@/app/Utils/SvgSelector'

interface CommunityTopingI {
    logo:string
    contentTitle:string
    modality:string
}

const CommunityToping:React.FC<CommunityTopingI> = ({logo, contentTitle, modality}) => {
  return (
    <div style={{backgroundImage:`src/assets/PromoLogo/${logo}.jpg`}} className={styles.communityToppingWrapper}>
        <div className={styles.toppingContentWrapper}>
            <div className={styles.titleSegment}>
                <div className={styles.titleSocket}>
                    {contentTitle}
                </div>
            </div>
            <div className={styles.modalitySegment}>
                <div className={styles.modalitySocket}>
                    <SvgSelector
                        value={`${modality}`}
                        tier='standart'
                        focus={true}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityToping