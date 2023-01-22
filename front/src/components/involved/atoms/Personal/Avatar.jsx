import React from "react";
import styles from "./Avatar.module.scss"


const Avatar = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={props.avatar} alt="avatar" />
        </div>
    )
}

export default Avatar