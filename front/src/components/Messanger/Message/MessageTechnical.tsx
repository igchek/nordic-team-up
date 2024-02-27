"use client"

import { userData } from '@/lib/models/profiles/user.models';
import LikeOutput from './LikeOutput';
import styles from './styles.module.scss';


import React from 'react'
import MessagePostingStatus from './MessagePostingStatus';

export interface MessageTechnicalI {
    postTime:Date
    postingStatus?:{
        isPosted:boolean
        isPending:boolean
        isCrashed:boolean
    }

    likes?:{type:string, quantity:number, userList:userData[]}[]
}

const MessageTechnical:React.FC<MessageTechnicalI> = (props) => {
  return (
    <div className={styles.technicalWrapper}>
        <div className={styles.postTimeWrapper}>
            <div className={styles.postTimeSocket}>
                {`${props.postTime.getHours()}:${props.postTime.getMinutes()}`}
            </div>
        </div>
        
        <div className={styles.likesWrapper}>
            {
                props.likes?
                <LikeOutput
                    likes={props.likes}
                />
                :
                null
            }
        </div>
        <div className={styles.statusWrapper}>
            {
                props.postingStatus?
                <MessagePostingStatus
                    isPosted={props.postingStatus.isPosted}
                    isPending={props.postingStatus.isPending}
                    isCrashed={props.postingStatus.isCrashed}
                 />
                 :
                 null
            }
            
        </div>
        

    </div>
  )
}

export default MessageTechnical