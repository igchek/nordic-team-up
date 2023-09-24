import React from 'react'
import SvgSelector from "../../../commonUtils/SvgSelector"
import styles from "./ModalityTemplate.module.scss"
import { useState } from 'react'
import { useAppDispatch } from '../../../../hooks'
import {setSortByVibePreset, setSortBySyncPreset, setSortByGigPreset} from '../../../../store/publicContent'

interface ModalityTemplate {
  value:string
  focus:boolean
  tier:string
}


const ModalityTemplate:React.FC<ModalityTemplate> = (props) => {
const dispatch = useAppDispatch()

  
if (props.value==='vibe'){
  
  const [isVibePreset, setVibePreset] = useState(false)
  



  const vibeSet = () =>{
      setVibePreset(!isVibePreset)
      dispatch(setSortByVibePreset(!isVibePreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>vibeSet()} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isVibePreset}
            tier={'standart'}
        />
      </div>

    </div>
  )
}
else if (props.value==='sync'){
  const [isSyncPreset, setSyncPreset] = useState(false)

  const syncSet = () =>{
    setSyncPreset(!isSyncPreset)
    dispatch(setSortBySyncPreset(!isSyncPreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>syncSet()} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isSyncPreset}
            tier={'standart'}
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
  const gigSet = () =>{
      setGigPreset(!isGigPreset)
      dispatch(setSortByGigPreset(!isGigPreset))
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={()=>gigSet()} className={styles.modalityPresetSocket}>
        <SvgSelector 
            value={props.value}
            focus={isGigPreset}
            tier={'standart'}
        />
      </div>

    </div>
  )
}
}

export default ModalityTemplate