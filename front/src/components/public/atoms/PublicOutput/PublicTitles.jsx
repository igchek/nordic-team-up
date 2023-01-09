import React from "react";
import classes from './PublicTitles.modules.css'


const PublicTitles = (props) => {
    if (props.sourceType === 'content'){
        return (
            <div className={props.focus==='true'?classes.activeWrapper:classes.passiveWrapper}>
                <div className={props.focus==='true'?classes.activeContentTitle:classes.passiveContentTitle}>{props.contentTitle}</div>
                <div className={props.focus==='true'?classes.activeSourceTitle:classes.passiveSourceTitle}>{props.sourceTitle}</div>
            </div>
        )
    }
    else if (props.sourceType ==='artist'){
        return (
            <div className={props.focus==='true'?classes.activeWrapper:classes.passiveWrapper}>
                <div className={props.focus==='true'?classes.activeProviderTitle:classes.passiveProviderTitle}>{props.providerTitle}</div>
                <div className={props.focus==='true'?classes.activeSourceType:classes.passiveSourceType}>{props.sourceType}</div>
            </div>
        )
    }
    else if (props.sourceType ==='venue'){
        return (
            <div className={props.focus==='true'?classes.activeWrapper:classes.passiveWrapper}>
                <div className={props.focus==='true'?classes.activeProviderTitle:classes.passiveProviderTitle}>{props.providerTitle}</div>
                <div className={props.focus==='true'?classes.activeSourceType:classes.passiveSourceType}>{props.sourceType}</div>
            </div>
        )
    }

}

export default PublicTitles