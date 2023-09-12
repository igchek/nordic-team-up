import React from "react";
import styles from "./NickName.module.scss"
import {motion} from 'framer-motion'

interface  NickNameI {
    nickName:string
}

const NickName:React.FC<NickNameI> = (props) => {
    return (
        <motion.div className={styles.wrapper}>
            {props.nickName}
        </motion.div>
    )
}

export default NickName