"use client"
import React from 'react'
import styles from './content.module.scss'
import {motion} from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ContentI{
    id:string
    poster:string
    contentTitle:string
    authorTitle:string
    modality:string
    audience:number
    focus:Boolean
    communityFocus:Boolean

}

const Content:React.FC<ContentI> = ({id, poster, contentTitle, authorTitle, modality, focus, audience, communityFocus}) => {
  if (communityFocus){
    return(
        <div className={styles.content}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${poster}.jpg`} alt="poster" />
            </div>
        </div>)
  }
  else
    return(
        <motion.div className={styles.content}>
            <motion.div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${poster}.jpg`} alt="poster" />
            </motion.div>
        <motion.div className={styles.titles}>
            <div className={styles.contentTitle}>
                {contentTitle}
            </div>
            <div className={styles.artistTitle}>
                {authorTitle}
            </div>
        </motion.div>
        <div className={styles.contentData}>
            <div className={styles.modalityWrapper}>
                <div className={styles.modalitySocket}>
                    <SvgSelector
                        value={modality}
                        focus={focus}
                        tier='normal'
                    />
                </div>
            </div>
            <div className={styles.audienceWrapper}>
                <div className={styles.audienceSocket}>
                    {audience}
                </div>
            </div>
        </div>
    </motion.div>
    )
    
}



export default Content