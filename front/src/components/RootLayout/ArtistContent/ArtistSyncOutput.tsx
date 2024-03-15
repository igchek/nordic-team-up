"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppSelector } from '@/hooks'
import { syncDigest } from '@/store/subAccounts'
import ArtistSync from './Content/ArtistSync'

interface ArtistSyncOutputI{

}



const ArtistSyncOutput:React.FC<ArtistSyncOutputI> = ({}) => {
    const [isSecondaryOutputSet, setSecondaryOutput]= useState(false)
    const [isPrimaryOutputHovered, setPrimaryOutputHover] = useState(false)
    const syncs = useAppSelector(({subAccounts})=>subAccounts.artist.syncs)
  return (
    <motion.div
    key={'outputWrapper'}

    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}

    className={styles.outputWrapper}
>
    <AnimatePresence>
        <motion.div
            className={styles.primaryOutput}
        >
            {syncs && syncs.length===0 &&
                <div
                    className={styles.outputPlaceholder}
                >
                    No syncs resonating
                </div>
            }
            {syncs &&
                syncs.map((unit:syncDigest)=>{
                    return(<ArtistSync
                        id={unit.baseVibe.id}
                        logo={unit.baseVibe.logo}
                        primaryTitle={unit.baseVibe.title}
                        updates={unit.pushes}
                        resonations={unit.distribution.length}
                    />)
                })
            }
        </motion.div>
        {
            isSecondaryOutputSet &&
            <motion.div
                className={styles.secondaryOutput}
            >

            </motion.div>
        }
    </AnimatePresence>

</motion.div>
  )
}

export default ArtistSyncOutput