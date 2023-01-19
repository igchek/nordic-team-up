import React from 'react'
import styles from './SourceTemplate.module.scss'


const SourceTemplate = (props) => {
  return (
        <div className={styles.wrapper}>
            <SvgSelector 
                value={props.value}
                focus={props.focus}
                tier={props.tier}
            />
        </div>
  )
}

export default SourceTemplate