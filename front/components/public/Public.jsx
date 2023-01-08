import React from 'react'
import ModalityPreset from './molecules/ModalityPreset/ModalityPreset'
import PublicOutput from './molecules/PublicOutput/PublicOutput'
import PublicSearch from './molecules/PublicSearch/PublicSearch'
import SourcePreset from './molecules/SourcePreset/SourcePreset'
import classes from './Public.modules.css'

const Public = () => {
  return (
    <div className={classes.wrapper}>
        <PublicSearch/>
        <ModalityPreset/>
        <PublicOutput/>
        <SourcePreset/>
    </div>
  )
}

export default Public