import React from 'react'
import styles from './common.module.scss'
import { vibe } from '@/store/modules/libraries/Content/Vibe'
import { sync } from '@/store/modules/libraries/Content/Sync'
import { gig } from '@/store/modules/libraries/Content/Gig'
import DashTemplate from './DashTemplate'

interface DashRowI {
    vibes:(vibe|sync|gig)[]
}

const DashRow:React.FC<DashRowI> = ({vibes}) => {
  return (
    <div className={styles.RowWrapper}>
        <div className={styles.rowLeftSegment}>
            <DashTemplate
                contentTitle={vibes[0].title}
                modality={vibes[0].modality}
                poster={vibes[0].promoLogo}
                author={vibes[0].author}
                authorLogo={vibes[0].authorLogo}
                description={'description be here'}
                tags={['def1', 'def1']}
                audience={vibes[0].totalAudience}
                localAudience={vibes[0].totalAudience}
                geo={'MSC'}
            />
        </div>
        <div className={styles.rowRightSegment}>
            <DashTemplate
                    contentTitle={vibes[1].title}
                    modality={vibes[1].modality}
                    poster={vibes[1].promoLogo}
                    author={vibes[1].author}
                    authorLogo={vibes[1].authorLogo}
                    description={'description be here'}
                    tags={['def1', 'def1']}
                    audience={vibes[1].totalAudience}
                    localAudience={vibes[1].totalAudience}
                    geo={'MSC'}
                />
        </div>
    </div>
  )
}

export default DashRow