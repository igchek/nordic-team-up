'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import {AnimatePresence, motion} from 'framer-motion'
import InteractiveLogo from '../uploaders/InteractiveLogo'
import SvgSelector from '@/Utils/SvgSelector'
import BinarySwitcher from '@/Utils/BinarySwitcher'

interface VibeCommunitySetUpI{
    outputControl:React.Dispatch<React.SetStateAction<{
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
    }[]>>

}


const VibeCommunitySetUp:React.FC<VibeCommunitySetUpI> = ({outputControl}) => {
    const [communityLogoFileInput, setCommunityLogoInput] = useState<File[]>([])
    const [communityLogoUrlInput, setCommunityLogoUrlInput] = useState('')
    const [communityTypeInput, setCommunityTypeInput] = useState<null|'public'|'private'|'target'>(null)
    const [communityTitleInput, setCommunityTitleInput] = useState('Set community title')
    const [communityInputId, setCommunityInputId] = useState<null|number>(null)
    const [isAddControlHovered, setAddControlHover] = useState(false)
    const [isDeleteControlHovered, setDeleteControlHover] = useState(false)
            // community settings input
    const [isGeoDistributable, setGeoDistributabilty] = useState(false)
    const [isChatSupported, setChatSupport] = useState(true)
    const [isSyncRotationSet, setSyncRotation] = useState(false)
    const [isExternalMediaUploadSet, setExternalMediaUpload] = useState(true)

    const [communitiesOutput, setCommunitiesOutput] = useState<{
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



    useEffect(()=>{
        outputControl(communitiesOutput)
    }, [communitiesOutput])


    useEffect(()=>{
        if(communityInputId){
            setCommunitiesOutput(communitiesOutput.map((community)=>{
                if(community.id===communityInputId)
                    return {
                        id:community.id,
                        logo:{
                            url:community.logo.url,
                            file:community.logo.file
                        },
                        type:community.type,
                        title:community.title,
                        settings:{
                            geoDistribution:isGeoDistributable,
                            chat:community.settings.chat,
                            syncRotation:community.settings.syncRotation,
                            externalMediaUpload:community.settings.externalMediaUpload
                        } 
                    }
                return community
            }))
        }
    }, [isGeoDistributable])

    useEffect(()=>{
        if(communityInputId){
            setCommunitiesOutput(communitiesOutput.map((community)=>{
                if(community.id===communityInputId)
                    return {
                        id:community.id,
                        logo:{
                            url:community.logo.url,
                            file:community.logo.file
                        },
                        type:community.type,
                        title:community.title,
                        settings:{
                            geoDistribution:community.settings.geoDistribution,
                            chat:community.settings.chat,
                            syncRotation:community.settings.syncRotation,
                            externalMediaUpload:isExternalMediaUploadSet
                        } 
                    }
                return community
            }))
        }
    }, [isExternalMediaUploadSet])

    useEffect(()=>{
        if(communityInputId){
            setCommunitiesOutput(communitiesOutput.map((community)=>{
                if(community.id===communityInputId)
                    return {
                        id:community.id,
                        logo:{
                            url:community.logo.url,
                            file:community.logo.file
                        },
                        type:community.type,
                        title:community.title,
                        settings:{
                            geoDistribution:community.settings.geoDistribution,
                            chat:community.settings.chat,
                            syncRotation:isSyncRotationSet,
                            externalMediaUpload:community.settings.externalMediaUpload
                        } 
                    }
                return community
            }))
        }
    }, [isSyncRotationSet])

    useEffect(()=>{
        if(communityInputId){
            setCommunitiesOutput(communitiesOutput.map((community)=>{
                if(community.id===communityInputId)
                    return {
                        id:community.id,
                        logo:{
                            url:community.logo.url,
                            file:community.logo.file
                        },
                        type:community.type,
                        title:community.title,
                        settings:{
                            geoDistribution:community.settings.geoDistribution,
                            chat:isChatSupported,
                            syncRotation:community.settings.syncRotation,
                            externalMediaUpload:community.settings.externalMediaUpload
                        } 
                    }
                return community
            }))
        }
    }, [isChatSupported])

  return (
    <motion.div
        className={styles.communitySetUp}
    >
        <motion.div
            className={styles.communityInput}
        >
            <motion.div
                className={styles.logoSegment}
            >
                <motion.div
                    className={styles.logoSocket}
                >
                    <InteractiveLogo
                        url={communityLogoUrlInput}
                        controls={{
                            fileControl:setCommunityLogoInput,
                            urlControl:setCommunityLogoUrlInput,
                            file:communityLogoFileInput
                        }}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                style={(communityTitleInput==='Set community title')?{color:'rgba(214, 214, 214, 1)'}:{color:'rgba(0, 0, 0, 1)'}}
                className={styles.titleSegment}
            >
                <input
                onChange={(e)=>{
                    setCommunityTitleInput(e.currentTarget.value)
                }}
                onBlur={()=>{
                    if(!communityTitleInput){
                        setCommunityTitleInput('Set community title')
                    }
                }}
                value={communityTitleInput}
                        className={styles.input}
                type="text" />
            </motion.div>
            <motion.div
                className={styles.typeSegment}
            >
                <div
                    className={styles.typeSocket}
                >
                    <div
                        className={styles.typeSelector}
                    >
                        <div
                            className={styles.typeSegment}
                        >
                            <div
                                onClick={()=>{
                                    if(communityTypeInput==='public'){
                                        setCommunityTypeInput(null)
                                    }
                                    else setCommunityTypeInput('public')
                                }}
                                className={styles.iconSocket}
                            >
                                {/* TLDR:upload public and public svgs from figma */}
                                <SvgSelector
                                    tier='standart'
                                    value='networking'
                                    focus={communityTypeInput==='public'?true:false}
                                />
                            </div>
                        </div>
                        <div
                            className={styles.typeSegment}
                        >
                            <div
                                onClick={()=>{
                                    if(communityTypeInput==='private'){
                                        setCommunityTypeInput(null)
                                    }
                                    else setCommunityTypeInput('private')
                                }}
                                className={styles.iconSocket}
                            >
                            {/* TLDR:upload public and private svgs from figma */}
                                <SvgSelector
                                    tier='standart'
                                    value='networking'
                                    focus={communityTypeInput==='private'?true:false}
                                />
                            </div>
                        </div>
                        <div
                            className={styles.typeSegment}
                        >
                            <div
                                onClick={()=>{
                                    if(communityTypeInput==='target'){
                                        setCommunityTypeInput(null)
                                    }
                                    else setCommunityTypeInput('target')
                                }}
                                className={styles.iconSocket}
                            >
                                <SvgSelector
                                    tier='standart'
                                    value='target'
                                    focus={communityTypeInput==='target'?true:false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className={styles.typeDescription}
                >
                    <AnimatePresence>
                    {
                        !communityTypeInput &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            className={styles.description}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                        >
                            Set community type
                        </motion.div>
                    }
                    {
                        communityTypeInput==='public' &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            className={styles.description}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                        >
                            Public community
                        </motion.div>
                    }
                    {
                        communityTypeInput==='private' &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            className={styles.description}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                        >
                            Private community
                        </motion.div>
                    }
                    {
                        communityTypeInput==='target' &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            className={styles.description}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                        >
                            Private community
                        </motion.div>
                    }
                    </AnimatePresence>
                    
                </motion.div>
            </motion.div>
            <motion.div
                className={styles.controls}
            >
                <AnimatePresence>
                    {
                        
                            (communityLogoUrlInput && 
                            communityLogoFileInput.length && 
                            communityTitleInput && 
                            communityTitleInput!=='Set community title' &&
                            communityTypeInput &&
                            !communityInputId
                            )
                          &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                            className={styles.control}
                        >
                            <motion.div
                                whileHover={{backgroundColor:'rgba(44,44,44,0.7)'}}
                                className={styles.icon}
                                onMouseEnter={()=>{
                                    setAddControlHover(true)
                                }}
                                onMouseLeave={()=>{
                                    setAddControlHover(false)
                                }}
                                onClick={()=>{
                                    let id =Math.random()*1000
                                    if(communityTypeInput==='public'){
                                        setGeoDistributabilty(true)
                                        setChatSupport(true)
                                        setSyncRotation(false)
                                        setExternalMediaUpload(false)
                                    }
                                    else if(communityTypeInput==='private'){
                                        setGeoDistributabilty(true)
                                        setChatSupport(true)
                                        setSyncRotation(false)
                                        setExternalMediaUpload(false)
                                    }
                                    else if(communityTypeInput==='target'){
                                        setGeoDistributabilty(true)
                                        setChatSupport(true)
                                        setSyncRotation(false)
                                        setExternalMediaUpload(false)
                                    }
                                    setCommunitiesOutput([...communitiesOutput, {
                                        id:id,
                                        logo:{
                                            url:communityLogoUrlInput,
                                            file:communityLogoFileInput
                                        },
                                        type:communityTypeInput,
                                        title:communityTitleInput,
                                        settings:{
                                            geoDistribution:isGeoDistributable,
                                            chat:isChatSupported,
                                            syncRotation:isSyncRotationSet,
                                            externalMediaUpload:isExternalMediaUploadSet
                                        }
                                    }])
                                    setCommunityInputId(id)
                                    


                                }}
                            >
                                <SvgSelector
                                    tier='standart'
                                    value='plus'
                                    focus={isAddControlHovered}
                                />
                            </motion.div>
                        </motion.div>
                    }
                    {
                        communityInputId &&
                        <motion.div
                            key={`${Math.random()*1000}`}
                            initial={{opacity:0, x:-15}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-15}}
                            className={styles.control}
                        >
                            <motion.div
                                 whileHover={{backgroundColor:'rgba(44,44,44,0.7)'}}
                                 onMouseEnter={()=>{
                                     setDeleteControlHover(true)
                                 }}
                                 onMouseLeave={()=>{
                                     setDeleteControlHover(false)
                                 }}
                                 onClick={()=>{
                                    setCommunitiesOutput(communitiesOutput.splice(communitiesOutput.findIndex(community=>community.id===communityInputId), 1))
                                 }}
                                className={styles.icon}
                            >
                                <SvgSelector
                                    tier='standart'
                                    value='delete'
                                    focus={isDeleteControlHovered}
                                />
                            </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </motion.div>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:0}}
            className={styles.communityOutput}
        >
            <AnimatePresence>
            {communitiesOutput.map((community)=>{
                return(
                    <motion.div
                        onClick={()=>{
                            if(communityInputId===community.id){
                                setCommunityInputId(null)
                                setCommunityLogoInput([])
                                setCommunityLogoUrlInput('')
                                setCommunityTitleInput('Set community title')
                                setCommunityTypeInput(null)
                                setGeoDistributabilty(false)
                                setSyncRotation(false)
                                setChatSupport(false)
                                setExternalMediaUpload(false)
                            }
                            else{
                                setCommunityInputId(community.id)
                                setCommunityLogoInput(community.logo.file)
                                setCommunityLogoUrlInput(community.logo.url)
                                setCommunityTitleInput(community.title)
                                setCommunityTypeInput(community.type)
                                setGeoDistributabilty(community.settings.geoDistribution)
                                setSyncRotation(community.settings.syncRotation)
                                setChatSupport(community.settings.chat)
                                setExternalMediaUpload(community.settings.externalMediaUpload)
                            }
                        }}
                        whileHover={{backgroundColor:`rgba(136, 136, 136, 0.5)`}}
                        style={communityInputId===community.id?{backgroundColor:`rgba(136, 136, 136, 1)`, color:`rgba(255, 255, 255, 1)`}:{backgroundColor:`rgba(255, 255, 255, 1)`, color:`rgba(0,0,0,1)`}}
                        key={`${Math.random()*1000}`}
                        initial={{opacity:0, height:0, x:-15}}
                        animate={{opacity:1, height:'7vh', x:0}}
                        exit={{opacity:0, height:0, x:-15}}
                        className={styles.outputUnit}
                    >
                        <div
                            className={styles.logoSegment}
                        >
                            <div
                                style={{backgroundImage:`url(${community.logo.url})`}}
                                className={styles.logo}
                            />
                        </div>
                        <div
                            className={styles.title}
                        >
                            {community.title}
                        </div>
                        <div
                            className={styles.typeSegment}
                        >
                            <div
                                className={styles.iconSocket}
                            >
                                <SvgSelector
                                    tier='standart'
                                    value={community.type==='public'?'publicCommunity':community.type==='private'?'privateCommunity':'targetCommunity'}
                                    focus={community.id===communityInputId?true:false}
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            })}
            </AnimatePresence>
        </motion.div>
        <AnimatePresence>
            {
                communityInputId &&
                <motion.div
                    key={`${Math.random()*1000}`}
                    initial={{height:0, opacity:0}}
                    animate={{height:'auto', opacity:1}}
                    exit={{height:0, opacity:0}}
                className={styles.settings}>
                    <div
                        className={styles.header}
                    >
                        Settings
                    </div>
                    <div
                        className={styles.settingsOutput}
                    >
                        <div
                            className={styles.settingUnit}
                        >
                            <div
                                className={styles.description}
                            >
                                Geo distribution
                            </div>
                            <div
                                className={styles.switcherSegment}
                            >
                                <div
                                    className={styles.switcherSocket}
                                >
                                    <BinarySwitcher
                                        control={setGeoDistributabilty}
                                        state={isGeoDistributable}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div
                            className={styles.settingUnit}
                        >
                            <div
                                className={styles.description}
                            >
                                Chat
                            </div>
                            <div
                                className={styles.switcherSegment}
                            >
                                <div
                                    className={styles.switcherSocket}
                                >
                                    <BinarySwitcher
                                        control={setChatSupport}
                                        state={isChatSupported}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div
                            className={styles.settingUnit}
                        >
                            <div
                                className={styles.description}
                            >
                                Sync rotation
                            </div>
                            <div
                                className={styles.switcherSegment}
                            >
                                <div
                                    className={styles.switcherSocket}
                                >
                                    <BinarySwitcher
                                        control={setSyncRotation}
                                        state={isSyncRotationSet}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div
                            className={styles.settingUnit}
                        >
                            <div
                                className={styles.description}
                            >
                                External media upload
                            </div>
                            <div
                                className={styles.switcherSegment}
                            >
                                <div
                                    className={styles.switcherSocket}
                                >
                                    <BinarySwitcher
                                        control={setExternalMediaUpload}
                                        state={isExternalMediaUploadSet}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        
    </motion.div>
  )
}

export default VibeCommunitySetUp