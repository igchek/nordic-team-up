"use client"
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

import React from 'react'
import ArtistContentSetUp from './ContentSetUp/ArtistContentSetUp'

interface ArtistProfileTopI{

}

const ArtistProfileTop:React.FC<ArtistProfileTopI> = ({}) => {
  return (
    <motion.div
      key={'artist profile top'}
      initial={{height:0, opacity:0}}
      animate={{height:'5.5vh', opacity:1}}
      exit={{height:0, opacity:0}}
      className={styles.wrapper}
    >
      <motion.div

        className={styles.setUpSegment}
      >
        <AnimatePresence>
          <ArtistContentSetUp/>
        </AnimatePresence>
      </motion.div>
      <motion.div

        className={styles.placeholder}
      >

      </motion.div>
    </motion.div>
  )
}

export default ArtistProfileTop