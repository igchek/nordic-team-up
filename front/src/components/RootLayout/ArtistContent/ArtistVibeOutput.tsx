"use client"
import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import ArtistCommunityManagementDesk from './SecondaryOutputs/ArtistCommunityManagementDesk'
import ArtistVibeCommunityOutput from './SecondaryOutputs/ArtistVibeCommunityOutput'
import { useAppSelector } from '@/hooks'
import { vibeDigest } from '@/store/subAccounts'
import ArtistVibe from './Content/ArtistVibe'

interface ArtistVibeOutputI {
    vibes:vibeDigest[]|null
}

const ArtistVibeOutput:React.FC<ArtistVibeOutputI> = ({vibes}) => {
    
    const [secondaryOutputScope, animateSecondaryOutput] = useAnimate()
    const [primaryOutputScope, animatePrimaryOutput] = useAnimate()

    
    const [isSecondaryOutputSet, setSecondaryOutput] = useState(false)
    const [isPrimaryOutputHovered, setPrimaryOutputHover] = useState(false)

    const artistContent = useAppSelector(({subAccounts})=>{subAccounts.artist})
    
  return (
        <motion.div
        key={'VibeOutputWrapper'}

        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'25%'}}
        exit={{opacity:0, width:0}}

        className={styles.outputWrapper}
        >
            <motion.div
                ref={primaryOutputScope}
                className={styles.primaryOutput}
            >
                <AnimatePresence>
                {vibes &&
                    vibes.map((vibe)=>{
                        return(<ArtistVibe
                            id={vibe.vibe.id}
                            logo={vibe.vibe.logo}
                            title={vibe.vibe.primaryTitle}
                            resonations={vibe.vibe.audience}
                        />)
                    })
                }
                </AnimatePresence>
            </motion.div>
            {
                isSecondaryOutputSet &&
                <motion.div
                    key={`vibe Secondary Output`}
                    initial={{opacity:0, width:0}}
                    animate={{opacity:0, width:'85%'}}
                    exit={{opacity:0, width:0}}
                    ref={secondaryOutputScope}
                    className={styles.secondaryOutput}
                >
                    <ArtistCommunityManagementDesk
                        isPrimaryOutputHovered={isPrimaryOutputHovered}
                        vibeId={'b'}

                    />
                    <ArtistVibeCommunityOutput
                        isPrimaryOutputHovered={isPrimaryOutputHovered}
                        publicCommunitites={[]}
                        privateCommunities={[]}
                        targetCommunities={[]}
                    />
                </motion.div>
            }
    </motion.div>
  )
}

export default ArtistVibeOutput