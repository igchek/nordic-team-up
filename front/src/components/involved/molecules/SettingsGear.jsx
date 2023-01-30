import React from "react";
import SvgSelector from "../../commonUtils/SvgSelector";
import styles from "./SettingsGear.module.scss";
import { useState } from "react";


const SettingsGear = () => {
    const [isFocused, setFocus] =useState ('false')
    const click = (event) => {
        if (isFocused){
            setFocus('false')
            console.log('click')
        }
        else {
            setFocus('true')
            console.log('click')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div onClick={click} className={styles.socket}>
                <SvgSelector
                    value='gear'
                    tier='standart'
                    focus={isFocused}
                />
            </div>

        </div>
    )
}

export default SettingsGear