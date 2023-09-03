import React from 'react'
import styles from "./SourcePreset.module.scss"
import SourceTemplate from '../../atoms/SourcePreset/SourceTemplate'

const SourcePreset = () => {



  return (
            <div className={styles.wrapper}>
                        <SourceTemplate
                            value='artist'
                            tier='standart'
                        />
                        <SourceTemplate
                            value='venue'
                            tier='standart'
                        />
            </div>
  )
}

export default SourcePreset