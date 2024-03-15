"use client"
import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { issueDigest } from '@/store/subAccounts'
import ArtistGigIssueUnit from '../Content/ArtistGigIssues'

interface ArtistGigIssuesOutputI{
    issues:issueDigest[]
    isPrimaryOutputHovered:boolean
}

const ArtistGigIssuesOutput:React.FC<ArtistGigIssuesOutputI> = ({issues, isPrimaryOutputHovered}) => {
  return (
    <motion.div
        key={`community output`}
        initial={{opacity:0, width:0}}
        animate={{opacity:1, width:'100%'}}
        exit={{opacity:0, width:0}}
        className={styles.outputWrapper}
    >
        {
            issues.map((unit:issueDigest)=>{
                if(unit.immediacy==='critical'){
                    return(
                        <ArtistGigIssueUnit
                            id={unit.id}
                            title={unit.title}
                            immediacyStatus={unit.immediacy}
                            pic={unit.pic}
                            pushes={unit.puhes}
                            cancelationProbability={unit.cancelationProbability}
                        />
                    )
                }
                else if(unit.immediacy==='emergent'){
                    return(
                        <ArtistGigIssueUnit
                            id={unit.id}
                            title={unit.title}
                            immediacyStatus={unit.immediacy}
                            pic={unit.pic}
                            pushes={unit.puhes}
                            cancelationProbability={unit.cancelationProbability}
                        />
                    )
                }
                else if(unit.immediacy==='standart'){
                    return(
                        <ArtistGigIssueUnit
                            id={unit.id}
                            title={unit.title}
                            immediacyStatus={unit.immediacy}
                            pic={unit.pic}
                            pushes={unit.puhes}
                            cancelationProbability={unit.cancelationProbability}
                        />
                    )
                }
            })
        }
    </motion.div>
  )
}

export default ArtistGigIssuesOutput