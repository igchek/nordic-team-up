import Submode from '@/components/Profile/User/Engagement/UserEngagement'
import styles from './styles.module.scss'

import React from 'react'
import UserProfileTop from '@/components/RootLayout/ProlfileTop/UserProfileTop'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.profileLayout}>
      <UserProfileTop/>
      {children}
    </div>
  )
}
