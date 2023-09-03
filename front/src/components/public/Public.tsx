import React from 'react'
import PublicOutput from './molecules/PublicOutput/PublicOutput'
import PublicSearch from './molecules/PublicSearch/PublicSearch'
import SourcePreset from './molecules/SourcePreset/SourcePreset'
import styles from "./Public.module.scss"

const Public:React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <PublicSearch/>
        <PublicOutput/>
        <SourcePreset/>
    </div>
  )
}

export default Public