"use client"

import { userData } from '@/lib/models/profiles/user.models';
import styles from './styles.module.scss';


import React from 'react'
import SvgSelector from '@/Utils/SvgSelector';
import LikeUnit from './LikeUnit';
interface LikeOutputI{
    likes:{type:string, quantity:number, userList:userData[]}[]
}
const LikeOutput:React.FC<LikeOutputI> = (props) => {
  return (
    <div className={styles.likeSegment}>
        {props.likes.map((like:{type:string, quantity:number, userList:userData[]})=>{
            return(
                <LikeUnit
                    type={like.type}
                    quantity={like.quantity}
                />
            )
        })}
    </div>
  )
}

export default LikeOutput