import React from 'react'
import PersonalFocus from '../components/focus/Personal Focus/PersonalFocus'
import PersonalSection from '../components/involved/PersonalSection'
import Public from '../components/public/Public'

const Personal = () => {
  return (
    <div>
        <PersonalSection/>
        <PersonalFocus/>
        <Public/>
    </div>
  )
}

export default Personal