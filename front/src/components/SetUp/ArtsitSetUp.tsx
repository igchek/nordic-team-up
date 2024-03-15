"use client"
import styles from './styles.module.scss'

// import Image from 'next/image'
import React, {useState, useEffect, ChangeEvent} from 'react'
import {useSession} from 'next-auth/react'
import SvgSelector from '@/Utils/SvgSelector'
import { motion, AnimatePresence, useAnimate } from 'framer-motion'
import TagTemplate from './TagTemplate'
import {useRouter} from 'next/navigation'
import { useUploadThing } from '@/Utils/uploadhelpers'
import { useAppDispatch } from '@/hooks'
import { dispatchArtist } from '@/store/user'
// import { utapi } from '@/Utils/server/uploadthing'
// import { uploadLogo } from '@/lib/actions/content/files'
// import ImageUploader from './uploaders/ImageUploader'



interface ArtsitSetUpI {

}


const ArtistSetUp:React.FC<ArtsitSetUpI> = () =>{

    
    const router = useRouter()
    const session = useSession()
    const {startUpload} = useUploadThing('media')
    const dispatch = useAppDispatch()




                    // animation scopes
    const [logoSegmentScope, animateLogoSegment] = useAnimate()
    const [logoSocketScope, animateLogoSocket] = useAnimate()
    const [headerScope, animateHeader] = useAnimate()
    const [headerSetUpScope, animateHeaderSetUp] = useAnimate()
    




                    // state controls
    const [headerFile, setHeaderFile] = useState<File[]>([])
    const [logoFile, setLogoFile] = useState<File[]>([])
    const [title, setTitle] = useState('')
    const [subTitle,setSubTitle] = useState('')
    const [isDesciptionSet, setDescriptionPush] = useState(false)
    // const [isSubtitleSet, setSubtitlePush] = useState(false)
    const [description, setDescription] = useState('')
    const [isTaglineSet, setTagline] = useState(false)
    const [tags, setTags] = useState<string[]>([])
    const [isTagInputSet, setTagInputState] = useState(false)
    const [tagInput, setTagInput] = useState('')
    const [submittanceState, setSubmittanceState] = useState(false)
    const [logoUrl, setLogoUrl] = useState<string[]>([])
    const [headerUrl, setHeaderUrl] = useState<string[]>([])



                // effects
    useEffect(()=>{
        if(title && logoFile.length && subTitle && headerFile.length){
            setSubmittanceState(true)
            console.log('submittance is', submittanceState)
        }else {
            setSubmittanceState(false)
            console.log('submittance is', submittanceState)
        }

    },[title, logoFile, subTitle, headerFile])




    useEffect(()=>{
        if(headerUrl.length){
            animateHeader(headerScope.current, {backgroundImage:`url(${headerUrl[0]})`})
        }
        else{
            animateHeader(headerScope.current, {background:'white'})
        }
    },[headerUrl])

    useEffect(()=>{
        if(headerFile.length){
            animateHeaderSetUp(headerSetUpScope.current, {background:'rgba(255, 255, 255, 0)'})
        }
        else{
            animateHeaderSetUp(headerSetUpScope.current, {background:'rgba(136, 134, 134, 1)'})
        }
    }, [headerFile])


            // form submit
        async function onSubmit(e:any){
            e.preventDefault()
        try {

            const logoUploadRes = await startUpload(logoFile!)
            const headerUploadRes = await startUpload(headerFile!)
            if(headerUploadRes && headerUploadRes[0].url && logoUploadRes && logoUploadRes[0].url){
                let logo = logoUploadRes[0].url
                let header = headerUploadRes[0].url
                let id = [session.data?.userData._id]
                await fetch('http://localhost:3000/api/profiles/artist',{
                    method:'POST', 
                    cache:'no-cache',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({id, title, subTitle, description, tags, header, logo})
                } ).then((res)=>res.json()).then((res)=>{
                    dispatch(dispatchArtist({_id:res._id, title:res.title, image:res.image}))
                    console.log('artist dispatched', res)
                    router.push(`/Profile/User/${session.data?.userData._id}`)
                })

            }
        } catch (error:any) {
            throw new Error(`Crashed submitting an artist:${error.message}`)
        }
    }





                    // file handlers
    const handleHeader = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const fileReader = new FileReader()
        if(e.target.files){
            const file = e.target.files[0]
            
            fileReader.onload = async (event) =>{
                setHeaderFile([file])
              const imgDataUrl = event.target?.result?.toString()||''
              setHeaderUrl([imgDataUrl])
            }
            fileReader.readAsDataURL(file)
          }
    }


    const handleLogo = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        const fileReader = new FileReader()
        if(e.target.files){
            const logoFileUpload = e.target.files[0]

            fileReader.onload =  async (event) =>{
                setLogoFile([...logoFile, logoFileUpload])
              const imgDataUrl = event.target?.result?.toString()||''
              setLogoUrl([imgDataUrl])

              
              
            }
            fileReader.readAsDataURL(logoFileUpload)
            
          }
    }

    return(

            <motion.form
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onSubmit={onSubmit} className={styles.artistForm} >
                <motion.div
                    initial={{opacity:0, y:15}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:15}}
                className={styles.formControls}>
                    <div className={styles.back}>
                        <motion.div 
                            onClick={()=>{router.push(`/Profile/User/${session.data?.userData._id}`)}}
                            whileHover={{opacity:1}}
                        className={styles.socket}>
                            <SvgSelector
                                value='back'
                                tier='standart'
                                focus={false}
                            />
                        </motion.div>
                    </div>
                    <div className={styles.space}/>
                    <div className={styles.controls}>
                        <AnimatePresence>
                                {submittanceState &&
                                
                                    <motion.div
                                        initial={{opacity:0, x:-15}}
                                        animate={{opacity:1, x:0}}
                                        exit={{opacity:0, x:-15}}
                                        transition={{duration:1}}
                                    className={styles.submitControl}>
                                        Create artist account
                                        <motion.button
                                            type='submit'
                                        whileHover={{opacity:1}} className={styles.socket}>
                                            <SvgSelector
                                                tier='standart'
                                                value='done'
                                                focus={true}
                                            />
                                        </motion.button>
                                    </motion.div>
                                
                                }
                        </AnimatePresence>
                        
                    </div>
                    
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:-15}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:-15}}
                    whileHover={{height:'50vh'}}
                ref={headerScope}
                className={styles.header}>
                    <div className={styles.placeHolder}>
                    </div>
                    <motion.div
                        initial={{opacity:0}}
                        whileHover={{opacity:1}}
                    className={styles.headerSetUpSegment}
                        ref={headerSetUpScope}
                    >
                        <div className={styles.description}>
                            Upload header
                        </div>
                        <motion.label 
                            initial={{backgroundColor:'rgba(255, 255, 255,0)'}}
                            animate={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}
                            whileHover={{backgroundColor:'rgba(255, 255, 255, 1)'}}
                            style={{backgroundImage:`url(https://utfs.io/f/3d5da24e-5282-4a37-bbb2-8bf1fa7c156d-khqj7n.svg)`}}
                        className={styles.svgSocket}>
                            <input
                                onChange={handleHeader}
                            className={styles.headerInput} type="file" />
                        </motion.label>
                    </motion.div>
                    
                </motion.div>
                <div className={styles.body}>
                    <motion.div
                        ref={logoSegmentScope}
                    className={styles.logoSegment}>

                        <div className={styles.logoOutput}>
                                <motion.label 
                                    style={{backgroundImage:'url(https://utfs.io/f/e2f7fda8-e6cc-4451-af72-80f7305738a0-qxm3rt.jpg)'}}
                                    onMouseEnter={()=>{

                                        animateLogoSocket(logoSocketScope.current, {backgroundImage:"url(https://utfs.io/f/3d5da24e-5282-4a37-bbb2-8bf1fa7c156d-khqj7n.svg)"})
                                    }}
                                    onMouseLeave={()=>{
                                        if(!logoUrl.length){
                                            animateLogoSocket(logoSocketScope.current, {backgroundImage:"url(https://utfs.io/f/e2f7fda8-e6cc-4451-af72-80f7305738a0-qxm3rt.jpg)"})

                                        }
                                        else{
                                            animateLogoSocket(logoSocketScope.current, {backgroundImage:`url(${logoUrl[0]})`})

                                        }
                                    }}
                                className={styles.socket}
                                ref={logoSocketScope}
                                >
                                    
                                    
                                            <motion.input 
                                                onChange={handleLogo}
                                                type='file'
                                            className={styles.svg}/>
                                                
                                 
                                          
                                </motion.label>

                                
                        </div>
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                        className={styles.description}>
                            {logoFile.length?null:'Upload logo'}
                        </motion.div>
                      
                        {/* <ImageUploader
                            returnController={setLogoUrl}
                        /> */}
                    </motion.div>
                    <div className={styles.titleSegment}>
                        <input className={styles.input} onChange={(e)=>{setTitle(e.target.value)}} type="text"  placeholder='Artist title'/>
                    </div>
                    <AnimatePresence>
                    {title &&
                        <motion.div
                            initial={{y:-15, opacity:0, height:0}}
                            animate={{y:0, opacity:1, height:'5vh'}}
                            exit={{y:-15, opacity:0, height:0}}
                            transition={{duration:0.5}}
                        className={styles.subtitleSegment}>
                                    <div className={styles.description}>
                                        <div onClick={()=>{setDescriptionPush(!isDesciptionSet)}} className={styles.pushSocket}>
                                            <div className={styles.svgSocket}>
                                                <SvgSelector
                                                    tier='standart'
                                                    value='plus'
                                                    focus={isDesciptionSet?true:false}
                                                />                                  
                                            </div>
                                            
                                        </div>
                                        
                                        <div className={styles.push}>
                                            Set description
                                        </div>
                                    </div>
                                    <div className={styles.space}/>
                                    <div className={styles.inputSegment}>
                                        <input onChange={(e)=>{setSubTitle(e.target.value)}} placeholder='Set subtitle' className={styles.input} type="text" />
                                    </div>
                                
                        </motion.div>
                    }
                    </AnimatePresence>
                    <AnimatePresence>
                    {isDesciptionSet &&
                        <motion.div
                            initial={{height:0, opacity:0}}
                            animate={{height:'25vh', opacity:1}}
                            exit={{height:0, opacity:0}}
                        className={styles.descriptionSegment}>
                            <div className={styles.inputMask}>
                                <input className={styles.input} onChange={(e)=>{setDescription(e.target.value)}} value={description} type="text" placeholder='Set description'/>
                            </div>
                        </motion.div>
                     }
                    </AnimatePresence>
                     <div className={styles.tagSegment}>
                        <div className={styles.header}>
                            Set up tags
                            <div onClick={()=>{
                                setTagline(!isTaglineSet)
                            }} className={styles.iconSocket}>
                                <SvgSelector
                                    tier='standart'
                                    value='plus'
                                    focus={isTaglineSet?true:false}
                                />
                            </div>
                            
                        </div>
                        <AnimatePresence>
                        {isTaglineSet &&
                            <motion.div
                                initial={{height:0, opacity:0}}
                                animate={{height:'10vh', opacity:1}}
                                exit={{height:0, opacity:0}}
                            className={styles.tagLine}>
                                <div className={styles.plusSegment}>
                                    <div
                                        onClick={()=>{
                                            setTagInputState(!isTagInputSet)
                                        }}
                                    className={styles.plusSocket}>
                                        <SvgSelector
                                            tier='standart'
                                            value='plus'
                                            focus={isTagInputSet?true:false}
                                        />
                                    </div>
                                </div>
                                <AnimatePresence>
                                {isTagInputSet &&
                                    <motion.div
                                        initial={{x:-15, opacity:0}}
                                        animate={{x:0, opacity:1}}
                                        exit={{x:-15, opacity:0}}
                                        layout
                                    className={styles.inputSegment}>
                                        <input
                                            onChange={(e)=>{
                                                setTagInput(e.target.value)
                                            }}
                                            onKeyDown={(e)=>{
                                                
                                                if(e.key==='Enter'){
                                                    e.preventDefault()
                                                    let tagsSet = [...tags]
                                                    tagsSet.push(tagInput)
                                                setTags(tagsSet)
                                                setTagInputState(!isTagInputSet)
                                                setTagInput('')
                                                }
                                                
                                            }}
                                        className={styles.input} type="text" />
                                    </motion.div>
                                }
                                </AnimatePresence>
                                <motion.div layout className={styles.tagOutput}>
                                    {tags.map((tag)=>
                                        <TagTemplate
                                            value={tag}
                                            setArray={setTags}
                                            array={tags}
                                        />
                                    )}
                                </motion.div>
                                
                            </motion.div>
                        }
                        </AnimatePresence>
                     </div>
                </div>
            </motion.form>
    )
}

export default ArtistSetUp
  
