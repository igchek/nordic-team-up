import React, { useEffect, useState } from "react";
import styles from "./PublicSourceData.module.scss"
import SvgSelector from '../../../commonUtils/SvgSelector';


const PublicSourceData = (props) => {
    




    if (props.sourceType ==="content"){
        return (
            <div className={styles.dataWrapper}>
                <div className={styles.modalityWrapper}>
                    <div className={styles.modalitySocket}>
                        <SvgSelector
                            value={props.modality}
                            tier='standart'
                            focus={props.focus}
                        />
                    </div>
                </div>
                <div className={styles.audienceWrapper}>
                    <div className={props.focus?styles.audienceSocketActive:styles.audienceSocketPassive}>
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
                    focus={props.focus}
                />
            </div>
        )
    }
}

export default PublicSourceData