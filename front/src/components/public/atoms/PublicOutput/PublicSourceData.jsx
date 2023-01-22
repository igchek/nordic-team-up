import React from "react";
import styles from "./PublicSourceData.module.scss"
import SvgSelector from "../../../commonUtils/SvgSelector";


const PublicSourceData = (props) => {
   
    if (props.sourceType ==="content"){
        return (
            <div className={styles.dataWrapper}>
                <div className={styles.modalityWrapper}>
                    <SvgSelector
                        value={props.modality}
                        tier='standart'
                        foucs='true'
                    />
                </div>
                <div className={styles.audienceWrapper}>
                    <div className={props.foucs==='true'?styles.audienceSocketActive:styles.audienceSocketPassive}>
                        {props.audience}
                    </div>
                </div>                               
            </div>
        )
    }
    else {
        return (
            <div className={styles.sourceTypeWrapper}>
                <SvgSelector
                    value={props.modality}
                    tier='standart'
                    foucs='true'
                />
            </div>
        )
    }
}

export default PublicSourceData