"use client"


import MediaReel from '@/components/common/media/MediaReel';
import styles from './styles.module.scss';


import React, {useState} from 'react'

export interface artist {
    id:string
    title:string
    logo:string
    description?:string
    media?:string[]

}

interface LineUpI {
    lineUp:artist|artist[]
}

const LineUp:React.FC<LineUpI> = (props) => {
    if(Array.isArray(props.lineUp)){
        const [focusedArtist, setFocusedArtist] = useState(props.lineUp[0])
        return (
            <div className={styles.lineUp}>
                <div className={styles.multipleHeader}>
                    <div className={styles.headerTitle}>
                        LINE UP
                    </div>
                    <div className={styles.lineUpOutput}>
                        {props.lineUp.map(unit=>{
                            return(
                            <div 
                                onClick={()=>setFocusedArtist(unit)}
                                className={styles.logoSocket} 
                                style={{background:`cover url:src/assets/ArtistLogo/${unit.logo}.jpg`}}>
                            </div>)
                        })}
                    </div>
                </div>
                {focusedArtist.description &&
                    <div className={styles.descriptionWrapper}>
                    {focusedArtist.description}
                    </div>
                }
                {focusedArtist.media &&
                    <div className={styles.reelWrapper}>
                        <MediaReel
                            media={focusedArtist.media}
                        />
                    </div>
                    
                }

            </div>
        )}
    else
        return(
            <div className={styles.lineUp}>
                <div className={styles.singleHeader}>
                    <div className={styles.logoSocket} style={{background:`cover url:src/assets/ArtistLogo/${props.lineUp.logo}.jpg`}}></div>
                    {props.lineUp.title}
                </div>
                {props.lineUp.description && 
                    <div className={styles.descriptionWrapper}>
                        {props.lineUp.description}
                    </div>
                }
                {props.lineUp.media &&
                    <MediaReel
                        media={props.lineUp.media}
                    />
                }
            </div>
            )
}

export default LineUp