"use client"
import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/hooks'
import { optionDigest } from '@/store/subAccounts'
import ArtistSyncOptionUnit from '../Content/ArtistSyncOption'
import ArtistSyncOption from '../Content/ArtistSyncOption'

interface ArtistSyncOptionOutputI{
    deployment:{
        vibeTitle:string
            baseVenue:{
                id:string
                title:string
                logo:string
            }
            options:{
                requested:optionDigest[]
                rejected:optionDigest[]
                approved:optionDigest[]
            }
        pushes:[]
    }[]
    isPrimaryOutputHovered:boolean
}

const ArtistSyncOptionOutput:React.FC<ArtistSyncOptionOutputI> = ({deployment, isPrimaryOutputHovered}) => {
    
  
    return (
    <motion.div
        key={`community output`}
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'100%'}}
        exit={{opacity:0, width:0}}
        className={styles.outputWrapper}
    >
        {
            deployment.map((unit)=>{
                return(
                    <ArtistSyncOption
                        id={unit.baseVenue.id}
                        logo={unit.baseVenue.logo}
                        vibeTitle={unit.vibeTitle}
                        venueTitle={unit.baseVenue.title}
                        updates={unit.pushes}
                        optionQuantity={unit.options.approved.length}
                    />
                )
            })
        }
    </motion.div>
  )
}

export default ArtistSyncOptionOutput