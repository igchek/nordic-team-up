import React from 'react'
import styles from "./SourcePreset.module.scss"
import SourceTemplate from '../../atoms/SourcePreset/SourceTemplate'

const SourcePreset = () => {



  return (
            <div className={styles.wrapper}>
                        <SourceTemplate
                            value='artist'
                            focus='false'
                            tier='normal'
                        />
                        <SourceTemplate
                            value='venue'
                            focus='false'
                            tier='normal'
                        />
            </div>
  )
}

export default SourcePreset