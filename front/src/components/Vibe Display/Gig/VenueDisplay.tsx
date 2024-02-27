"use client"
import styles from './styles.module.scss';

import React from 'react'

interface VenueDisplayI {

}

const VenueDisplay:React.FC<VenueDisplayI> = (props) => {
  return (
    <div className={styles.wrapper}>Venue Display</div>
  )
}

export default VenueDisplay