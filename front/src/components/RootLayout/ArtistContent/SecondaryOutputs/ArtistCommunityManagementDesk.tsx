"use client"
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

interface ArtistCommunityManagementDeskI{
    isPrimaryOutputHovered:boolean
    vibeId:string

}


const ArtistCommunityManagementDesk:React.FC<ArtistCommunityManagementDeskI> = ({isPrimaryOutputHovered, vibeId}) => {
  
    const [wrapperScope, animateWrapper] = useAnimate()
    const [upperHeaderScope, animateUpperHeader] = useAnimate()
    const [controlsScope, animateControls] = useAnimate()

    useEffect(()=>{
        if(isPrimaryOutputHovered){
            animateUpperHeader(upperHeaderScope.current, {styles:{opacity:0, height:0}})
            animateControls(controlsScope.current, {styles:{opacity:0, height:0}})

        }
        else{
            animateUpperHeader(upperHeaderScope.current, {styles:{opacity:1, height:'15%'}})
            animateControls(controlsScope.current, {styles:{opacity:1, height:'15%'}})
        }
    }, [isPrimaryOutputHovered])
  
    return (
    <motion.div
        key={`${vibeId} vibe community management desk wrapper`}
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'100%'}}
        exit={{opacity:0, width:0}}
        ref={wrapperScope}
        className={styles.managementDeskWrapper}
    >
        <motion.div
            ref={upperHeaderScope}
            className={styles.upperHeader}
        >
            Community
        </motion.div>
        <motion.div
            className={styles.placeHolder}
        >
            <AnimatePresence>
            {
                isPrimaryOutputHovered &&
                <motion.div
                    key={'community management icon'}
                    className={styles.iconSocket}
                >
                    <SvgSelector
                        tier='standart'
                        value='networking'
                        focus={isPrimaryOutputHovered}
                    />
                </motion.div>

            }
            </AnimatePresence>
        </motion.div>
        <motion.div
            ref={controlsScope}
            className={styles.controls}
        >
            {/* here be controls */}
        </motion.div>
    </motion.div>
  )
}

export default ArtistCommunityManagementDesk