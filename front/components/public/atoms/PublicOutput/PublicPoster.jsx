import React from "react";
import classes from './PublicPoster.modules.css'

const PublicPoster = (props) => {

    return (
        <div className={classes.wrapper}>
            <img className={classes.poster} src={props.poster} alt="poster" />
        </div>
    )
}

export default PublicPoster