import React from 'react'
import styles from '../common.module.scss'
import { motion } from 'framer-motion'

interface VibeSectionFormatI{
  format:string
}

const VibeSectionFormat = ({format}:VibeSectionFormatI) => {
  return (
    <motion.div
        key={`${Math.random()*1000}, format`}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className={styles.formatSection}
    >
      <motion.div
        className={styles.formatWrapper}
      >
        {format}
      </motion.div>
    </motion.div>
  )
}

export default VibeSectionFormat