import React, { useState } from 'react'
import styles from '../common.module.scss'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import MotionIcon from '@/Utils/MotionIcon'
import VibrationMSVG from '@/components/common/svg/VibrationMSVG'

interface VibeSectionAudience {
  total:number
  local?:{
    quantity:number
    geoPic:string
  }
}

const VibeSectionAudience = ({total, local}:VibeSectionAudience) => {
  const [localFocus, setLocalFocus] = useState(false)




  return (
    <motion.div
      key={`${Math.random()*1000} audience`}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className={styles.audience}
    >
      <motion.div
        layout
        className={styles.wrapper}
      >
        <div
          className={styles.total}
        >
          <div
            className={styles.iconSegment}
          >
            <div
              onClick={(e)=>{
                e.stopPropagation()
                setLocalFocus(!localFocus)
              }}
              className={styles.iconSocket}
            >
              <VibrationMSVG
                focus={localFocus}
              />
            </div>
          </div>
          <div
            className={styles.output}
          >
            {total}
          </div>
        </div>
        <AnimatePresence>
          {
            localFocus && local &&
              <motion.div
                layout
                key={`${Math.random()*1000} local output`}
                initial={{opacity:0, width:0}}
                animate={{opacity:1, width:'auto'}}
                exit={{opacity:0, width:0}}
                className={styles.localAudience}
              >
                <div
                  className={styles.geoSegment}
                >
                  <div
                    className={styles.geoSocket}
                  >
                    <MotionIcon
                      focus={false}
                      pic={local.geoPic}
                    />
                  </div>
                </div>
                <div
                  className={styles.localOutput}
                >
                  {local.quantity}
                </div>
              </motion.div>
          }
        </AnimatePresence>
        
      </motion.div>

    </motion.div>
  )
}

export default VibeSectionAudience