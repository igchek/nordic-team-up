import React, { SetStateAction } from 'react'
import  styles from './styles.module.scss'
import { motion, useAnimate } from 'framer-motion'
import { CommunityShort } from './CommunityInput'
import MotionIcon from '@/Utils/MotionIcon'
import PrivateCommunityMSVG from '@/components/common/svg/PrivateCommunityMSVG'
import PublicCommunityMSVG from '@/components/common/svg/PublicCommunityMSVG'
import TargetCommunityMSVG from '@/components/common/svg/TargetCommunityMSVG'
import { styleSheet } from '@/stylesGlobal/variables'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/hooks'
import SetUp, { focusVibeCommunity } from '@/store/SetUp'


interface CommunityUnitI {
    community:CommunityShort
    focus:CommunityShort|null
    focusControl:React.Dispatch<SetStateAction<CommunityShort|null>>
}

const CommunityUnit = ({ community, focus, focusControl}:CommunityUnitI) => {



        return (
            <motion.div
                key={`${Math.random()*1000} Community Unit`}
                style={ focus && focus.id===community.id?{backgroundColor:styleSheet.$interfaceContrast}:{}}
                initial={{
                    opacity:0,
                    height:0
                }}
                animate={{
                    opacity:1,
                    height:'10vh'
                }}
                exit={{
                    opacity:0,
                    height:0
                }}
                onClick={()=>{
                    if(focus && focus.id===community.id){
                        focusControl(null)
                    }
                    else focusControl(community)
                }}
                className={styles.communityUnit}
            >
                <div
                    className={styles.pic}
                >
                    <div
                        className={styles.socket}
                    >
                        <MotionIcon
                            pic={community.pic.url}
                            focus={false}
                        />
                    </div>
                </div>
                <div
                    className={styles.titles}
                >
                    <motion.div
                        style={( focus && focus.id===community.id)?{color:'white'}:{color:'black'}}
                        className={styles.mainTitle}
                    >
                        {community.title}
                    </motion.div>
                    <motion.div
                        style={(focus && focus.id===community.id)?{color:'white'}:{color:'grey'}}
                        className={styles.subtitle}
                    >
                        {community.type==='private' &&
                            'Private community'
                        }
                        {community.type==='public' &&
                            'Public community'
                        }
                        {community.type==='target' &&
                            'Target community'
                        }
                    </motion.div>
                </div>
                <div
                    className={styles.type}
                >
                    <motion.div
                        className={styles.socket}
                    >
                        {
                            community.type==='private' &&
                            <PrivateCommunityMSVG
                                focus={true}
                            />
                        }
                        {
                            community.type==='public' &&
                            <PublicCommunityMSVG
                                focus={true}
                            />
                        }
                        {
                            community.type==='target' &&
                            <TargetCommunityMSVG
                                focus={true}
                            />
                        }
                    </motion.div>
                </div>
            </motion.div>
          )
        }
  

export default CommunityUnit