"use client"

import SvgSelector from '@/Utils/SvgSelector';
import styles from './styles.module.scss';


import React from 'react'

interface ReplyI{
    userName:string
    text?:string
}

const Reply:React.FC<ReplyI> = (props) => {
  return (
    <div className={styles.replyWrapper}>
        <div className={styles.header}>
            <div className={styles.iconSocket}>
                <SvgSelector
                    value='reply'
                    tier='standart'
                    focus={true}
                />
            </div>
            {props.userName}
        </div>
        <div className={styles.BodyWrapper}>
            {props.text}
        </div>
    </div>
  )
}

export default Reply