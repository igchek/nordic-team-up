"use client"
import styles from './styles.module.scss'
import { motion,AnimatePresence } from 'framer-motion'

interface UserDescriptionI{
  log:string
  nick:string
  geo:string
  email:string
}


import React from 'react'
import UserNick from './UserNick'
import UserLog from './UserLog'
import UserEmail from './UserEmail'
import UserGeo from './UserGeo'

const UserDescription:React.FC<UserDescriptionI> = ({log, nick, geo, email}) => {
  
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    className={styles.Description}>
      <AnimatePresence>
      <UserNick
        value={nick}
      />
      <UserLog
        value={log}
        />
      <UserEmail
        value={email}
      />
      <UserGeo
        value={geo}
      />
      </AnimatePresence>
    </motion.div>
  )
}

export default UserDescription