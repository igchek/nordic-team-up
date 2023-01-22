import React from 'react'
import styles from "./SearchSettings.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setPublicSettingsFocus } from '../../../../store/focus'

const SearchSettings = () => {
  const [isSettingsOn, setSettings] = useState('false')
  const dispatch = useDispatch()
  const settingsToggle = () => {
    if (isSettingsOn==='true'){
      setSettings('true')
      dispatch(setPublicSettingsFocus(isSettingsOn))}
    else {
      setSettings('false')
      dispatch(setPublicSettingsFocus(isSettingsOn))
    }
    }

    

  return (
    <div className={styles.wrapper}>
        <SvgSelector 
          value='settings'
          tier='normal'
          focus={isSettingsOn}
        />
    </div>
  )
}

export default SearchSettings