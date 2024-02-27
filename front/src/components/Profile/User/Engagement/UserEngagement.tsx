"use client"
import React, { useState } from 'react' 
import styles from './styles.module.scss'
import EngagementSelector from './EngagementSelector'
import SvgSelector from '@/Utils/SvgSelector'
import { useAppSelector } from '@/hooks'
import { AnimatePresence } from 'framer-motion'

interface UserEngagementI {
}

const UserEngagement:React.FC<UserEngagementI> = () => {
  const [isFocused, setFocus] = useState(false)
  const subAccounts = useAppSelector(({user})=>user.subAccounts)


  return (
    <>

      <div className={styles.engagementHeader}>
        Engagement
        <div className={styles.iconWrapper}>
          <div
            onClick={()=>{
              setFocus(!isFocused)
            }}
          className={styles.iconSocket}>
            <SvgSelector
              value='networking'
              tier='standart'
              focus={isFocused?true:false}
            />
          </div>
        </div>
      </div>
      

    <AnimatePresence>
      {isFocused &&
        <EngagementSelector/>
      }
      </AnimatePresence>
    </>
    
  )
}

export default UserEngagement