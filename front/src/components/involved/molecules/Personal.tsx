import React, { useEffect } from "react";
import styles from "./Personal.module.scss"
import { useAppSelector } from "../../../hooks";
import SettingsGear from "./SettingsGear";
import Avatar from "../atoms/Personal/Avatar";
import NickName from '../atoms/Personal/NickName';
import {motion} from 'framer-motion'

interface Personal {
 
}


const Personal:React.FC<Personal> = () => {
const userProfile = useAppSelector(({personal})=>personal)



    return (
        <motion.div className={styles.wrapper}>
            <Avatar 
                avatar = {userProfile.profileFlavour.profilePic}
            />
            <NickName 
                nickName={userProfile.profileFlavour.profileNick}
            />
            <SettingsGear/>


        </motion.div>
    )
}

export default Personal