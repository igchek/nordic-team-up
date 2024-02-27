"use client"

import { mediaData } from '@/lib/models/discrete/media.models';
import styles from './styles.module.scss';



import React from 'react'
import MediaReel, { parsedMediaData } from '@/components/common/media/MediaReel';
import SvgSelector from '@/Utils/SvgSelector';
import { messageData } from '@/lib/models/community/message.models';
import Reply from './Reply';

export interface MessageBodyI {
    nic:string
    isModerator:boolean
    isArtist:boolean
    messageData:messageData
    replyData?:{
        userName:string
        text?:string
    }
    media?:parsedMediaData[]
}


const MessageBody:React.FC<MessageBodyI> = (props) => {
    

  return (
    <div className={styles.messageBodyWrapper}>
        {/* MessageBody */}
        <div className={styles.userContents}>
            <div className={styles.userTitle}>
                {props.nic}
            </div>
            {
                props.isModerator&&!props.isArtist?
                <div className={styles.roleSocket}>
                    <SvgSelector
                        value='moderation'
                        tier='standart'
                        focus={true}
                    />
                </div>
                :
                null
            }
            {
                props.isModerator&&props.isArtist?
                <div className={styles.roleSocket}>
                    <SvgSelector
                        value='artist'
                        tier='standart'
                        focus={true}
                    />
                </div>
                :
                null
            }
        </div>
        <div className={styles.messageBody}>
            {props.replyData?
                <div className={styles.replySocket}>
                    <Reply
                        userName={props.replyData.userName}
                        text={props.replyData.text}
                    />
                </div>
                :
                null

            }
            {props.messageData.content.textContent
                ?
                <div className={styles.textBody}>
                    {props.messageData.content.textContent}
                </div>
                
                :
                null
            }
            {props.media
                ?
                <MediaReel
                    media={props.media}
                />
                :
                null
            }        
        </div>
        
    </div>
  )
}

export default MessageBody