import React, { SetStateAction, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import MotionIcon from '@/Utils/MotionIcon'
import CommunityTypeSelector from './CommunityTypeSelector'
import ParameterSet from '@/Utils/ParameterSet'
import VibeMSVG from '@/components/common/svg/VibeMSVG'
import CommunityParams from './CommunityParams'




export interface CommunityParams {
    localization:boolean
    internalModeration:boolean
    publicVisibility:boolean

    mediaUpload:boolean
    templateOffer:boolean
    chat:boolean
}

export interface CommunityShort{
    id:string
    pic:{
        url:string[]
        file:File[]
    }
    title:string
    type:'public'|'private'|'target'
    params:CommunityParams
}

interface CommunityIput{
    focusCommunity:CommunityShort|null
    communityOutputControl:React.Dispatch<SetStateAction<CommunityShort[]>>
    communityOutput:CommunityShort[]
}

const CommunityInput = ({focusCommunity, communityOutputControl, communityOutput}:CommunityIput) => {

        const [communityLogoFileInput, setCommunityLogoInput] = useState<File[]>(focusCommunity?focusCommunity.pic.file:[])
        const [communityLogoUrlInput, setCommunityLogoUrlInput] = useState<string[]>(focusCommunity?focusCommunity.pic.url:[])

    
        const [communityTypeInput, setCommunityTypeInput] = useState<undefined|'public'|'private'|'target'>(focusCommunity?focusCommunity.type:undefined)
        const [communityTitleInput, setCommunityTitleInput] = useState<string>(focusCommunity?focusCommunity.title:'Set community title')
        const [isUpdated, setUpdated] = useState(false)
    

        
    
    
    
        // params 
    
        const [localization, setLocalization] = useState(focusCommunity?focusCommunity.params.localization:(communityTypeInput==='private'||'target')?false:true)
        const [internalModeration, setInternalModeration] = useState(focusCommunity?focusCommunity.params.internalModeration:(communityTypeInput==='private'||'target')?true:false)
        const [publicVisibility, setPublicVisibility] = useState(focusCommunity?focusCommunity.params.publicVisibility:(communityTypeInput==='public')?true:false)
    
        const [mediaUpload, setMediaUpload] = useState(focusCommunity?focusCommunity.params.mediaUpload:(communityTypeInput==='private'||'target')?true:false)
        const [templateOffer, setTemplateOffer] = useState(focusCommunity?focusCommunity.params.templateOffer:(communityTypeInput==='target')?true:false)
        const [communityChat, setCommunityChat] =useState(focusCommunity?focusCommunity.params.chat:(communityTypeInput==='public')?false:true)
    
    

    
    
        useEffect(()=>{
            if((focusCommunity)&&
            (focusCommunity.params.localization!==localization)||
            (focusCommunity?.params.internalModeration!==internalModeration)||
            (focusCommunity?.params.chat!==communityChat)||
            (focusCommunity?.params.mediaUpload!==mediaUpload)||
            (focusCommunity?.params.templateOffer!==templateOffer)||
            (focusCommunity?.params.publicVisibility!==publicVisibility)
            ){
                setUpdated(true)
            }
            else setUpdated(false)
        }, [localization, internalModeration, publicVisibility, mediaUpload,templateOffer, communityChat])

        useEffect(()=>{
            if((focusCommunity)&&((communityTitleInput!==focusCommunity?.title)
                ||(communityLogoFileInput!==focusCommunity?.pic.file)
                ||(communityTypeInput!==focusCommunity.type))){
                    setUpdated(true)
                }
                else setUpdated(false)
        }, [communityTypeInput, communityTitleInput, communityLogoFileInput, communityLogoUrlInput])
    
      return (
        <div className={styles.communitySetUpInput}>
            <div
            className={styles.input}
            >
            <div
                    className={styles.logo}
                >
                    <div
                        className={styles.socket}
                    >
                        <MotionIcon
                            pic={communityLogoUrlInput!}
                            focus={false}
                            uploadControl={{
                                fileUpload:setCommunityLogoInput,
                                urlUpload:setCommunityLogoUrlInput
                            }}
                        />
                    </div>
                </div>
            <div
                className={styles.title}
            >
                <input
                    className={styles.input}
                    onClick={()=>{
                        if(communityTitleInput==='Set community title'){
                            setCommunityTitleInput('')
                        }
                    }}
                    onBlur={()=>{
                        if(!communityTitleInput){
                            setCommunityTitleInput('Set community title')
                        }
                    }}
                    onChange={(e)=>{
                        setCommunityTitleInput(e.currentTarget.value)
                    }}
                value={communityTitleInput} type="text" />
            </div>
            <CommunityTypeSelector
                type={communityTypeInput}
                control={setCommunityTypeInput}
            />
            <div
                className={styles.controls}
            >
                <div
                    className={styles.delete}
                >
                    <AnimatePresence>
                        {
                            focusCommunity &&
                            <motion.div
                            onClick={()=>{
                                communityOutputControl(communityOutput.splice(communityOutput.indexOf(focusCommunity), 1)!)
                            }}
                            className={styles.socket}
                            >
                                Delete
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                <div
                    className={styles.fulfill}
                >
                    <AnimatePresence>
                        {
                            isUpdated &&
                            <motion.div
                                onClick={()=>{
                                    if(focusCommunity && communityTypeInput && communityTitleInput && communityLogoFileInput && communityLogoFileInput){
                                        communityOutputControl(communityOutput.splice(communityOutput.indexOf(focusCommunity), 1, {
                                            id:focusCommunity.id,
                                            pic:{
                                                url:communityLogoUrlInput,
                                                file:communityLogoFileInput
                                            },
                                            title:communityTitleInput,
                                            type:communityTypeInput,
                                            params:{
                                                localization:localization,
                                                internalModeration:internalModeration,
                                                publicVisibility:publicVisibility,
                                            
                                                mediaUpload:mediaUpload,
                                                templateOffer:templateOffer,
                                                chat:communityChat
                                            }
    
                                        }))
                                    }
                                    setUpdated(false)
                                }}
                                className={styles.socket}
                            >
                                Update
                            </motion.div>
                            }

                        {
                            !focusCommunity &&
                            (communityLogoFileInput && communityLogoUrlInput && communityTitleInput && communityTypeInput)
                            &&
                            <motion.div
                                onClick={()=>{
                                    communityOutputControl([...communityOutput, {
                                        id:(Math.random()*1000).toString(),
                                        pic:{
                                            url:communityLogoUrlInput,
                                            file:communityLogoFileInput
                                        },
                                        title:communityTitleInput,
                                        type:communityTypeInput,
                                        params:{
                                            localization:localization,
                                            internalModeration:internalModeration,
                                            publicVisibility:publicVisibility,
                                        
                                            mediaUpload:mediaUpload,
                                            templateOffer:templateOffer,
                                            chat:communityChat
                                        }
                                    }])
                                }}
                                className={styles.socket}
                            >
                                Upload
                            </motion.div>
                        }
                        
                    </AnimatePresence>
                </div>
            </div>
            </div>
            <AnimatePresence initial={false} >
                {
                    (communityTypeInput || focusCommunity) &&
                    <motion.div
                        className={styles.params}
                    >
                        <motion.div
                            className={styles.title}
                        >
                            Community Parameters
                        </motion.div>
                        <div
                            className={styles.paramsOutput}
                        >
                            <AnimatePresence initial={false}>
                        {
                            communityTypeInput==='public' &&
                            <ParameterSet
                                defaultState={communityChat}
                                title='Permit internal moderation'
                                MSVG={VibeMSVG({focus:communityChat})}
                                control={setCommunityChat}
                            />
                        }
                        {
                            communityTypeInput==='private'||'target' &&
                            <ParameterSet
                                defaultState={publicVisibility}
                                title='Set public visibility'
                                MSVG={VibeMSVG({focus:publicVisibility})}
                                control={setPublicVisibility}
                            />
                        }
                        {
                            communityTypeInput==='public' &&
                            <ParameterSet
                                defaultState={localization}
                                title='Permit autonomous localization'
                                MSVG={VibeMSVG({focus:localization})}
                                control={setLocalization}
                            />
                        }
                        {
                            communityTypeInput==='private'||'target' &&
                            <ParameterSet
                                defaultState={internalModeration}
                                title='Permit internal moderation'
                                MSVG={VibeMSVG({focus:internalModeration})}
                                control={setInternalModeration}
                            />
                        }
                        {
                            communityTypeInput==='public' &&
                            <ParameterSet
                                defaultState={mediaUpload}
                                title='Permit media upload'
                                MSVG={VibeMSVG({focus:mediaUpload})}
                                control={setMediaUpload}
                            />
                        }
                        {
                            communityTypeInput==='target' &&
                            <ParameterSet
                                defaultState={templateOffer}
                                title='Set template offer boundries'
                                MSVG={VibeMSVG({focus:templateOffer})}
                                control={setTemplateOffer}
                            />
                        }
                        </AnimatePresence>
                        </div>
                    
        </motion.div>
                }
            </AnimatePresence>
        </div>

      )
    
    
    
}
    export default CommunityInput
    