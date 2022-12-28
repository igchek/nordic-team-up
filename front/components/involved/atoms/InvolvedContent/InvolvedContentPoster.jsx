import React from "react";
import classes from './InvolvedContentPoster.modules.css'


const InvolvedContentPoster =(props) => {
    if (props.focus ==='false'){
        return (
            <div className={classes.wrapper}>
                <img className={classes.posterPassive} src={props.poster} alt="poster" />
            </div>
        )
    }
    else {

        return (
            <div className={classes.wrapper}>
                <img className={classes.posterActive} src={props.poster} alt="poster" />
            </div>
        )
    }
}

export default InvolvedContentPoster