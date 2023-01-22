import React from 'react'
import PersonalFocus from '../components/focus/PersonalFocus/PersonalFocus'
import PersonalSection from '../components/involved/PersonalSection'
import Public from '../components/public/Public'
import styles from "./Pages.module.scss"

const Personal = () => {
  return (
    <div className={styles.browserWrapper}>
        <PersonalSection/>
        <PersonalFocus/>
        <Public/>
    </div>
  )
}

export default Personal