import React, { useEffect, useState } from 'react'
import VibeSectionContents from './VibeSectionContents'
import VibeMSVG from '@/components/common/svg/VibeMSVG'
import SyncMSVG from '@/components/common/svg/SyncMSVG'
import GigMSVG from '@/components/common/svg/GigMSVG'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { styleSheet } from '@/stylesGlobal/variables'
import MotionIcon from '@/Utils/MotionIcon'
import styles from '../common.module.scss'


interface VibeSectionLayout {
    modality?:'vibe'|'sync'|'gig'
    pic:string
}

const VibeSectionLayout = ({modality, pic}:VibeSectionLayout) => {
    const [prefocus, setPrefocus] = useState(false)
    const [modalityHover, setModalityHover] = useState(false)


    const [modalitySocket, animateModalitySocket] = useAnimate()
    const [layout, animateLayout] = useAnimate()

    useEffect(()=>{
        if(prefocus){
            animateLayout(layout.current, {backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 1)`})
        }
        else{
            animateLayout(layout.current, {backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 0)`})
        }
    }, [prefocus])

  return (
    <motion.div
        ref={layout}
        className={styles.layout}
        style={{backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 0)`}}
    >
            <div
                className={styles.pic}
            >
                <div
                    className={styles.picSocket}
                >
                    <MotionIcon
                        pic={pic}
                        focus={false}
                    />
                </div>
            </div>
            <VibeSectionContents/>
            <AnimatePresence
                mode='wait'
            >
            {
                modality &&
                <motion.div
                    key={`${Math.random()*1000} modality Section`}
                    initial={{width:0}}
                    animate={{width:'15%'}}
                    exit={{width:0}}
                >
                    <AnimatePresence
                        mode='wait'
                    >
                    {   
                        modality &&
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                        key={`${Math.random()*1000} modality Socket`}
                        ref={modalitySocket}
                        onMouseEnter={()=>{
                            setModalityHover(true)
                        }}
                        onMouseLeave={()=>[
                            setModalityHover(false)
                        ]}
                    >
                        {
                            modality==='vibe' &&
                            <VibeMSVG
                                focus={modalityHover}
                            />
                        }
                        {
                            modality==='sync' &&
                            <SyncMSVG
                                focus={modalityHover}
                            />
                        }
                        {
                            modality==='gig' &&
                            <GigMSVG
                                focus={modalityHover}
                            />
                        }
                    </motion.div>
                    }
                    </AnimatePresence>
                    
                </motion.div>
                
            }
            </AnimatePresence>
    </motion.div>
  )
}

export default VibeSectionLayout