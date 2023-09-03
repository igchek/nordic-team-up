import React from "react";
import styles from "./PublicPoster.module.scss"

const PublicPoster = (props) => {

    return (
        <div className={styles.wrapper}>
            <img className={styles.poster} src={require(`@PromoLogo/${props.poster}.jpg`)} alt="poster" />
        </div>
    )
}

export default PublicPoster