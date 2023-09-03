import React, { useEffect } from "react";
import styles from "./Personal.module.scss"
import { useSelector } from "react-redux";
import SettingsGear from "./SettingsGear";
import Avatar from "../atoms/Personal/Avatar";
import NickName from '../atoms/Personal/NickName';


const Personal = () => {
const userNickName = useSelector(({personal})=>personal.userName)
const userAvatar = useSelector(({personal}) => personal.currentAvatar)


const gear = () => {
    
}
    return (
        <div className={styles.wrapper}>
            <Avatar 
                avatar = {userAvatar}
            />
            <NickName 
                nickName={userNickName}
            />
            <SettingsGear/>


        </div>
    )
}

export default Personal