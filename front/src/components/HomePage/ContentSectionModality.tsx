'use client'

import React from 'react'
import styles from './common.module.scss'
import { motion } from 'framer-motion'

interface ContentSectionModalityI {
    spec?:{
        userGeo:string
        modality:'vibe'|'sync'|'gig'
    }
    
}

const ContentSectionModality = ({spec}:ContentSectionModalityI) => {
    if(spec){
        return (
            <motion.div
                className={styles.ContentSectionModality}
            >
                <motion.div
                    className={styles.modalityWrapper}
                >
        
                </motion.div>
            </motion.div>
          )
    }
    else{
        return(
            <motion.div
                className={styles.ContentSectionModality}
            >
                <motion.div
                    className={styles.modalityWrapper}
                >
        
                </motion.div>
            </motion.div>
        )
    }
  
}

export default ContentSectionModality