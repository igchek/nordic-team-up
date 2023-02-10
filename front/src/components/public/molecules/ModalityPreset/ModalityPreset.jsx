import React from 'react'
import styles from "./ModalityPreset.module.scss";
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import ModalityTemplate from '../../atoms/ModalityPreset/ModalityTemplate';
import {setSortByVibePreset, setSortBySyncPreset, setSortByGigPreset} from '../../../../store/publicContent'

const ModalityPreset = () => {
  

 

  return (
    <div className={styles.wrapper}>
      <ModalityTemplate
        value='vibe'
        focus={false}
        tier='standart'
      />
      <ModalityTemplate
        value='sync'
        focus={false}
        tier='standart'
      />
      <ModalityTemplate
        value='gig'
        focus={false}
        tier='standart'
      />
    </div>
  )
}

export default ModalityPreset