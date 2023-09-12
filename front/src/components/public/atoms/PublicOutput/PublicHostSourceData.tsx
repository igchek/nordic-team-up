import React, { useEffect, useState } from "react";
import styles from "./PublicSourceData.module.scss"
import SvgSelector from '../../../commonUtils/SvgSelector';

interface PubliHostSourceDataI {
    modality:string
    focus:boolean
}      


const PublicHostSourceData:React.FC<PubliHostSourceDataI> = (props) => {
    
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

export default PublicHostSourceData