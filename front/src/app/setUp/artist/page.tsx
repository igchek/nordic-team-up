
import React from 'react'

import styles from '../styles.module.scss'
import ArtistSetUp from '@/components/SetUp/ArtsitSetUp'


export default function page() {
  return (
    <div className={styles.page}>
        <ArtistSetUp/>
    </div>
  )
}
