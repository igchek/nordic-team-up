import React from 'react'
import PersonalSection from '../components/involved/PersonalSection'
import Public from '../components/public/Public'
import Focus from '../components/focus/Focus'
import styles from "./Pages.module.scss"

const Main = () => {
  return (
    <div className={styles.browserWrapper}>
        <PersonalSection/>
        <Focus/>
        <Public/>
    </div>
  )
}

export default Main