import React, { useState } from 'react'
import styles from '../common.module.scss'
import {motion} from 'framer-motion'
import MotionIcon from '@/Utils/MotionIcon'

interface VibeSectionArtist {
    logo:string
    title:string
}

const VibeSectionArtist = ({logo, title}:VibeSectionArtist) => {
    // const [iconHover, setIconHover] = useState(false)
  return (
    <motion.div
        layout
        key={`${Math.random()*1000} vibrations and format`}
        initial={{height:'0', opacity:0}}
        animate={{height:'10vh', opacity:1}}
        exit={{height:'0', opacity:0}}
        className={styles.artist}
    >
        <div
            className={styles.logoSegment}
        >
            <div
                // onMouseEnter={(e)=>{
                //     e.stopPropagation()
                //     setIconHover(true)
                // }}
                // onMouseLeave={(e)=>{
                //     e.stopPropagation()
                //     setIconHover(false)
                // }}
                className={styles.logoSocket}
            >
                <MotionIcon
                    focus={false}
                    pic={logo}
                />
            </div>
        </div>
        <div
            className={styles.titleSegment}
        >
            <div
                className={styles.title}
            >
                {title}
            </div>
        </div>
    </motion.div>
  )
}

export default VibeSectionArtist