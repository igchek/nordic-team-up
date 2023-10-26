"use client"
import React from 'react'
import styles from './content.module.scss'
import {motion} from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface HostI{
    id:string
    logo:string
    hostTitle:string
    profileTitle:string
    focus:Boolean
    modality:string
    communityFocus?:Boolean

}

const Host:React.FC<HostI> = ({id, logo, hostTitle, profileTitle, modality, focus, communityFocus}) => {
  if (communityFocus){
    return(
        <div className={styles.host}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${logo}.jpg`} alt="logo" />
            </div>
        </div>)
  }
  else
    return(
        <motion.div className={styles.host}>
            <motion.div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${logo}.jpg`} alt="logo" />
            </motion.div>
            <motion.div className={styles.titles}>
                <div className={styles.hostTitle}>
                    {hostTitle}
                </div>
                <div className={styles.profileTitle}>
                    {profileTitle}
                </div>
            </motion.div>
            <div className={styles.contentData}>
                <div className={styles.iconWrapper}>
                    <div className={styles.iconSocket}>
                        <SvgSelector
                            value={modality}
                            focus={focus}
                            tier='normal'
                        />
                    </div>
                </div>
            </div>
    </motion.div>
    )
    
}



export default Host