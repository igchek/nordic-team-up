"use client"
import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'


interface HeaderUploaderI {
    urlControl:React.Dispatch<React.SetStateAction<string[]>>
    fileControl:React.Dispatch<React.SetStateAction<File[]>>
    UrlUpload:string[]
    FileUpload:File[]
    descriptionTitle:string
}


const HeaderUploader:React.FC<HeaderUploaderI> = ({UrlUpload, FileUpload, urlControl, fileControl}) => {
    
    const [socketMaskScope, animateSocketMask] = useAnimate()


    const [isPlaceholderHovered, setPlaceholderHover] = useState(false)
    const [isUploadPending, setUploadPending] = useState(false)

    function submitFile(e:ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        const fileReader = new FileReader
        if(e.target.files){
            const headerFile = e.target.files[0]

            fileReader.onloadstart =  ()=>{
                setUploadPending(true)
            }
            fileReader.onloadend = async (event)=>{
                fileControl([headerFile])
                const headerUrl = event.target?.result?.toString()||''
                urlControl([headerUrl])
            }
        }
        
    }
    return (
    <motion.div
        className={styles.headerUploader}
    >
        {
            !UrlUpload.length && !isUploadPending &&
            <motion.div
            
                className={styles.placeholder}
            >
                <motion.div
                
                    className={styles.socketSegment}
                >
                    <motion.div
                        ref={socketMaskScope}
                        className={styles.socketMask}
                    >
                        <motion.label
                        
                            className={styles.socket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='photo'
                                focus={false}
                            />
                            <input type="file"
                                className={styles.input}
                                onChange={submitFile}
                            />
                        </motion.label>
                    </motion.div>
                </motion.div>
                <AnimatePresence>

                
                {
                    isPlaceholderHovered &&
                    <motion.div
                
                    className={styles.description}
                    > 

                    </motion.div>
                }
                </AnimatePresence>
                
            </motion.div>
        }
        {
            !UrlUpload.length && isUploadPending &&
            <motion.div
            
                className={styles.pendingPlaceholder}
            >

            </motion.div>
        }
        
    </motion.div>
  )
}

export default HeaderUploader