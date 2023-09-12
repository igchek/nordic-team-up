import React from "react";
import styles from "./Avatar.module.scss"
import {motion} from 'framer-motion'

interface AvatarI {
    avatar:string
}

const Avatar:React.FC<AvatarI> = (props) => {
    return (
        <motion.div className={styles.wrapper}>
            <motion.img className={styles.avatar} src={require(`@/assets/Personal/Avatars/${props.avatar}.jpg`)} alt="avatar" />
        </motion.div>
    )
}

export default Avatar