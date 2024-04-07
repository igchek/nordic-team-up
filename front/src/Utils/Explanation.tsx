'use clinet'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from './SvgSelector'

interface ExplanationI{
    marginPosition:'top'|'left'|'left'|'bottom'
    content:string
}

const Explanation:React.FC<ExplanationI> = ({marginPosition, content}) => {
    const [isFocused, setFocus] = useState(false)
  
    return (
    <div
        className={styles.explanation}
    >
        <AnimatePresence>
            <div
                onClick={()=>{
                    setFocus(!isFocused)
                }}
                className={styles.iconSocket}
            >
                <SvgSelector
                    tier='standart'
                    value=''
                    focus={isFocused}
                />
            </div>
                {
                    isFocused && marginPosition==='top' &&
                    <motion.div
                        key={`${Math.random()*100}`}
                        className={styles.contents}
                        style={{marginTop:20}}
                    >
                        {content}
                    </motion.div>
                }
            
        </AnimatePresence>
        
        
    </div>
  )
}

export default Explanation