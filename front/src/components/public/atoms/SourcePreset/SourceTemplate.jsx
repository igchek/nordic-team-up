import React from 'react'
import classes from './SourceTemplate.modules.css'


const SourceTemplate = (props) => {
  return (
    <div>
        <div className={classes.wrapper}>
            <SvgSelector 
                value={props.value}
                focus={props.focus}
                tier={props.tier}
            />
        </div>
    </div>
  )
}

export default SourceTemplate