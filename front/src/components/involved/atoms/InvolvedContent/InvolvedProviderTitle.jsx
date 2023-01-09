import React from "react";
import classes from './InvolvedProviderTitle.modules.css'

const InvolvedProviderTitle = (props) => {
    const isFocused = props.focus
    const providerTitle = props.providerTitle
    if (isFocused ==='false'){
        return (
            <div className={classes.wrapperPassive}>
                ${providerTitle}
            </div>
        )
    }

    else {
        return (
            <div className={classes.wrapperActive}>
                ${providerTitle}
            </div>
        )
    }
}

export default InvolvedProviderTitle