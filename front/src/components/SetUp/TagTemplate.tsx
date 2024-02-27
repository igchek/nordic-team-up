"use client"
import styles from './styles.module.scss'


import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface TagTemplateI{
    value:string
    setArray:React.Dispatch<React.SetStateAction<string[]>>
    array:string[]

}

const TagTemplate:React.FC<TagTemplateI> = ({ value, setArray, array}) => {



    const [inputValue, setInputValue] = useState(value)
    const [isDeletionFocused, setDeletionFocus] = useState(false)




    useEffect(()=>{
        console.log('input value is', inputValue)
    },[])
    return (
    <motion.div onMouseLeave={()=>{setDeletionFocus(false)}} onMouseEnter={()=>{setDeletionFocus(true)}} className={styles.tagTemplate}>
        
        <div  className={styles.outputSegment}>
            <input className={styles.tagOutput}
            
            
            onChange={(e)=>{
            setInputValue(e.target.value)
            let tags = [...array]
            tags.forEach((t)=>{
                if(array.indexOf(value)===tags.indexOf(t)){
                    t=inputValue
                }
            })
            setArray([...tags])

        }} value={inputValue} type="text" />
        </div>
        <AnimatePresence> 
        {isDeletionFocused && 
            <motion.div 
                initial={{width:0, opacity:0}}
                animate={{width:'5vw', opacity:0.5}}
                exit={{width:0, opacity:0}}
                whileHover={{opacity:1}}
            className={styles.deleteSegment}>
                <div onClick={()=>{
                    let tags = [...array]
                    tags.splice(array.indexOf(value), 1)
                    setArray([...tags])
                }}  className={styles.deleteSocket}>
                <SvgSelector
                    tier='standart'
                    value='delete'
                    focus={false}
                />
                </div>
            </motion.div>
            
        }
        </AnimatePresence>
    </motion.div>
  )
}

export default TagTemplate