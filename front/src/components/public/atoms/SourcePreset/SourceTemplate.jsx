import React from "react"
import styles from "./SourceTemplate.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {setSortByArtistPreset, setSortByVenuePreset} from '../../../../store/publicContent'


const SourceTemplate = (props) => {
  const dispatch = useDispatch()
  
  if (props.value==='artist'){
    const [isArtistPreset, setArtistPreset] = useState('false')
    const artistSet = (e) =>{
      if (isArtistPreset==='false'){
        setArtistPreset('true')
        console.log('artist preset on')
        dispatch(setSortByArtistPreset(isArtistPreset))
      }
      else {
        setArtistPreset('false')
        console.log('artist preset off')
        dispatch(setSortByArtistPreset(isArtistPreset))
      }
    }
    return (
      <div className={styles.wrapper}>
        <div onClick={artistSet} className={styles.modalityPresetSocket}>
          <SvgSelector 
                value={props.value}
                focus={isArtistPreset}
                tier={props.tier}
            />
        </div>
      </div>)
  }
  else {
    const [isVenuePreset, setVenuePreset] = useState('false')
    const venueSet = (e) =>{
      if (isVenuePreset==='false'){
        setVenuePreset('true')
        console.log('venue preset on')
        dispatch(setSortByVenuePreset(isVenuePreset))
      }
      else {
        setArtistPreset('false')
        console.log('venue preset off')
        dispatch(setSortByVenuePreset(isVenuePreset))
      }
    }
    return (
      <div className={styles.wrapper}>
        <div onClick={venueSet} className={styles.modalityPresetSocket}>
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