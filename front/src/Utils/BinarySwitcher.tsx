'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

interface BinarySwitcherI{
    control:React.Dispatch<React.SetStateAction<boolean>>
    state:boolean
}

const BinarySwitcher:React.FC<BinarySwitcherI> = ({control, state}) => {
    
    // const [switcherState, setSwitcherState] = useState(state)
    // const [extrusionScope, animateExtrusion] = useAnimate()

    useEffect(()=>{
        console.log('state check', state)
    }, [state])

    return (
    <motion.div
        onClick={()=>{
            // e.stopPropagation()
            if(state){
                control(!state)
            }
            else control(false)
        }}
        className={styles.binarySwitcher}
    >
        <motion.div
            
            initial={state===true?{width:'auto'}:{width:'100%'}}
            animate={state===true?{width:'100%'}:{width:'auto'}}
            className={styles.extrusion}
        >
            <div
                className={styles.scroller}
            />

        </motion.div>
    </motion.div>
  )
}

export default BinarySwitcher
