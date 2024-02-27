"use client"

import SvgSelector from '@/Utils/SvgSelector'
import styles from './styles.module.scss'
import { motion, useAnimate } from 'framer-motion'
import {signOut} from 'next-auth/react'
import {useRouter} from 'next/navigation'

import React from 'react'

const UserProfileTop = () => {
    const router = useRouter()
  return (
    <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:15}}
    className={styles.wrapper}
    >
        <motion.div 
            whileHover={{backgroundColor:'rgba(136,134,134, 0.5)'}}
            onClick={()=>{
                signOut()
                router.push('/')
            }}
        className={styles.logOutSegment}>
            <div className={styles.iconSegment}>
                <motion.div
                className={styles.iconSocket}
                >
                    <SvgSelector
                        tier='standart'
                        value='logIn'
                        focus={true}
                    />
                </motion.div>
            </div>
            <div className={styles.description}>
                Log Out
            </div>
        </motion.div>
        <div className={styles.space}/>


    </motion.div>
  )
}

export default UserProfileTop