'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import {AnimatePresence, motion} from 'framer-motion'
import CommunityInput, { CommunityShort } from './CommunityInput'
import CommunityUnit from './CommunityUnit'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { dispatchVibeTemplate } from '@/store/SetUp'

interface VibeCommunitySetUpI{
    output:CommunityShort[]
    outputControl:React.Dispatch<SetStateAction<CommunityShort[]>>
}


const VibeCommunitySetUp:React.FC<VibeCommunitySetUpI> = ({output, outputControl}) => {

  
    
    const [focusedCommunity, setFocusedCommunity] = useState<CommunityShort|null>(null)

  return (
    <motion.div
        className={styles.communitySetUp}
    >
       <CommunityInput
            communityOutputControl={outputControl}
            communityOutput={output}
            focusCommunity={focusedCommunity}
       />
       <AnimatePresence initial={false} mode='wait'>
        {
            output.length>0 &&
            <motion.div
                key={`${Math.random()*1000} community output`}
                initial={{height:0}}
                animate={{height:'auto'}}
                exit={{height:0}}
                className={styles.output}
            >
                <AnimatePresence initial={false}>
                {
                    output.map((community)=>{
                        return (
                        <CommunityUnit
                            focus={focusedCommunity}
                            community={community}
                            focusControl={setFocusedCommunity}
                        />
                        )
                    })
                }
                </AnimatePresence>
            </motion.div>
        }
       </AnimatePresence>
        
        
    </motion.div>
  )
}

export default React.memo(VibeCommunitySetUp)