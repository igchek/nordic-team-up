"use client"
import styles from './styles.module.scss'

import React from 'react'
import UserProfileTop from '@/components/RootLayout/ProlfileTop/UserProfileTop'
import { useAppSelector } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import ArtistProfileTop from '@/components/RootLayout/ProlfileTop/ArtistProfileTop'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const focusAccount = useAppSelector(({user})=>user.focusSubAccount)
  return (
    <motion.div className={styles.profileLayout}>
      <AnimatePresence>
        {
          !focusAccount &&
          <UserProfileTop/>
        }
        {
          focusAccount?.type==='artist' &&
          <ArtistProfileTop/>
        }
      </AnimatePresence>
      
      {children}
    </motion.div>
  )
}
