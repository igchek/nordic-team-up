"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import ArtistVibeCommunitity from '../Content/ArtistVibeCommunitity'
import ArtistGigIssueUnit from '../Content/ArtistGigIssues'
import ArtistSyncOptionUnit from '../Content/ArtistSyncOption'


interface SecondaryOutputSubSectionI{
    OutputType:'gig issues'|'sync options'|'communitites'
    title:string
    icon:string
    output:any[]
}

const SecondaryOutputSubSection:React.FC<SecondaryOutputSubSectionI> = ({OutputType, title, icon='networking', output}) => {
    const [isSubSectionFocused, setSubSectionFocus] = useState(false)
    return (
    <motion.div className={styles.subSection}>
        <motion.div
            className={styles.header}
        >
                    
                            <motion.div
                                className={styles.iconSegment}
                            >
                                <motion.div
                                    className={styles.iconSocket}
                                >
                                    <SvgSelector
                                        tier='standart'
                                        value={icon}
                                        focus={isSubSectionFocused}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* titles */}
                    <motion.div
                        className={styles.titleSegment}
                    >    
                            {title}
                                
                   </motion.div>

                            {/* toggles */}
                   <motion.div
                        className={styles.toggleSegment}
                    >
                        <motion.div
                            className={styles.toggleSocket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='vibe'
                                focus={false}
                            />
                        </motion.div>
                    </motion.div>
            
        </motion.div>
                    {/* output */}
        <AnimatePresence>
            {
                isSubSectionFocused &&
                <motion.div
                    className={styles.output}
                >
                    {output.map((unit)=>{
                        if(OutputType==='communitites')
                            return(
                                    <ArtistVibeCommunitity
                                        id={unit.id}
                                        primaryTitle={unit.title}
                                        logo={unit.logo}
                                        pushes={unit.pushes}
                                        audience={unit.audience}

                                    />
                            )
                        else if(OutputType==='gig issues')
                            return(
                                    <ArtistGigIssueUnit
                                        id={unit.id}
                                        title={unit.title}
                                        immediacyStatus={unit.immediacy}
                                        pic={unit.pic}
                                        pushes={unit.pushes}
                                        cancelationProbability={unit.immediacy==='critical'?true:false}
                                    />
                                )
                        else if(OutputType==='sync options')
                            return(
                                    <ArtistSyncOptionUnit
                                        id={unit.baseVenue.id}
                                        logo={unit.baseVenue.logo}
                                        vibeTitle={unit.vibeTitle}
                                        venueTitle={unit.baseVenue.title}
                                        updates={unit.pushes}
                                        optionQuantity={unit.options.requested.length}
                                    />
                                )
                    })}
                </motion.div>
            } 
        </AnimatePresence>
    </motion.div>
  )
}

export default SecondaryOutputSubSection