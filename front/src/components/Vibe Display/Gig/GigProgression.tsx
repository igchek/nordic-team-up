"use client"
import styles from './styles.module.scss';

import React from 'react'

interface GigProgressionI {

}

const GigProgression:React.FC<GigProgressionI> = (props) => {
  return (
    <div className={styles.wrapper}>Gig Progression</div>
  )
}

export default GigProgression