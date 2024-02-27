"use client"


import styles from './styles.module.scss';
import { messageData } from '@/lib/models/community/message.models'
import React from 'react'
import MessageTechnical from './MessageTechnical';
import MessageBody from './MessageBody';
import { userData } from '@/lib/models/profiles/user.models';
import { parsedMediaData } from '@/components/common/media/MediaReel';

export interface MessageI {
    emiter:{
        nic:string
        pic:string
        isModerator:boolean
        isArtist:boolean

    }
    postingStatus?:{
        isPosted:boolean
        isPending:boolean
        isCrashed:boolean
    }
    replyData?:{
        userName:string
        text?:string
    }
    media?:parsedMediaData[]
    likeData?:{type:string, quantity:number, userList:userData[]}[]
    messageData:messageData
    isExternal:boolean
    isRead:boolean
}

const Message:React.FC<MessageI> = (props) => {

    if(props.isExternal){
        return(
            <div className={styles.threadPostUnit}>
                <div className={styles.messageWrapper}>
                    <div className={styles.headerColumn}>
                        <div style={{backgroundImage:`url(src/assets/Personal/Avatars/${props.emiter.pic})`}} className={styles.avatar}></div>
                    </div>
                    <div className={styles.bodyColumn}>
                        <MessageBody
                            nic={props.emiter.nic}
                            isModerator={props.emiter.isModerator}
                            isArtist={props.emiter.isArtist}
                            messageData={props.messageData}
                            replyData={props.replyData}
                            media={props.media}
                        />
                    </div>
                    <div className={styles.technicalColumn}>
                        <MessageTechnical
                            postTime={props.messageData.core.date}
                            postingStatus={props.postingStatus}
                            likes={props.likeData}


                        />
                    </div>
                </div>
            </div>

        )
    }
    else{
        return(
            <div className={styles.threadPostUnit}>
                <div className={styles.messageWrapper}>
                    <div className={styles.technicalColumn}>
                        <MessageTechnical
                            postTime={props.messageData.core.date}
                            postingStatus={props.postingStatus}
                            likes={props.likeData}
                        />
                    </div>
                    <div className={styles.bodyColumn}>
                        <MessageBody
                            nic={props.emiter.nic}
                            isModerator={props.emiter.isModerator}
                            isArtist={props.emiter.isArtist}
                            messageData={props.messageData}
                            replyData={props.replyData}
                            media={props.media}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Message