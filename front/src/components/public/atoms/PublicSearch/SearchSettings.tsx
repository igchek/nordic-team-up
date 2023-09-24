import React from 'react'
import styles from "./SearchSettings.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"
import { useState } from "react"
import {motion} from 'framer-motion'

const SearchSettings:React.FC = () => {
  const [isSettingsOn, setSettings] = useState(false)
  const settingsToggle = () => {
      setSettings(!isSettingsOn)
    }

    

  return (
    <motion.div onClick={()=>settingsToggle()} className={styles.wrapper}>
        <SvgSelector 
          value='settings'
          tier='standart'
          focus={isSettingsOn}
        />
    </motion.div>
  )
}

export default SearchSettings