'use client'
import React, { SetStateAction, useEffect, useState } from 'react' 
import styles from './common.module.scss'
import {AnimatePresence, motion, useAnimate, useMotionValue} from 'framer-motion'
import { styleSheet } from '@/stylesGlobal/variables'
import MotionIcon from '@/Utils/MotionIcon'
import { useRouter } from 'next/navigation'
import VibrationMSVG from '../common/svg/VibrationMSVG'
import VibeMSVG from '../common/svg/VibeMSVG'
import SyncMSVG from '../common/svg/SyncMSVG'
import GigMSVG from '../common/svg/GigMSVG'
import FormatMSVG from '../common/svg/FormatMSVG'


export interface VibeSectionContentI {
    vibeId:string
    content:{
        pic:string
        title:string
    }
    artist:{
        title:string
        logo:string
    }
    vibrations:{
        total:number
        local?:{
            geoLogo:string
            vibrations:number
        }
    }
    format:string
    modality?:'vibe'|'sync'|'gig'
    // separatorStretch:React.Dispatch<SetStateAction<"default"|"prefocus"|"focus">>
}
const VibeSectionContent:React.FC<VibeSectionContentI> = ({
    vibeId,
    content,
    vibrations,
    format,
    artist, 
    modality
}) => {
    const router = useRouter()

    const [prefocus, setPrefocus] = useState(false)
    const [modalityHover, setModalityHover] = useState(false)
    const [formatHover, setFormatHover] = useState(false)


    const [contentWrapperScope, animateContentWrapper] = useAnimate()
    const [titleSocket, animateTitleSocket] = useAnimate()
    const [modalitySocket, animateModalitySocket] = useAnimate()
    const [formatWrapper, animateFormatWrapper] = useAnimate()
    const [formatIconSocket, animateFormatIconSocket] = useAnimate()

    const WrapperOpacity = useMotionValue(0)


    useEffect(()=>{
        if(prefocus){
            animateContentWrapper(contentWrapperScope.current, {heiht:'30vh'})
            animateTitleSocket(titleSocket.current, {backgroundColor:styleSheet.vibeSectionLayout})
            animateModalitySocket(modalitySocket.current, {backgroundColor:styleSheet.vibeSectionLayout})
            WrapperOpacity.set(1)
        }
        else{
            animateContentWrapper(contentWrapperScope.current, {height:'10vh'})
            animateTitleSocket(titleSocket.current, {backgroundColor:styleSheet.vibeSectionContent})
            animateModalitySocket(modalitySocket.current, {backgroundColor:styleSheet.vibeSectionContent})
            WrapperOpacity.set(0)
        }
    }, [prefocus])

 return(
    <motion.div
        style={prefocus?{backgroundColor:`${styleSheet.spread.vibeSection.three}`}:{backgroundColor:`${styleSheet.spread.vibeSection.one}`}}
        key={`${Math.random()} default Prefocus`}
        className={styles.sectionContent}
    >
        
        <motion.div
            style={{backgroundColor:`rgba(${styleSheet.vibeSectionContent}, ${WrapperOpacity})`}}
            ref={contentWrapperScope}
            onClick={()=>{
                if(prefocus){
                    router.push(`/Vibe/${vibeId}`)
                }else
                setPrefocus(true)
            }}
            // layout
            key={`${Math.random()*1000} contents`}
            className={styles.contentLayout}
        >
            <motion.div
                // layout
                className={styles.imgSegment}
            >
                <motion.div
                    // layout
                    className={styles.imgSocket}
                >
                    <MotionIcon
                    focus={false}
                    
                    pic={content.pic}
                />
                </motion.div>
                
            </motion.div>


            <motion.div
                className={styles.description}
            >
                <motion.div
                    className={styles.titleSegment}
                >
                    <motion.div
                        ref={titleSocket}
                        className={styles.titleSocket}
                    >
                        {content.title}
                    </motion.div>
                </motion.div>
                <AnimatePresence>
                {
                    prefocus &&
                    <motion.div
                    // layout
                        key={`${Math.random()*1000} audience & format`}
                        initial={{opacity:0, y:+10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:+10}}
                        className={styles.artistSegment}
                    >

                            <div
                                className={styles.logoSocket}
                            >
                                <MotionIcon
                                    pic={artist.logo}
                                    focus={false}
                                />
                            </div>
                        <motion.div
                            style={{backgroundColor:styleSheet.vibeSectionLayout}}
                            className={styles.artistTitleSocket}
                        >
                            {artist.title}
                        </motion.div>
                    </motion.div>
                }
                {
                    prefocus &&
                    <motion.div
                        // layout
                        key={`${Math.random()*1000} audience & format`}
                        initial={{opacity:0, y:+10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:+10}}
                        className={styles.audience_format_Segment}
                    >
                        <motion.div
                            className={styles.audienceSegment}
                        >
                            <motion.div
                                style={{backgroundColor:styleSheet.vibeSectionLayout}}
                                className={styles.audienceDisplay}
                            >
                                <motion.div
                                    className={styles.iconSegment}
                                >
                                    <div
                                        className={styles.iconSocket}
                                    >
                                        <VibrationMSVG
                                            focus={false}
                                        />
                                    </div>
                                </motion.div>
                                <div
                                    className={styles.totalOutput}
                                >
                                    {vibrations.total}
                                </div>
                                <AnimatePresence>
                            {
                                vibrations.local &&
                                <motion.div
                                    // layout
                                    initial={{opacity:0, x:-10}}
                                    animate={{opacity:1, x:0}}
                                    exit={{opacity:0, x:-10}}
                                    key={`${Math.random()*1000} vibrations`}
                                    className={styles.localVibrations}
                                >
                                    <motion.div
                                        className={styles.imageSegment}
                                    >
                                        <div
                                            className={styles.imageSocket}
                                        >
                                            <MotionIcon
                                                pic={vibrations.local.geoLogo}
                                                focus={false}
                                            />
                                        </div>
                                    </motion.div>
                                    <div
                                        className={styles.localAudienceSocket}
                                    >
                                        {vibrations.local.vibrations}
                                    </div>
                                </motion.div>
                            }
                            </AnimatePresence>
                            </motion.div>
                            
                        </motion.div>
                        <motion.div
                            className={styles.formatSegment}
                        >
                            <motion.div
                            onMouseEnter={()=>{
                                animateFormatWrapper(formatWrapper.current, {backgroundColor:`rgba(${styleSheet.vibeSectionLayout}, 1)`})
                                animateFormatIconSocket(formatIconSocket.current, {opacity:1})
                            }}
                            onMouseLeave={()=>{
                                animateFormatWrapper(formatWrapper.current, {backgroundColor:`rgba(${styleSheet.vibeSectionLayout}, 0)`})
                                animateFormatIconSocket(formatIconSocket.current, {opacity:0})
                            }}
                                ref={formatWrapper}
                                style={{backgroundColor:`rgba(${styleSheet.vibeSectionLayout}, 0)`}}
                                className={styles.formatWrapper}
                            >
                                <div
                                    className={styles.formatTitle}
                                >
                                    {format}
                                </div>
                                <div
                                className={styles.iconSegment}
                            >
                                <motion.div
                                    style={{backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 0.5)`}}
                                    whileHover={{backgroundColor:`rgba(${styleSheet.vibeSectionContent}, 1)`}}
                                    onMouseEnter={()=>{
                                        setFormatHover(true)
                                    }}
                                    onMouseLeave={()=>{
                                        setFormatHover(false)
                                    }}
                                    ref={formatIconSocket}
                                    className={styles.iconSocket}
                                >
                                    <FormatMSVG
                                        focus={formatHover}
                                    />
                                </motion.div>
                            </div>
                            </motion.div>
                            
                        </motion.div>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>

            <motion.div
                className={styles.modalitySegment}
            >
                <motion.div
                    onMouseEnter={()=>{
                        setModalityHover(true)
                    }}
                    onMouseLeave={()=>[
                        setModalityHover(false)
                    ]}
                    ref={modalitySocket}
                    className={styles.modalitySocket}
                >
                    {
                        !modality &&
                        <VibeMSVG
                        // TLDR: control it via hover or prefocus
                            focus={modalityHover}
                        />
                    }
                    {
                        modality && modality==='vibe' &&
                        <VibeMSVG
                        // TLDR: control it via hover or prefocus
                            focus={modalityHover}
                        />
                    }
                    {
                        modality && modality==='sync' &&
                        <SyncMSVG
                        // TLDR: control it via hover or prefocus
                            focus={modalityHover}
                        />
                    }
                    {
                        modality && modality==='gig' &&
                        <GigMSVG
                        // TLDR: control it via hover or prefocus
                            focus={modalityHover}
                        />
                    }
                </motion.div>
            </motion.div>
          
        </motion.div>
        
    </motion.div>
  )
}

export default VibeSectionContent