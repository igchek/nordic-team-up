"use client"

import GigProgression from './Gig/GigProgression';
import MediaBlog from './Gig/MediaBlog';
import VenueDisplay from './Gig/VenueDisplay';
import SyncProgression from './Sync/SyncProgression';
import LineUp, { artist } from './Vibe/LineUp';
import MajorVisual from './Vibe/MajorVisual';
import VibeEssentials from './Vibe/VibeEssentials';
import VibeProgression from './Vibe/VibeProgression';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';


import React from 'react'

interface vibe{
    promoLogo:string
    contentTitle:string
    totalAudience:number
    lineUp:artist|artist[]

}

interface sync {

}

interface gig {
    turnout:number
}

interface VibeDisplayI {
    vibe:vibe
    sync?:sync
    gig?:gig
}

const VibeDisplay:React.FC<VibeDisplayI> = (props) => {


  return (
    <motion.div
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:100}}
        exit={{opacity:0, width:0}}
    className={styles.wrapper}>
        <MajorVisual
            promoLogo={props.vibe.promoLogo}
        />
        <VibeEssentials
            contentTitle={props.vibe.contentTitle}
            totalAudience={props.gig? props.gig.turnout:props.vibe.totalAudience}
            modality={props.gig?'gig':props.sync?'sync':'vibe'}
        />
        <LineUp
            lineUp={props.vibe.lineUp}
        />
        {!(!props.sync && !props.gig)?
            <VibeProgression/>
            :
            null
        }
        {(props.sync && !props.gig)?
            <SyncProgression

            />
            :
            null
        }
        {props.gig?
            <div className={styles.gigChunk}>
                <VenueDisplay
            
                />
                <GigProgression

                />
                <MediaBlog

                />
            </div>
            
            :
            null
        }
    </motion.div>
  )
}

export default VibeDisplay
