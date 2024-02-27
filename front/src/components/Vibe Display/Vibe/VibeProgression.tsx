"use client"

import styles from './styles.module.scss';



import React from 'react'




interface VibeProgressionI {

}

const VibeProgression:React.FC<VibeProgressionI> = (props) => {


  return (
    <div className={styles.vibeProgression}>
        VibeProgression
        {/* TODO:probably pin some sort of blog or real time resonation map display later */}
    </div>
  )
}

export default VibeProgression