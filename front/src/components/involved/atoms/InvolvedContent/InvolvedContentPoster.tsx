import React from "react";
import styles from './InvolvedContentPoster.module.scss';


const InvolvedContentPoster =(props) => {
    if (props.focus ==='false'){
        return (
            <div className={styles.wrapper}>
                <img className={styles.posterPassive} src={require(`@PromoLogo/${props.img}.jpg`)} alt="poster" />
            </div>
        )
    }
    else {

        return (
            <div className={styles.wrapper}>
                <img className={styles.posterActive} src={require(`@PromoLogo/${props.img}.jpg`)} alt="poster" />
            </div>
        )
    }
}

export default InvolvedContentPoster