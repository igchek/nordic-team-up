import React from "react";
import styles from "./PublicTitles.module.scss"


const PublicTitles = (props) => {
    if (props.sourceType === "content"){
        return (
            <div className={props.focus ?styles.activeWrapper:styles.passiveWrapper}>
                <div className={props.focus ?styles.activeContentTitle:styles.passiveContentTitle}>{props.contentTitle}</div>
                <div className={props.focus ?styles.activeSourceTitle:styles.passiveSourceTitle}>{props.sourceTitle}</div>
            </div>
        )
    }
    else if (props.sourceType ==='artist'){
        return (
            <div className={props.focus ?styles.activeWrapper:styles.passiveWrapper}>
                <div className={props.focus ?styles.activeProviderTitle:styles.passiveProviderTitle}>{props.providerTitle}</div>
                <div className={props.focus ?styles.activeSourceType:styles.passiveSourceType}>{props.sourceType}</div>
            </div>
        )
    }
    else if (props.sourceType ==='venue'){
        return (
            <div className={props.focus ?styles.activeWrapper:styles.passiveWrapper}>
                <div className={props.focus ?styles.activeProviderTitle:styles.passiveProviderTitle}>{props.providerTitle}</div>
                <div className={props.focus ?styles.activeSourceType:styles.passiveSourceType}>{props.sourceType}</div>
            </div>
        )
    }

}

export default PublicTitles