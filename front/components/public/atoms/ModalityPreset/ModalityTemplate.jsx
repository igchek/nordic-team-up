import React from 'react'
import SvgSelector from '../../../common utils/SvgSelector'

const ModalityTemplate = (props) => {
  return (
    <div className={classes.wrapper}>
        <SvgSelector 
            value={props.value}
            focus={props.focus}
            tier={props.tier}
        />
    </div>
  )
}

export default ModalityTemplate