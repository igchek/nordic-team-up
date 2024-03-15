"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import ArtistVibeCommunitity from '../Content/ArtistVibeCommunitity'
import SecondaryOutputSubSection from './SecondaryOutputSubSection'

interface ArtistVibeCommunityOutputI{
    isPrimaryOutputHovered:boolean
    
    publicCommunitites:any[]
    privateCommunities:any[]
    targetCommunities:any[]

}

const ArtistVibeCommunityOutput:React.FC<ArtistVibeCommunityOutputI> = ({isPrimaryOutputHovered, publicCommunitites, privateCommunities,targetCommunities}) => {
  
    const [isPublicSubsectionFocused, setPublicSubsectionFocus] = useState(false)
    const [isPrivateSubsectionFocused, setPrivateSubsectionFocus] = useState(false)
    const [isTargetSubsectionFocused, setTargetSubsectionFocus] = useState(false)

    return (
    <motion.div
        key={`community output`}
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'100%'}}
        exit={{opacity:0, width:0}}
        className={styles.outputWrapper}
    >
        {publicCommunitites.length<5 
            ?
            publicCommunitites.map((unit)=>{
                return(<ArtistVibeCommunitity
                        id={unit._id}
                        primaryTitle={unit.title}
                        logo={unit.logo}
                        secondaryTitle={unit.secondaryTitle}
                        pushes={unit.pushes}
                        audience={unit.audience}
                />)
        })
            :
            publicCommunitites.map((unit)=>{
                return(<SecondaryOutputSubSection
                        OutputType='communitites'
                        title='Public Communities'
                        icon='networking'
                        output={publicCommunitites}
                />)
            })
        
        }
        {privateCommunities.length<5
            ?
            privateCommunities.map((unit)=>{
                return(<ArtistVibeCommunitity
                        id={unit._id}
                        primaryTitle={unit.title}
                        logo={unit.logo}
                        secondaryTitle={unit.secondaryTitle}
                        pushes={unit.pushes}
                        audience={unit.audience}
                />)
            })
            :
            privateCommunities.map((unit)=>{
                return(<SecondaryOutputSubSection
                        OutputType='communitites'
                        title='Private Communities'
                        icon='networking'
                        output={publicCommunitites}
                />)})
            }
            {targetCommunities.length<5
            ?
            privateCommunities.map((unit)=>{
                return(<ArtistVibeCommunitity
                        id={unit._id}
                        primaryTitle={unit.title}
                        logo={unit.logo}
                        secondaryTitle={unit.secondaryTitle}
                        pushes={unit.pushes}
                        audience={unit.audience}
                />)
            })
            :
            targetCommunities.map((unit)=>{
                return(<SecondaryOutputSubSection
                        OutputType='communitites'
                        title='Target Communities'
                        icon='networking'
                        output={publicCommunitites}
                />)})
            }
    
    </motion.div>
  )
}

export default ArtistVibeCommunityOutput