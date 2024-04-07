'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { motion, useAnimate } from 'framer-motion'

interface BinarySwitcherI{
    control:React.Dispatch<React.SetStateAction<boolean>>
    state:boolean
}

const BinarySwitcher:React.FC<BinarySwitcherI> = ({control, state}) => {
    
    const [switcherState, setSwitcherState] = useState(state)
    const [extrusionScope, animateExtrusion] = useAnimate()

    

    return (
    <motion.div
        key={`${Math.random()*100}`}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={()=>{
            animateExtrusion(extrusionScope.current, {width:'auto'}).then(()=>{
                control(true)
            })
        }}
    className={styles.binarySwitcher}>
        <motion.div
            ref={extrusionScope}
            onClick={(e:React.MouseEvent<HTMLElement>)=>{
                e.stopPropagation()
                animateExtrusion(extrusionScope.current, {width:'100%'}).then(()=>{
                    control(false)
                })
            }}
            style={switcherState?{width:'100%'}:{width:'auto'}}
            className={styles.extrusion}
        >
            <motion.div

            className={styles.scroller}
            />
        </motion.div>
        
    </motion.div>
  )
}

export default BinarySwitcher
