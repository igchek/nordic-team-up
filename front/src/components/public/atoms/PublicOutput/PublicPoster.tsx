import React from "react";
import styles from "./PublicPoster.module.scss"
import {motion} from 'framer-motion'

interface PublicPosterI {
    poster:string
}

const PublicPoster:React.FC<PublicPosterI> = (props) => {

    return (
        <motion.div className={styles.wrapper}>
            <img className={styles.poster} src={`src/assets/PromoLogo/${props.poster}.jpg`} alt="poster" />
        </motion.div>
    )
}

export default PublicPoster