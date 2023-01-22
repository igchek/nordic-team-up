import React from 'react'
import styles from "./ModalityPreset.module.scss";
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import ModalityTemplate from '../../atoms/ModalityPreset/ModalityTemplate';

const ModalityPreset = () => {
  const [isVibePreset, setVibePreset] = useState('false')
  const [isSyncPreset, setSyncPreset] = useState('false')
  const [isGigPreset, setGigPreset] = useState('false')
  const dispatch = useDispatch()


  const vibeSet = (e) =>{
    if (isVibePreset==='false'){
      setVibePreset('true')
      dispatch(setSortByVibePreset(isVibePreset))
    }
    else {
      setVibePreset('false')
      dispatch(setSortByVibePreset(isVibePreset))
    }
  }

  const syncSet = (e) =>{
    if (isSyncPreset==='false'){
      setSyncPreset('true')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
    else {
      setSyncPreset('false')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
  }

  const gigSet = (e) =>{
    if (isGigPreset==='false'){
      setGigPreset('true')
      dispatch(setSortByGigPreset(isGigPreset))
    }
    else {
      setGigPreset('false')
      dispatch(setSortByGigPreset(isGigPreset))
    }
  }

  return (
    <div className={styles.wrapper}>
      <ModalityTemplate
        onClick={vibeSet}
        value='vibe'
        focus={isVibePreset}
        tier='standart'
      />
      <ModalityTemplate
        onClick={syncSet}
        value='sync'
        focus={isSyncPreset}
        tier='standart'
      />
      <ModalityTemplate
        onClick={gigSet}
        value='gig'
        focus={isGigPreset}
        tier='standart'
      />
    </div>
  )
}

export default ModalityPreset