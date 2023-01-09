import React from "react";
import classes from './Avatar.modules.css'


const Avatar = (props) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.avatar} src={props.avatar} alt="avatar" />
        </div>
    )
}

export default Avatar