import React, { useEffect, useState } from "react";
import styles from "./PublicSourceData.module.scss"
import SvgSelector from '../../../commonUtils/SvgSelector';
import { AudienceParams } from "../../../../store/modules/libraries/Content/Vibe";

interface PublicContentSourceData {
    modality:string
    focus:boolean
    audience:AudienceParams
}      


const PublicContentSourceData:React.FC<PublicContentSourceData> = (props) => {
    





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
                        {props.audience.total}
                    </div>
                </div>                               
            </div>
        )
}

export default PublicContentSourceData