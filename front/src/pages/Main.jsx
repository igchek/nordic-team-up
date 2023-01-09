import React from 'react'
import PersonalSection from '../components/involved/PersonalSection'
import Public from '../components/public/Public'
import Focus from '../components/focus/Focus'
import classes from './Pages.modules.css'

const Main = () => {
  return (
    <div className={classes.browserWrapper}>
        <PersonalSection/>
        <Focus/>
        <Public/>
    </div>
  )
}

export default Main