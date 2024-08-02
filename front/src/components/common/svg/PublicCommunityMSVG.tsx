import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const PublicCommunityMSVG:React.FC<MSVG> = ({ focus}) => {



  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >
        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1615 14.0312L43.9368 14.1482L54.7231 33.0647L43.734 51.8641L21.9587 51.7471L11.1725 32.8306L22.1615 14.0312Z" stroke="url(#paint0_linear_821_10180)" stroke-width="4"/>
            <defs>
            <linearGradient id="paint0_linear_821_10180" x1="45.1022" y1="12.1545" x2="20.7933" y2="53.7408" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DBC44D"/>
            <stop offset="0.372391" stop-color="#AAE05C"/>
            <stop offset="0.710946" stop-color="#63D7CF"/>
            <stop offset="1" stop-color="#A449A5"/>
            </linearGradient>
            </defs>
        </svg>

    </motion.div>
  )
}

export default PublicCommunityMSVG