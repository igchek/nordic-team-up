import React from "react";
import classes from './InvolvedContentTitle.modules.css'


const InvolvedContentTitle = (props) => {
    const ContentTitle = props.ContentTitle
    const isFocused = props.focus 
    if (isFocused === 'false'){
        return (
            <div className={classes.wrapperPassive}>
                ${ContentTitle}
            </div>
        )
    }
    else {
        return (
            <div className={classes.wrapperAvtive}>
                ${ContentTitle}
            </div>
        )
    }
}

export default InvolvedContentTitle