import React from 'react'
import SvgSelector from '../../../common utils/SvgSelector'
import styles from './DashItemAtoms.module.scss'



const DashItemModality = (props) => {
  return (
    <div className={props.focus?styles.modalityWrapperActive:styles.modalityWrapperPassive}>
        <div className={styles.modalitySocket}>
            <SvgSelector
                value={props.modality}
                focus='true'
                tier='minor'
            />
        </div>
    </div>
  )
}

export default DashItemModality