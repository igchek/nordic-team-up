"use client"
import SvgSelector from '@/Utils/SvgSelector'
import styles from './styles.module.scss'

import React, {useState} from 'react'
import EngagementOutput from './EngagementOutput'
import { useAppSelector } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'

interface EngagementSelectorI{

 
}

const EngagementSelector:React.FC<EngagementSelectorI> = () => {
    const engagementOutput = useAppSelector(({user})=>user.subAccounts)
    const [roleSelector, setRoleSelector] = useState<string|null>(null)
  return (
    <>
        <motion.div 
        key={'selector'}
        initial={{opacity:0, y:-15}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-15}}
    className={styles.engagementSelector}>
        <div className={styles.selectorHeader}>
            <div className={styles.selectorTitle}>
                {roleSelector?
                    roleSelector
                :
                    'Set a role'
                }
            </div>
            <div className={styles.roleSegment}>
                <div className={styles.roleWrapper}>
                    <div
                        onClick={()=>{
                            if(roleSelector==='artist'){
                                setRoleSelector(null)
                            }else setRoleSelector('artist')
                        }}
                    className={styles.roleSocket}>
                        <SvgSelector
                            tier='standart'
                            value='artist'
                            focus={roleSelector==='artist'?true:false}
                        />
                    </div >
                </div>
                
                <div className={styles.roleWrapper}>
                    <div
                        onClick={()=>{
                            if(roleSelector==='venue'){
                                setRoleSelector(null)
                            }else setRoleSelector('venue')
                        }}
                    className={styles.roleSocket}>
                        <SvgSelector
                            tier='standart'
                            value='venue'
                            focus={roleSelector==='venue'?true:false}
                        />
                    </div >
                </div>
                
                <div className={styles.roleWrapper}>
                    <div
                        onClick={()=>{
                            if(roleSelector==='target'){
                                setRoleSelector(null)
                            }else setRoleSelector('target')
                        }}
                    className={styles.roleSocket}>
                        <SvgSelector
                            tier='standart'
                            value='target'
                            focus={roleSelector==='target'?true:false}
                        />
                    </div >
                </div>
                
            </div>
        </div>
        
    </motion.div>
    <AnimatePresence>
        {roleSelector &&
        <EngagementOutput
            selector={roleSelector}
            artists={engagementOutput.artist.accounts}
            venues={engagementOutput.venue.accounts}
            targetGroups={engagementOutput.targetGroup.accounts}
        />
        }
    </AnimatePresence>
    </>
    
  )
}

export default EngagementSelector