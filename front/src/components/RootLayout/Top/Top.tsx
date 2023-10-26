import React from 'react'
import styles from './top.module.scss'
import Profile from './Profile'
import Authentication from './Authentication'

interface TopI {
    isAuthorised:boolean
}

const Top:React.FC<TopI> = ({isAuthorised}) => {
  return (
    <div className={styles.topWrapper}>
        {
            isAuthorised?
            <Profile
                photo={'doge1'}
            />
            :
            <Authentication/>
        }
    </div>
  )
}

export default Top