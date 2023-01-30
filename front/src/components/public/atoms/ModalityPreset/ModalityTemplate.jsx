import React from 'react'
import SvgSelector from "../../../commonUtils/SvgSelector"
import styles from "./ModalityTemplate.module.scss"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSortByVibePreset, setSortBySyncPreset, setSortByGigPreset} from '../../../../store/publicContent'

const ModalityTemplate = (props) => {

const dispatch = useDispatch()  
  
if (props.value==='vibe'){
  const [isVibePreset, setVibePreset] = useState('false')
  const vibeSet = (e) =>{
    if (isVibePreset==='false'){
      setVibePreset('true')
      console.log('vibe preset on')
      dispatch(setSortByVibePreset(isVibePreset))
    }
    else {
      setVibePreset('false')
      console.log('vibe preset off')
      dispatch(setSortByVibePreset(isVibePreset))
    }
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={vibeSet} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isVibePreset}
            tier={props.tier}
        />
      </div>

    </div>
  )
}
else if (props.value==='sync'){
  const [isSyncPreset, setSyncPreset] = useState('false')
  const syncSet = (e) =>{
    if (isSyncPreset==='false'){
      setSyncPreset('true')
      console.log('sync preset on')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
    else {
      setSyncPreset('false')
      console.log('sync preset off')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={syncSet} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isSyncPreset}
            tier={props.tier}
        />
      </div>

    </div>
  )
}
else if (props.value==='gig'){
  const [isGigPreset, setGigPreset] = useState('false')
  const gigSet = (e) =>{
    if (isGigPreset==='false'){
      setGigPreset('true')
      console.log('gig preset on')
      dispatch(setSortByGigPreset(isGigPreset))
    }
    else {
      setGigPreset('false')
      console.log('gig preset off')
      dispatch(setSortByGigPreset(isGigPreset))
    }
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={gigSet} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isGigPreset}
            tier={props.tier}
        />
      </div>

    </div>
  )
}
}

export default ModalityTemplate