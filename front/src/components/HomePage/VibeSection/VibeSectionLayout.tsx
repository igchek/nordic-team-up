import React, { useEffect, useState } from 'react'

import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { styleSheet } from '@/stylesGlobal/variables'
import MotionIcon from '@/Utils/MotionIcon'
import styles from '../common.module.scss'
import VibeSectionModality from './VibeSectionModality'
import VibeSectionArtist from './VibeSectionArtist'
import VibeSectionAudience from './VibeSectionAudience'
import VibeSectionFormat from './VibeSectionFormat'


interface VibeSectionLayout {
    modality?:'vibe'|'sync'|'gig'
    pic:string
    title:string
}

const VibeSectionLayout = ({modality, pic, title}:VibeSectionLayout) => {
    const [prefocus, setPrefocus] = useState(false)



    const [layout, animateLayout] = useAnimate()
    const [logoSocket, animateLogo] = useAnimate()

    useEffect(()=>{
        if(prefocus){
            animateLogo(logoSocket.current, {width:'100%'})
        }
        else{
            animateLogo(logoSocket.current, {width:'70%'})
        }
    }, [prefocus])

  return (
    <motion.div
        onClick={()=>{
            if(!prefocus){
                setPrefocus(true)
                animateLayout(layout.current, {height:'30vh'})
            }
            else{
                setPrefocus(false)
                animateLayout(layout.current, {height:'10vh'})
            }
        }}
        className={styles.layout}
        style={{backgroundColor:styleSheet.vibeSectionLayout}}
    >
        <motion.div
            // onMouseEnter={()=>{
            //     animateLayout(layout.current, {backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 1)`})
            // }}
            // onMouseLeave={()=>{
            //     animateLayout(layout.current, {backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 0)`})
            // }}
            ref={layout}
            // style={{backgroundColor:'#EAEAEA'}}
            className={styles.blockLayout}
        >
            <motion.div
                layout
                className={styles.pic}
            >
                <motion.div
                    layout
                    ref={logoSocket}
                    className={styles.picSocket}
                >
                    <MotionIcon
                        pic={pic}
                        focus={false}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                layout
                className={styles.contents}
            >
                <motion.div
                    layout
                    className={styles.titleSegment}
                >
                    <div
                    className={styles.title}
                    >
                    {title}
                    </div>
                </motion.div>
                <AnimatePresence mode='sync'>
                {prefocus &&
                    <VibeSectionArtist
                        logo='https://utfs.io/f/edd98ef1-0ecd-4ab0-9581-6d75b1ba5d9b-bcrezi.jpg'
                        title='Doge'
                    />
                }
                {
                    prefocus &&
                    <motion.div
                      layout
                      key={`${Math.random()*1000} vibrations and format`}
                      initial={{height:'0', opacity:0}}
                      animate={{height:'10vh', opacity:1}}
                      exit={{height:'0', opacity:0}}
                      className={styles.vibrations_format}
                    >
                        <AnimatePresence mode='wait'>
                            <VibeSectionAudience
                                total={500}
                                local={{
                                    quantity:150,
                                    geoPic:'https://utfs.io/f/edd98ef1-0ecd-4ab0-9581-6d75b1ba5d9b-bcrezi.jpg'
                                }}
                            />
                            <VibeSectionFormat
                                format='Commotion'
                            />
                        </AnimatePresence>
                        
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
            {
                modality &&
               <VibeSectionModality
                    modality='vibe'
               />
                
            }
        </motion.div>
    </motion.div>
  )
}

export default VibeSectionLayout