import React from "react";
import SvgSelector from "../../commonUtils/SvgSelector";
import styles from "./SettingsGear.module.scss";
import { useState } from "react";


const SettingsGear = () => {
    const [isFocused, setFocus] =useState ('false')
    const click = (event) => {
        if (isFocused){
            setFocus('false')
        }
        else {
            setFocus('true')
        }
    }

    return (
        <div className={styles.wrapper}>
            <SvgSelector
                value='gear'
                tier='standart'
                focus={isFocused}
            />
        </div>
    )
}

export default SettingsGear