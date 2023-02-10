import React, { useEffect } from 'react'
import SvgSelector from "../../../commonUtils/SvgSelector"
import styles from "./ModalityTemplate.module.scss"
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {setSortByVibePreset, setSortBySyncPreset, setSortByGigPreset} from '../../../../store/publicContent'

const ModalityTemplate = (props) => {
const dispatch = useDispatch()

  
if (props.value==='vibe'){
  
  const [isVibePreset, setVibePreset] = useState(false)
  

  // useEffect(()=>{
  //   console.log(`vibe preset is ${isVibePreset}`)
  // },
  // [isVibePreset])

  // useEffect(()=>{
  //   console.log(`vibe preset mounted is ${isVibePreset}`)
  // },
  // [])


  const vibeSet = (e) =>{
      setVibePreset(!isVibePreset)
      dispatch(setSortByVibePreset(!isVibePreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>vibeSet()} className={styles.modalityPresetSocket}>
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
  const [isSyncPreset, setSyncPreset] = useState(false)
  // useEffect(()=>{
  //   console.log(`sync preset mounted is ${isSyncPreset}`)
  // },
  // [])

  // useEffect(()=>{
  //   console.log(`sync preset is ${isSyncPreset}`)
  // },
  // [isSyncPreset])

  const syncSet = (e) =>{
    setSyncPreset(!isSyncPreset)
    dispatch(setSortBySyncPreset(!isSyncPreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>syncSet()} className={styles.modalityPresetSocket}>
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
  const [isGigPreset, setGigPreset] = useState(false)

  // useEffect(()=>{
  //   console.log(`gig preset mounted is ${isGigPreset}`)
  // },
  // [])

  // useEffect(()=>{
  //   console.log(`gig preset mounted is ${isGigPreset}`)
  // },
  // [isGigPreset])
  const gigSet = (e) =>{
      setGigPreset(!isGigPreset)
      dispatch(setSortByGigPreset(!isGigPreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>gigSet()} className={styles.modalityPresetSocket}>
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