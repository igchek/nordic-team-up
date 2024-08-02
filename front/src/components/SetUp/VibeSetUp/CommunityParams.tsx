import React, { useState } from 'react'
import { CommunityShort } from './CommunityInput'
import ParameterSet from '@/Utils/ParameterSet'
import VibeMSVG from '@/components/common/svg/VibeMSVG'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'


interface CommunityParams {
    type:'public'|'private'|'target'
    community?:CommunityShort

}


const CommunityParams = ({type, community}:CommunityParams) => {
    
    const [localization, setLocalization] = useState(community?community.params.localization:false)
    const [internalModeration, setInternalModeration] = useState(community?community.params.internalModeration:false)
    const [publicVisibility, setPublicVisibility] = useState(community?community.params.publicVisibility:false)

    const [mediaUpload, setMediaUpload] = useState(community?community.params.mediaUpload:false)
    const [templateOffer, setTemplateOffer] = useState(community?community.params.templateOffer:false)
    const [communityChat, setCommunityChat] =useState(community?community.params.chat:false)
    
  return (
    <motion.div
        className={styles.params}
    >
        <motion.div
            className={styles.title}
        >
            Community Parameters
        </motion.div>
        <div
            className={styles.paramsOutput}
        >
             <AnimatePresence initial={false}>
        {
            type==='public' &&
            <ParameterSet
                defaultState={communityChat}
                title='Permit internal moderation'
                MSVG={VibeMSVG({focus:communityChat})}
                control={setCommunityChat}
            />
        }
        {
            type==='private'||'target' &&
            <ParameterSet
                defaultState={publicVisibility}
                title='Set public visibility'
                MSVG={VibeMSVG({focus:publicVisibility})}
                control={setPublicVisibility}
            />
        }
        {
            type==='public' &&
            <ParameterSet
                defaultState={localization}
                title='Permit autonomous localization'
                MSVG={VibeMSVG({focus:localization})}
                control={setLocalization}
            />
        }
        {
            type==='private'||'target' &&
            <ParameterSet
                defaultState={internalModeration}
                title='Permit internal moderation'
                MSVG={VibeMSVG({focus:internalModeration})}
                control={setInternalModeration}
            />
        }
        {
            type==='public' &&
            <ParameterSet
                defaultState={mediaUpload}
                title='Permit media upload'
                MSVG={VibeMSVG({focus:mediaUpload})}
                control={setMediaUpload}
            />
        }
        {
            type==='target' &&
            <ParameterSet
                defaultState={templateOffer}
                title='Set template offer boundries'
                MSVG={VibeMSVG({focus:templateOffer})}
                control={setTemplateOffer}
            />
        }
        </AnimatePresence>
        </div>
       
    </motion.div>
  )
}

export default React.memo(CommunityParams)