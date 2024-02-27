"use client"

import styles from './styles.module.scss';


import React, {useState} from 'react'

export interface parsedMediaData {
    id:string
    title:string
    type:string
}

interface MediaReelI {
    media:parsedMediaData[]
}

const MediaReel:React.FC<MediaReelI> = (props) => {
    const [focusedMedia, setFocusedMedia] = useState(props.media[0])  
  return (
    <div className={styles.wrapper}>
        <div
            style={{background:`cover url(src/assets/media/${focusedMedia.title}.${focusedMedia.type})`}}
        className={styles.focusWrapper}></div>
        <div className={styles.reelOutput}>
            {props.media.map((media:parsedMediaData)=>{
                return(
                    <div
                        style={{background:`cover url(src/assets/media/${media.title}.${media.type})`}}
                        className={styles.reelUnit}
                        onClick={()=>setFocusedMedia(media)}
                        >
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MediaReel