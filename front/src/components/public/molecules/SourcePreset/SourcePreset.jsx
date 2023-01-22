import React from 'react'
import styles from "./SourcePreset.module.scss"
import {useDispatch} from 'react-redux'
import {useState} from 'react'

const SourcePreset = () => {
    const dispatch = useDispatch()
    const [isArtistPreset, setArtistPreset] = useState('false')
    const [isVenuePreset, setVenuePreset] = useState('false')

    const artistPreset = () => {
        if (isArtistPreset==='false'){
            setArtistPreset('true')
            dispatch(setSortByArtistPreset(isArtistPreset))
        }
        else {
            setArtistPreset('false')
            dispatch(setSortByArtistPreset(isArtistPreset))
        }
    }

    const venuePreset = () => {
        if (isVenuePreset==='false'){
            setVenuePreset('true')
            dispatch(setSortByVenuePreset(isVenuePreset))
        }
        else {
            setVenuePreset('false')
            dispatch(setSortByVenuePreset(isVenuePreset))
        }
    }



  return (
            <div className={styles.wrapper}>
                        <SourceTemplate
                            onClick={artistPreset}
                            value='artist'
                            focus={isArtistPreset}
                            tier='normal'
                        />
                        <SourceTemplate
                            onClick={venuePreset}
                            value='venue'
                            focus={isVenuePreset}
                            tier='normal'
                        />
            </div>
  )
}

export default SourcePreset