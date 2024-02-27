"use client"
import SvgSelector from '@/Utils/SvgSelector'
import styles from './styles.module.scss'
import {motion, AnimatePresence, animate} from 'framer-motion'
import React, {useState} from 'react'

export interface UserHeaderI{
    nick:string
    pic:string
    cover:string
}

const UserHeader:React.FC<UserHeaderI> = ({nick, pic, cover}) => {
    const [isImageHoveredOn, setImageHover] = useState(false)
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    className={styles.userHeader}>
        <motion.div
            initial={{opacity:0, y:-15}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-15}}
        className={styles.contentWrapper}>
            <motion.div
                onMouseEnter={()=>{setImageHover(true)}}
                onMouseLeave={()=>{setImageHover(false)}}
                initial={{opacity:0, x:-15}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-15}}
            className={styles.userDisplaySegment}>
                <motion.div className={styles.imageWrapper}>
                    <motion.div className={styles.gradientBorder}>
                        <motion.div
                            className={styles.avatar}
                            style={{backgroundImage:`url(${pic})`}}
                        />
                    </motion.div>

                    
                </motion.div>
                <AnimatePresence>
                {isImageHoveredOn &&
                    <motion.div
                    key={'upload segment'}
                    className={styles.imageUploadSegment}
                        initial={{width:0, opacity:0}}
                        animate={{width:75, opacity:1}}
                        exit={{width:0, opacity:0}}
                    >
                        <motion.div
                            className={styles.uploadSocket}
                            initial={{height:0, y:-10, opacity:0, backgroundColor:'rgba(136,134,134, 0)'}}
                            animate={{height:'75%', y:0, opacity:1, backgroundColor:'rgba(136,134,134, 0.5)'}}
                            exit={{height:0, y:-10, opacity:0, backgroundColor:'rgba(136,134,134, 0)'}}
                            whileHover={{backgroundColor:'rgba(136,134,134, 1)'}}
                        >
                            <motion.div className={styles.uploadIcon}>
                                <SvgSelector
                                    tier='standart'
                                    value='networking'
                                    focus={true}
                                />
                            </motion.div>

                        </motion.div>
                    </motion.div>
                }
                </AnimatePresence>
                <motion.div className={styles.nickWrapper}>
                    {nick}
                </motion.div>
            </motion.div>
            <motion.div className={styles.space}/>
            
        </motion.div> 
    </motion.div>
  )
}

export default UserHeader