import React from 'react'
import ModalityPreset from './molecules/ModalityPreset/ModalityPreset'
import PublicOutput from './molecules/PublicOutput/PublicOutput'
import PublicSearch from './molecules/PublicSearch/PublicSearch'
import SourcePreset from './molecules/SourcePreset/SourcePreset'
import styles from './Public.module.scss'

const Public = () => {
  return (
    <div className={styles.wrapper}>
        <PublicSearch/>
        <ModalityPreset/>
        <PublicOutput/>
        <SourcePreset/>
    </div>
  )
}

export default Public