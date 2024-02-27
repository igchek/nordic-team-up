"use client"

import SvgSelector from '@/Utils/SvgSelector';
import styles from './styles.module.scss';


import React from 'react'
import {useState} from 'react'

interface MessagePostingStatusI{
    isPosted:boolean
    isPending:boolean
    isCrashed:boolean
}

const MessagePostingStatus:React.FC<MessagePostingStatusI> = (props) => {
    const [isHovered, setHover] = useState(false)
    if(props.isPosted){
        return (<div className={styles.statusWrapper}>
                    {null}
                </div>)
    }
    else if (props.isPending){
        return(
            <div className={styles.statusWrapper}>
                <div className={styles.statusSocket}>
                    <SvgSelector
                        tier='standart'
                        value='pending'
                        focus={true}
                    />
                </div>
            </div>
        )
    }
    else if(props.isCrashed){
        return(
        <div className={styles.statusWrapper}>
            <div className={styles.statusSocket}>
                <SvgSelector
                    tier='standart'
                    value='pending'
                    focus={true}
                />
            </div>
            <div onMouseEnter={()=>setHover(isHovered)} onMouseLeave={()=>setHover(isHovered)} className={styles.statusSocket}>
                <SvgSelector
                    tier='standart'
                    value='crash'
                    focus={isHovered}
                />
            </div>
        </div>
        )
    }
}
    

export default MessagePostingStatus