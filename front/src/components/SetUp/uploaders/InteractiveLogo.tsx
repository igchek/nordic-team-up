'use client'

import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

export interface InteractiveLogoI{
    controls?:{
        fileControl:React.Dispatch<React.SetStateAction<File[]>>
        urlControl:React.Dispatch<React.SetStateAction<string>>
        file:File[]
    }
    url:string|null
}

const InteractiveLogo:React.FC<InteractiveLogoI> = ({controls, url}) => {
    const [isPlusHovered, setPlusHover] = useState(false)
    const [isSwapHovered, setSwapHover] = useState(false)

    const submitFile = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const fileReader = new FileReader
        if(e.target.files){
            const logoFile = e.target.files[0]

            fileReader.onloadend= async(event)=>{
                controls?.fileControl([logoFile])
                const logoUrl = event.target?.result?.toString()||''
                controls?.urlControl(logoUrl)
            }
            fileReader.readAsDataURL(logoFile)
        }
    }

  if(controls)
    return(
        <motion.div
            
            style={url?{backgroundImage:`url(${url})`}:{}}
            className={styles.LogoUploader}
        >
            {
                !url &&
                <motion.label
                    onMouseEnter={()=>{
                        setPlusHover(true)
                    }}
                    onMouseLeave={()=>{
                        setPlusHover(false)
                    }}
                    className={styles.inputLabel}
                >
                    <SvgSelector
                        tier='standart'
                        value='plus'
                        focus={isPlusHovered}
                    />
                    <input className={styles.input} onChange={submitFile} type='file'/>
                </motion.label>
            }
            {
                url &&
                <motion.div
                    whileHover={{backdropFilter:'blur(15px)'}}
                    className={styles.swapWrapper}
                >
                    <motion.label
                    
                    onMouseEnter={()=>{
                        setSwapHover(true)
                    }}
                    onMouseLeave={()=>{
                        setSwapHover(false)
                    }}
                    className={styles.inputLabel}
                     >
                    <SvgSelector
                        tier='standart'
                        value='swap'
                        focus={isSwapHovered}
                    />
                    <input className={styles.input} onChange={submitFile} type='file'/>
                    </motion.label>
                </motion.div>
                
            }
        </motion.div>
    )
    else 
    return(
        <motion.div
            style={{backgroundImage:`url(${url})`}}
            className={styles.LogoUploader}
        />
        )
}

export default InteractiveLogo