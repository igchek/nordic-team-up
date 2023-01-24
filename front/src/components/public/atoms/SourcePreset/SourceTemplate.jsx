import React from "react"
import styles from "./SourceTemplate.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector"


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