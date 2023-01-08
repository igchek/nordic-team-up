import React from 'react'
import classes from './DashItemAtoms.modules.css'

const DashItemTitle = (props) => {
  return (
    <div className={classes.firstLineWrapper}>
        <div className={classes.title}>
            {props.title}
        </div>
        <div className={classes.sourceWrapper}>
            <img className={classes.authorLogo} src={props.authorLogo} alt="author logo" />
            <div className={classes.authorName}>
                {props.authorName}
            </div>
        </div>
    </div>
  )
}

export default DashItemTitle