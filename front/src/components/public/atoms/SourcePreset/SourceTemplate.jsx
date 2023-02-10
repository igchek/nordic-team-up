import React, { useEffect } from "react"
import styles from "./SourceTemplate.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {setSortByArtistPreset, setSortByVenuePreset} from '../../../../store/publicContent'


const SourceTemplate = (props) => {
  const dispatch = useDispatch()
  
  
  if (props.value==='artist'){
    const [isArtistPreset, setArtistPreset] = useState(false)
    useEffect(()=>{
      console.log(`artist preset is ${isArtistPreset}`)
    },
    [])
    const artistSet = (e) =>{
      if (!isArtistPreset){
        setArtistPreset(!isArtistPreset)
        console.log(`artist preset is ${!isArtistPreset}`)
        dispatch(setSortByArtistPreset(!isArtistPreset))
      }
      else {
        setArtistPreset(!isArtistPreset)
        console.log(`artist preset is ${!isArtistPreset}`)
        dispatch(setSortByArtistPreset(!isArtistPreset))
      }
    }
    return (
      <div className={styles.wrapper}>
        <div onClick={()=>artistSet()} className={styles.modalityPresetSocket}>
          <SvgSelector 
                value={props.value}
                focus={isArtistPreset}
                tier={props.tier}
            />
        </div>
      </div>)
  }
  else {
    const [isVenuePreset, setVenuePreset] = useState(false)
    useEffect(()=>{
      console.log(`venue preset is ${isVenuePreset}`)
    },
    [])
    const venueSet = (e) =>{
      if (!isVenuePreset){
        setVenuePreset(!isVenuePreset)
        console.log(`venue preset id ${!isVenuePreset}`)
        dispatch(setSortByVenuePreset(!isVenuePreset))
      }
      else {
        setVenuePreset(!isVenuePreset)
        console.log('venue preset off')
        dispatch(setSortByVenuePreset(!isVenuePreset))
      }
    }
    return (
      <div className={styles.wrapper}>
        <div onClick={()=>venueSet()} className={styles.modalityPresetSocket}>
          <SvgSelector 
                value={props.value}
                focus={isVenuePreset}
                tier={props.tier}
            />
        </div>
      </div>)
  }
}

export default SourceTemplate