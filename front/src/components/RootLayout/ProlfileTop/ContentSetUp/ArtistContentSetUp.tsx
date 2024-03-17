import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import {useRouter} from 'next/navigation'

interface ArtistContentSetUpI{

}

const ArtistContentSetUp:React.FC<ArtistContentSetUpI> = ({}) => {
    
    const router = useRouter()


    const [wrapperScope, animateWrapper] = useAnimate()
    const [setUpSocketScope, animateSetUpSocket] = useAnimate()


    const [isWrapperSelected, setWrapperSelection] = useState(false)
    const [contentCreationState, setContentCreationState] = useState('')
    
    useEffect(()=>{
        if(isWrapperSelected){
            animateWrapper(wrapperScope.current, {width:'auto'})
        }
        else{
            animateWrapper(wrapperScope.current, {width:'3.5vh'})
        }
    },[isWrapperSelected])
    return (
    <motion.div
        initial={{x:-15}}
        animate={{x:0}}
        exit={{x:-15}}
        ref={wrapperScope}
        key={'artist content set up'}
        className={styles.wrapper}
    >
        <motion.div
            ref={setUpSocketScope}
            className={styles.setUpSocket}
            onClick={()=>{
                setWrapperSelection(!isWrapperSelected)
            }}
        >
            <SvgSelector
                tier='standart'
                value='plus'
                focus={isWrapperSelected}
            />
        </motion.div>
        <AnimatePresence>
            {
                isWrapperSelected &&
                <motion.div
                    initial={{opacity:0, x:-15}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-15}}
                    key={'vibe set up'}
                    className={styles.modalitySocket}
                    onClick={()=>{
                        if(contentCreationState==='vibe'){
                            setContentCreationState('')
                            router.back()
                        }
                        else{
                            setContentCreationState('vibe')
                            router.push(`/Profile/Artist/VibeSetUp`)
                        }
                    }}
                >
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={styles.iconSocket}
                    >
                        <SvgSelector
                            tier='standart'
                            value='vibe'
                            focus={contentCreationState==='vibe'?true:false}
                        />
                    </motion.div>
                </motion.div>
            }
            {
                isWrapperSelected &&
                <motion.div
                    initial={{opacity:0, x:-15}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-15}}
                    key={'gig set up'}
                    className={styles.modalitySocket}
                    onClick={()=>{
                        if(contentCreationState==='gig'){
                            setContentCreationState('')
                        }
                        else{
                            setContentCreationState('gig')
                        }
                    }}
                >
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={styles.iconSocket}
                    >
                        <SvgSelector
                            tier='standart'
                            value='gig'
                            focus={contentCreationState==='gig'?true:false}
                        />
                    </motion.div>
                    
                </motion.div>
            }
        </AnimatePresence>

    </motion.div>
  )
}

export default ArtistContentSetUp