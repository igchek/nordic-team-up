import React from "react";
import classes from './NickName.modules.css'


const NickName = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.nickName}
        </div>
    )
}

export default NickName