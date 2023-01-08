import React from 'react'
import SvgSelector from '../../../common utils/SvgSelector'
import clasees from './DashItemAtoms.modules.css'



const DashItemModality = (props) => {
  return (
    <div className={props.focus?classes.modalityWrapperActive:classes.modalityWrapperPassive}>
        <div className={classes.modalitySocket}>
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