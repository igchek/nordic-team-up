import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'


interface MediaReelI{
    urlControl?:React.Dispatch<React.SetStateAction<string[]>>
    fileControl?:React.Dispatch<React.SetStateAction<{
        url:string,
        file:File
    }[]>>
    UrlUpload:string[]
    FileUpload?:{
        url:string,
        file:File
    }[]
    isUploadable:boolean
}


const MediaReel:React.FC<MediaReelI> = ({urlControl, fileControl, UrlUpload, FileUpload, isUploadable}) => {
    
    const [focusedMediaScope, animateFocusedMedia] = useAnimate()
    const [focusedMediaControlsScope, animateFocusedMediaControls] = useAnimate()
    

    const [focusedMediaUnit, setMediaUnitFocused] = useState('')
    const [focusDeleteControlHover, setFocusDeleteControlHover] = useState(false)
    const [focusedMediaFrontControlHover, setFocusedMediaFrontControlHover ] = useState(false)
    const submitFile = (e:ChangeEvent<HTMLInputElement>)=>{
        if(urlControl && fileControl && FileUpload){
            e.preventDefault()
        const fileReader = new FileReader
        if(e.target.files){
            const reelFile = e.target.files[0]
            fileReader.onloadend = async (event)=>{
                const reelUrl = event.target?.result?.toString()||''
                urlControl([...UrlUpload, reelUrl])
                fileControl([...FileUpload, {
                    url:reelUrl,
                    file:reelFile
                }])
               
            }
            fileReader.readAsDataURL(reelFile)
        }
        }
        

    }

    useEffect(()=>{
        if(UrlUpload.length){
            setMediaUnitFocused(UrlUpload[UrlUpload.length-1])
            animateFocusedMedia(focusedMediaScope.current, {backgroundImage:`url(${UrlUpload[UrlUpload.length-1]})`})
        }
    }, [UrlUpload])
    return (
    <motion.div
        key={'media reel uploader'}
        initial={{opacity:0, height:0}}
        animate={{opacity:1, height:'45vh'}}
        exit={{opacity:0, height:0}}
        className={styles.mediaReelUploader}
    >
        <motion.div
            ref={focusedMediaScope}
            onMouseEnter={()=>{
                if(UrlUpload.length)
                animateFocusedMediaControls(focusedMediaControlsScope.current, {opacity:1})
            }}
            onMouseLeave={()=>{
                if(UrlUpload.length)
                animateFocusedMediaControls(focusedMediaControlsScope.current, {opacity:0})
            }}
            style={UrlUpload.length?{justifyContent:'flex-end'}:{justifyContent:'center'}}
            className={styles.mainFocusWrapper}
        >
            <AnimatePresence>
                {
                    !UrlUpload.length && isUploadable &&
                    <motion.div
                        key={'focus reel upload'}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={styles.descriptionSegment}
                    >
                        <motion.label
                        
                            className={styles.label}
                        >
                            <SvgSelector
                                tier='standart'
                                value='photo'
                                focus={false}
                            />
                            <input onChange={submitFile} className={styles.input} type="file" />
                        </motion.label>
                        <motion.div
                            initial={{opacity:0, height:0}}
                            whileFocus={{opacity:1, height:'20%'}}
                            className={styles.description}
                        >
                            Upload photo
                        </motion.div>
                    </motion.div>
                }
                                    {/* upload controls */}
                {
                    focusedMediaUnit && isUploadable &&
                    <motion.div
                        ref={focusedMediaControlsScope}
                        key={'reel focus controls'}
                        initial={{opacity:0}}
                        exit={{opacity:0}}
                        className={styles.controls}
                    >
                        <AnimatePresence>
                        <motion.div
                            key={'delete control'}
                            onMouseEnter={()=>{
                                setFocusDeleteControlHover(true)
                            }}
                            onMouseLeave={()=>{
                                setFocusDeleteControlHover(false)
                            }}
                            onClick={()=>{
                                if(isUploadable && FileUpload && fileControl && urlControl){
                                    urlControl([...UrlUpload.filter((url)=>url===focusedMediaUnit)])
                                    fileControl([...FileUpload.filter((fileObj=>fileObj.url===focusedMediaUnit))])
                                }   
                            }}

                            style={focusDeleteControlHover?{backgroundColor:'rgba(136,134,134, 1)'}:{backgroundColor:'rgba(136,134,134, 0)'}}
                            className={styles.control}
                        >
                            <motion.div
                                style={focusDeleteControlHover?{backgroundColor:`rgba(199,203,214, 1 )`}:{backgroundColor:`rgba(199,203,214, 0.5 )`}}
                                className={styles.icon}
                            >
                                <motion.div
                                    className={styles.iconSocket}
                                >
                                    <SvgSelector
                                    tier='standart'
                                    value='networking'
                                    focus={focusDeleteControlHover}
                                    />
                                </motion.div>
                                
                            </motion.div>
                            <AnimatePresence>
                                {
                                    focusDeleteControlHover &&
                                    <motion.div
                                        key={'delete description'}
                                        initial={{opacity:0, width:0}}
                                        animate={{opacity:1, width:'5vw'}}
                                        exit={{opacity:0, width:0}}
                                        className={styles.description}
                                    >
                                        Delete
                                    </motion.div>
                                }
                            </AnimatePresence>
                            
                        </motion.div>
                        {
                            focusedMediaUnit!==UrlUpload[0] &&
                            <motion.div
                                key={'front set control'}
                                onMouseEnter={()=>{
                                    setFocusedMediaFrontControlHover(true)
                                }}
                                onMouseLeave={()=>{
                                    setFocusedMediaFrontControlHover(false)
                                }}
                                onClick={()=>{
                                    if(FileUpload && fileControl && urlControl){
                                        fileControl([FileUpload.find((fileObj)=>{fileObj.url===focusedMediaUnit})!, ...FileUpload.filter((fileObj)=>fileObj.url===focusedMediaUnit)])
                                        urlControl([UrlUpload.find((url)=>url===focusedMediaUnit)!, ...UrlUpload.filter((url)=>url===focusedMediaUnit)])
                                    }
                                }}
                                style={focusDeleteControlHover?{backgroundColor:'rgba(136,134,134, 1)'}:{backgroundColor:'rgba(136,134,134, 0)'}}
                                className={styles.control}
                                >
                                    <motion.div
                                        style={focusDeleteControlHover?{backgroundColor:`rgba(199,203,214, 1 )`}:{backgroundColor:`rgba(199,203,214, 0.5 )`}}
                                        className={styles.icon}
                                    >
                                        <motion.div
                                            className={styles.iconSocket}
                                        >
                                            <SvgSelector
                                                tier='standart'
                                                value='networking'
                                                focus={focusedMediaFrontControlHover}
                                            />
                                        </motion.div>
                                    </motion.div>
                                    <AnimatePresence>
                                        {
                                            focusedMediaFrontControlHover &&
                                            <motion.div
                                                key={'front set description'}
                                                initial={{opacity:0, width:0}}
                                                animate={{opacity:1, width:'10vw'}}
                                                exit={{opacity:0, width:0}}
                                                className={styles.description}
                                            >
                                                Set for front
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                
                            </motion.div>
                        }
                        </AnimatePresence>
                        

                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>

                        {/* reel output */}
        <AnimatePresence>
            {
                UrlUpload.length  &&
                <motion.div
                    key={'media uploader output'}
                    initial={{opacity:0, height:0}}
                    animate={{opacity:1, height:'7vh'}}
                    exit={{opacity:0, height:0}}
                    className={styles.reelSegment}
                >
                        {/* reel input */}
                    <AnimatePresence>
                        {
                            isUploadable && 
                            <motion.div
                                key={'file input'}
                                initial={{opacity:0, width:0}}
                                animate={{opacity:1, width:'100%'}}
                                exit={{opacity:0, width:0}}
                                
                                className={styles.inputSegment}
                            >
                                <motion.label
                                
                                    className={styles.pushLabel}
                                > 
                                <SvgSelector
                                    tier='standart'
                                    value='plus'
                                    focus={false}
                                />
                                <input className={styles.input} onChange={submitFile} type="file" />

                                </motion.label>
                            </motion.div>
                        }
                    
                    </AnimatePresence>
                    
                        {/* reel output */}
                    <motion.div
                        className={styles.output}
                    >
                        <AnimatePresence>
                            {UrlUpload.map((url)=>{
                                return(
                                <motion.div
                                    key={`${Math.random()*10} upload unit`}
                                    
                                    onClick={()=>{
                                        if(focusedMediaUnit && focusedMediaUnit!==url){
                                            setMediaUnitFocused(url)
                                            animateFocusedMedia(focusedMediaScope.current, {backgroundImage:`url(${url})`})
                                        }
                                    }}

                                    initial={{opacity:0, x:-15}}
                                    animate={{opacity:1, x:0}}
                                    exit={{opacity:0, x:-15}}
                                    
                                    style={{backgroundImage:`url(${url})`}}
                                    className={styles.outputUnit}
                                />
                                    )
                            })}
                            </AnimatePresence>
                        
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
        
    </motion.div>
  )
}

export default MediaReel