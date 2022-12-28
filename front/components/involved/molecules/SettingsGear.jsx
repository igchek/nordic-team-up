import React from "react";
import classes from './SettingsGear.modules.css'


const SettingsGear = () => {
    const click = (event) => {

    }

    return (
        <div className={classes.wrapper}>
            <img className={classes.SettingsGear} onClick={click} src="../../../assets/icons/gear.svg" alt="" />
        </div>
    )
}

export default SettingsGear