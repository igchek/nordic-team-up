import React from "react";
import SvgSelector from "../../commonUtils/SvgSelector";
import styles from "./SettingsGear.module.scss";
import { useState } from "react";
import {motion} from 'framer-motion'

interface SettingsGearI{

}

const SettingsGear:React.FC<SettingsGearI> = () => {
    const [isFocused, setFocus] =useState (false)
    const click = () => {
        if (isFocused){
            setFocus(false)
            console.log('click')
        }
        else {
            setFocus(true)
            console.log('click')
        }
    }

    return (
        <motion.div className={styles.wrapper}>
            <motion.div onClick={click} className={styles.socket}>
                <SvgSelector
                    value='gear'
                    tier='standart'
                    focus={isFocused}
                />
            </motion.div>

        </motion.div>
    )
}

export default SettingsGear