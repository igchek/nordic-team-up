import React from "react";
import classes from './Personal.modules.css'
import { useSelector } from "react-redux";
import personal from "../../../store/personal";
import Avatar from "../../involved/atoms/Personal/Avatar";
import NickName from "../atoms/Personal/NickName";
import SettingsGear from "./SettingsGear";


const Personal = () => {
const userNickName = useSelector(({personal}) => state.userName)
const userAvatar = useSelector(({personal}) => state.currentAvatar)
const gear = () => {
    
}
    return (
        <div className={classes.wrapper}>
            <Avatar 
                src = {userAvatar}
            />
            <NickName 
                nickName={userNickName}
            />
            <SettingsGear/>


        </div>
    )
}

export default Personal