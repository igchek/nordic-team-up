import React from 'react'
import styles from "./SearchSettings.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setPublicSettingsFocus } from '../../../../store/focus'

const SearchSettings = () => {
  const [isSettingsOn, setSettings] = useState(false)
  const dispatch = useDispatch()
  const settingsToggle = () => {
      setSettings(!isSettingsOn)
      dispatch(setPublicSettingsFocus(!isSettingsOn))
    }

    

  return (
    <div onClick={()=>settingsToggle()} className={styles.wrapper}>
        <SvgSelector 
          value='settings'
          tier='standart'
          focus={isSettingsOn}
        />
    </div>
  )
}

export default SearchSettings