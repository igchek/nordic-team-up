import React from "react";
import styles from "./PublicTitles.module.scss"
import {motion} from 'framer-motion'


interface PublicHostTitlesI {
    modality:string
    focus:boolean
    providerTitle:string
    sourceType:string

}

const PublicHostTitles:React.FC<PublicHostTitlesI> = (props) => {
 
        return (
            <div className={props.focus ?styles.activeWrapper:styles.passiveWrapper}>
                <div className={props.focus ?styles.activeProviderTitle:styles.passiveProviderTitle}>{props.providerTitle}</div>
                <div className={props.focus ?styles.activeSourceType:styles.passiveSourceType}>{props.sourceType}</div>
            </div>
        )
    }


export default PublicHostTitles