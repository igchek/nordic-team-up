import React from 'react'
import styles from './common.module.scss'
import SvgSelector from '@/Utils/SvgSelector'

interface DashTemplateI {
    contentTitle:string
    modality:string
    poster:string
    author:string
    authorLogo:string
    description:string
    tags:string[]
    audience:number
    localAudience:number
    geo:string

}

const DashTemplate:React.FC<DashTemplateI> = ({contentTitle, modality, poster, author, authorLogo, description, tags, audience, localAudience, geo}) => {
  return (
    <div className={styles.templateWrapper}>
        <div style={{backgroundImage:`src/assets/PromoLogo/${poster}.jpg`}} className={styles.templateHeader}>
            <div className={styles.bottomLine}>
                <div className={styles.titleSegment}>                
                    <div className={styles.titleSocket}>
                        {contentTitle}
                    </div>
                </div>
                <div className={styles.modalitySegment}>
                    <div className={styles.modalitySocket}>
                        <SvgSelector
                            value={modality}
                            tier='standart'
                            focus={true}
                        />
                    </div>
                    </div>
            </div>
        </div>
        <div className={styles.templateBody}>
            <div className={styles.authorWrapper}>
                {author}
                <div className={styles.logoWrapper}>
                    <img src={`src/assets/ArtistLogo/${authorLogo}.jpg`} alt="logo" />
                </div>
            </div>
            <div className={styles.descriptionWrapper}>
                {description}
            </div>
            <div className={styles.tagWrapper}>
                {tags.map(tag=>
                    <div className={styles.tagSocket}>
                        {tag}
                    </div>
                    )}
            </div>
            <div className={styles.audienceSegment}>
                <div className={styles.totalAudienceSegment}>
                    <div className={styles.audienceSocket}>
                        {audience}
                    </div>
                    <div className={styles.audienceDescriptor}>
                        pluged in
                    </div>
                </div>
                <div className={styles.localAudienceSegment}>
                <div className={styles.audienceSocket}>
                        {localAudience}
                    </div>
                    <div className={styles.audienceDescriptor}>
                        in {`${geo}`}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashTemplate