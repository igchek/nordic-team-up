import React from "react";
import styles from './NickName.module.scss'


const NickName = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.nickName}
        </div>
    )
}

export default NickName