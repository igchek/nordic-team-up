"use client"

import React, { InputHTMLAttributes, useEffect, useState } from 'react' 
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import HeaderUploader from './uploaders/HeaderUploader'
import MediaReel from './uploaders/MediaReel'
import VibeCommunitySetUp from './VibeSetUp/VibeCommunitySetUp'

const VibeSetUp = () => {

    const [setUpSection, setSetUpSection] = useState<'content'|'community'>('content')


    const [isDescriptionFocused, setDescriptionFocus] = useState(false)
    const [isMediaUploaderFocused, setMediaUploaderFocus] = useState(false)


            // animation controls
    const [titleInputScope, animateTitleInput] = useAnimate()
    const [vibeSetUpScope, animateVibeSetUp] = useAnimate()
    const [communitySetUpScope, animateCommunitySetUp] = useAnimate()

            // content control state


    const [contentHeaderFile, setContentHeaderFile] = useState<File[]>([])
    const [contentHeaderUrl, setContentHeaderUrl] = useState<string[]>([])

    const [contentTitle, setContentTitle] = useState('Set title')
    const [contentDescription, setContentDescription] = useState('Describe your vibe')


    const [contentMediaFiles, setContentMediaFiles] = useState<{
        url:string,
        file:File
    }[]>([])
    const [contentMediaUrls, setContentMediaUrls] = useState<string[]>([])



            // community inputs
    const [communities, setCommunities] = useState<{
        id:number
        logo:{
            url:string
            file:File[]
        }
        type:'public'|'private'|'target'
        title:string
        settings:{
            geoDistribution:boolean
            chat:boolean
            syncRotation:boolean
            externalMediaUpload:boolean
        }
    }[]>([])





    async function formSubmit(e:any){
        e.preventDefault()
        try {
            
        } catch (error:any) {
            throw new Error(`crashed posting a vibe:${error.message}`)
        }
    }

 

  return (
    <motion.form
        key={'vibe set up'}
        

        onSubmit={formSubmit}
        className={styles.vibeSetUp}
    >



        
                
        <motion.div
            className={styles.controls}
        >
                    {/* content-community selector  */}
            <motion.div
            
                className={styles.setUpSelectorSegment}
            >
                <motion.div
                
                    className={styles.setUpSelector}
                >
                    <motion.div
                        onClick={(e:any)=>{
                            e.stopPropagation()
                            setSetUpSection('content')
                        }}
                        className={styles.selectorSegment}
                    >
                        <motion.div
                        
                            className={styles.selectorSocket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='vibe'
                                focus={setUpSection==='content'?true:false}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        onClick={(e:any)=>{
                            e.stopPropagation()
                            setSetUpSection('community')
                        }}
                        className={styles.selectorSegment}
                    >
                        <motion.div
                        
                            className={styles.selectorSocket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='networking'
                                focus={setUpSection==='community'?true:false}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>


                    {/* set up title */}
            <motion.div
            
                className={styles.titles}
            >
                {setUpSection==='content' &&
                    'Content Set Up'
                }
                {setUpSection==='community' &&
                    'Community Set Up'
                }
            </motion.div>
            <motion.div
            
                className={styles.submitSegment}
            >
                                                                                                          
            </motion.div>
        </motion.div>
        <motion.div className={styles.setUp}>

        
        
                <AnimatePresence>
                        {/* content set up */}
                {
                    setUpSection==='content' &&
                <motion.div
                    ref={vibeSetUpScope}
                    key={'content set up'}
                    transition={{type:'just'}}
                    initial={{opacity:0, width:0}}
                    animate={{opacity:1, width:'100%'}}
                    exit={{opacity:0, width:0}}
                    className={styles.contentSetUp}
                >
                    <HeaderUploader
                        urlControl={setContentHeaderUrl}
                        fileControl={setContentHeaderFile}
                        FileUpload={contentHeaderFile}
                        UrlUpload={contentHeaderUrl}
                        descriptionTitle='Upload header'
                    />
                    <motion.div
                    
                        className={styles.titleInput}
                    >
                        <motion.input
                            ref={titleInputScope}
                            whileFocus={{opacity:1}}
                        
                        onMouseEnter={()=>{
                            if(contentTitle==='Set title'|| !contentTitle){
                                animateTitleInput(titleInputScope.current, {opacity:0.75})
                            }
                            
                        }}
                        onMouseLeave={()=>{
                            if(contentTitle!=='Set title'){
                                animateTitleInput(titleInputScope.current, {opacity:1})
                            }
                        }}
                        onClick={()=>{
                            if(contentTitle==='Set title'){
                                setContentTitle('')
                            }
                            
                        }}
                        onChange={(e)=>{
                            setContentTitle(e.target.value)
                        }}
                        onBlur={()=>{
                            if(!contentTitle){
                                setContentTitle('Set title')
                            }
                            else animateTitleInput(titleInputScope.current, {opacity:1})
                        }}
                            className={styles.input}
                        value={contentTitle} type="text" />
                    </motion.div>

                    <motion.div
                    
                        className={styles.descriptionSegment}
                    >
                        <motion.div
                        
                            className={styles.descriptionSelector}
                        >
                            <motion.div
                            
                                className={styles.segment}
                            >
                                <motion.div
                                    onClick={()=>{
                                        setDescriptionFocus(!isDescriptionFocused)}}
                                    className={styles.icon}
                                >
                                    <motion.div
                                        className={styles.iconSocket}
                                    >
                                        <SvgSelector
                                        tier='standart'
                                        focus={isDescriptionFocused}
                                        // TLDR:upload svg icon for formData
                                        value='vibe'
                                    />
                                    </motion.div>
                                    
                                    
                                </motion.div>
                                <motion.div
                                    className={styles.description}
                                >
                                    Set description
                                </motion.div>
                            </motion.div>
                            <motion.div
                            
                                className={styles.segment}
                            >
                                <motion.div
                                    onClick={()=>{
                                        setMediaUploaderFocus(!isMediaUploaderFocused)}}
                                    className={styles.icon}
                                >
                                    <motion.div
                                        className={styles.iconSocket}
                                    >
                                        <SvgSelector
                                        tier='standart'
                                        focus={isMediaUploaderFocused}
                                        value='vibe'
                                        />
                                    </motion.div>
                                    
                                    
                                </motion.div>
                                <motion.div
                                    className={styles.description}
                                >
                                    Set media
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <AnimatePresence>
                            {
                                isDescriptionFocused && 
                                <motion.div
                                    key={'content description'}
                                    initial={{opacity:0, height:0}}
                                    animate={{opacity:1, height:'fit-content'}}
                                    exit={{opacity:0, height:0}}
                                    className={styles.descriptionOutput}
                                >
                                    <motion.input
                                        style={contentDescription==='Describe your vibe'?{textAlign:'center', color:'rgba(136, 134, 134, 0.5)'}:{textAlign:'center', color:'rgba(0, 0, 0, 1)'}}
                                        onClick={()=>{
                                            if(contentDescription==='Describe your vibe'){
                                                setContentDescription('')
                                            }
                                        }}
                                        onBlur={()=>{
                                            if(!contentDescription){
                                                setContentDescription('Describe your vibe')
                                            }
                                        }}
                                        className={styles.input}
                                        value={contentDescription}
                                        onChange={(e)=>setContentDescription(e.target.value)}
                                    type="text" />
                                </motion.div>
                            }
                            {
                                isMediaUploaderFocused &&
                                <MediaReel
                                    isUploadable={true}
                                    UrlUpload={contentMediaUrls}
                                    FileUpload={contentMediaFiles}
                                    fileControl={setContentMediaFiles}
                                    urlControl={setContentMediaUrls}
                                />
                            }
                        </AnimatePresence>
                    </motion.div>

                </motion.div>
                }
            














                        {/* community set up */}
                
                {
                    setUpSection==='community' &&
                    <motion.div
                    ref={communitySetUpScope}
                    key={'community set up'}
                    transition={{type:'just'}}
                    initial={{opacity:0, x:'100vw', width:0}}
                    animate={{opacity:1, x:0, width:'100%'}}
                    exit={{opacity:0, x:'100vw', width:0}}
                    className={styles.contentSetUp}
                    >
                        <VibeCommunitySetUp
                            outputControl={setCommunities}
                        />
                    </motion.div>
                }
            </AnimatePresence>
                
        </motion.div>
      
                    
       




    </motion.form>
  )
}

export default VibeSetUp