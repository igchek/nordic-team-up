import React from "react";
import styles from "./PublicTitles.module.scss"

interface PublicContentTitlesI {
    modality:string
    focus:boolean
    contentTitle:string
    sourceTitle:string

}


const PublicContentTitles:React.FC<PublicContentTitlesI> = (props) => {
        return (
            <div className={props.focus ?styles.activeWrapper:styles.passiveWrapper}>
                <div className={props.focus ?styles.activeContentTitle:styles.passiveContentTitle}>{props.contentTitle}</div>
                <div className={props.focus ?styles.activeSourceTitle:styles.passiveSourceTitle}>{props.sourceTitle}</div>
            </div>
        )

}

export default PublicContentTitles