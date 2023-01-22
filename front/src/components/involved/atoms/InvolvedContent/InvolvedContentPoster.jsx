import React from "react";
import styles from './InvolvedContentPoster.module.scss';


const InvolvedContentPoster =(props) => {
    if (props.focus ==='false'){
        return (
            <div className={styles.wrapper}>
                <img className={styles.posterPassive} src={props.poster} alt="poster" />
            </div>
        )
    }
    else {

        return (
            <div className={styles.wrapper}>
                <img className={styles.posterActive} src={props.poster} alt="poster" />
            </div>
        )
    }
}

export default InvolvedContentPoster