import React from 'react'
import SvgSelector from "../../../commonUtils/SvgSelector"
import styles from "./ModalityTemplate.module.scss"

const ModalityTemplate = (props) => {
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

export default ModalityTemplate