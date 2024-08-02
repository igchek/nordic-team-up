import React, { SetStateAction, useState } from 'react'
import style from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import PublicCommunityMSVG from '@/components/common/svg/PublicCommunityMSVG'
import PrivateCommunityMSVG from '@/components/common/svg/PrivateCommunityMSVG'
import TargetCommunityMSVG from '@/components/common/svg/TargetCommunityMSVG'

interface CommunityTypeSelectorI{
    type:undefined|'public'|'private'|'target',
    control:React.Dispatch<SetStateAction<undefined|'public'|'private'|'target'>>
}


const CommunityTypeSelector = ({
    type,
    control
}:CommunityTypeSelectorI) => {
    // const [communityType, setCommunityType] = useState(type)

  return (
    <div
        className={style.type}
    >
        <div
            className={style.placeholder}
        />
        <div
            className={style.typeSelectorSegment}
        >
            <div
                className={style.typeSelector}
            >
                <div
                    className={style.typeSegment}
                >
                    <div
                        onClick={()=>{
                            control('public')
                        }}
                        className={style.socket}
                    >
                        <PublicCommunityMSVG
                            focus={type==='public'?true:false}
                        />
                    </div>
                </div>
                <div
                    className={style.typeSegment}
                >
                    <div
                        onClick={()=>{
                            control('private')
                            
                        }}
                        className={style.socket}
                    >
                        <PrivateCommunityMSVG
                            focus={type==='private'?true:false}
                        />
                    </div>
                </div>
                <div
                    className={style.typeSegment}
                >
                    <div
                        onClick={()=>{
                            control('target')
                           
                        }}
                        className={style.socket}
                    >
                        <TargetCommunityMSVG
                            focus={type==='target'?true:false}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div
            className={style.typeDescriptor}
        >
            <AnimatePresence initial={false}>
                {
                    !type &&
                    <motion.div
                        key={`${Math.random()*1000} description`}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={style.description}
                    >
                        Set community type
                    </motion.div>
                }
                {
                    type==='private' &&
                    <motion.div
                        key={`${Math.random()*1000} description`}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={style.description}
                    >
                        Private Community
                    </motion.div>
                }
                {
                    type==='public' &&
                    <motion.div
                        key={`${Math.random()*1000} description`}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={style.description}
                    >
                        Public Community
                    </motion.div>
                }
                {
                    type==='target' &&
                    <motion.div
                        key={`${Math.random()*1000} description`}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className={style.description}
                    >
                        Target Community
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    </div>
  )
}

export default CommunityTypeSelector