import React, { useState } from 'react'
import styles from "./SourcePreset.module.scss"
import SourceTemplate from '../../atoms/SourcePreset/SourceTemplate'

const SourcePreset:React.FC = () => {
const [isArtistPreset, setArtistPreset] = useState (false)
const [isVenuePreset, setVenuePreset] = useState (false)

  return (
            <div className={styles.wrapper}>
                        <SourceTemplate
                            value='artist'
                            focus={isArtistPreset}
                        />
                        <SourceTemplate
                            value='venue'
                            focus={isVenuePreset}
                        />
            </div>
  )
}

export default SourcePreset