import React from 'react'
import classes from './SourcePreset.modules.css'
import SvgSelector from '../../../common utils/SvgSelector'
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



  return (<div>
                <div onClick={artistPreset} className={classes.sourceWrapper}>
                    <div className={classes.artistSocketNormal}>
                        <SourceTemplate
                            value='artist'
                            focus={isArtistPreset}
                            tier='normal'
                        />
                    </div>
                </div>
                <div onClick={venuePreset} className={classes.sourceWrapper}>
                    <div className={classes.venueSocketNormal}>
                        <SourceTemplate
                            value='venue'
                            focus={isVenuePreset}
                            tier='normal'
                        />
                    </div>
                </div>

            </div>
  )
}

export default SourcePreset