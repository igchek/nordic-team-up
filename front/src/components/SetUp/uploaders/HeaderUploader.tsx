"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
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
    const [controlsScope, animateControls] = useAnimate()
    const [wrapperSocope, animateWrapper] = useAnimate()


    const [isPlaceholderHovered, setPlaceholderHover] = useState(false)
    const [isUploadPending, setUploadPending] = useState(false)

   

    const  submitFile = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        const fileReader = new FileReader
        fileReader.onloadstart =  ()=>{
            setUploadPending(true)
        }
        if(e.target.files){
            const headerFile = e.target.files[0]

            // console.log('file is', headerFile)


            fileReader.onloadend =  async (event)=>{
                
                fileControl([headerFile])
                // console.log('file is', headerFile)
                const headerUrl = event.target?.result?.toString()||''
                // console.log('header url is', headerUrl)
                urlControl([headerUrl])
                setUploadPending(false)
                
            }
            fileReader.readAsDataURL(headerFile)
        }
        
    }
    return (
    <motion.div
        key={'header uploader'}
        ref={wrapperSocope}
        style={UrlUpload.length?{backgroundImage:`url(${UrlUpload[0]})`}:{}}
    onMouseEnter={()=>{
        if(UrlUpload.length){
            animateControls(controlsScope.current, {opacity:1})
        }
    }}
    onMouseLeave={()=>{
        if(UrlUpload.length){
            animateControls(controlsScope.current, {opacity:0})
        }
    }}
        className={styles.headerUploader}
    >
        <AnimatePresence>
        {
            !UrlUpload.length && !isUploadPending &&
            <motion.div
                key={'placeholder'}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                className={styles.placeholder}
                layout
            >
                <motion.div
                    onMouseEnter={()=>{
                        setPlaceholderHover(true)
                    }}
                    onMouseLeave={()=>{
                        setPlaceholderHover(false)
                    }}
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
                        key={'description'}
                        initial={{opacity:0, height:0}}
                        animate={{opacity:1, height:'5vh'}}
                        exit={{opacity:0, height:0}}
                    className={styles.description}
                    layout
                    > 
                        Upload header
                    </motion.div>
                }
                </AnimatePresence>
                
            </motion.div>
        }
        
        {
            !UrlUpload.length && isUploadPending &&
            <motion.div
                key={'pending'}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                className={styles.pendingPlaceholder}
            >
                Uploading photo...
            </motion.div>
        }
        {
            UrlUpload.length &&
            <motion.div
                key={'controls'}
                ref={controlsScope}
                className={styles.controls}
            >
                <motion.label
                
                className={styles.control}
                >
                    Reupload file
                    <input
                        className={styles.input}
                        type='file'
                        onChange={submitFile}
                    />
                </motion.label>
                <motion.div
                    onClick={()=>{
                        fileControl([])
                        urlControl([])
                    }}
                className={styles.control}
                >
                    Remove file
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
        
    </motion.div>
  )
}

export default React.memo(HeaderUploader)