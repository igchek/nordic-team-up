import React from 'react'
import styles from './DashItemAtoms.module.scss'
import { useRef } from 'react'
import SvgSelector from '../../../common utils/SvgSelector'

const DashItemClip = (props) => {
    const isMuted = useRef(null)
    const mute = () => {
        if (isMuted.current==='muted'){
            isMuted.current=null
        }
        else {
            isMuted.current='muted'
        }
    }

    return (
    <div className={styles.clipWrapper}>
        <video className={styles.clip} onClick={mute} src={props.video}  ref={isMuted}></video>
        <div className={styles.clipDescriptionWrapper}>
            <div className={styles.clipAuthorDecription}>
                <img className={styles.authorLogo} src={props.authorLogo} alt="authorLogo" />
                <div className={styles.authorTitle}>
                    {props.authorTitle}
                </div>
            </div>
            <div className={styles.clipDescription}>
                {props.clipDescription}
            </div>
        </div>
        <div className={styles.muteSocket}>
            {isMuted?
                <SvgSelector
                    onClick={()=>{isMuted.current='true'}}
                    value='muted'
                    tier='standart'
                />
            :
                <SvgSelector
                    onClick={()=>{setMute('true')}}
                    value='unmuted'
                    tier='standart'
                />
            }
        </div>
    </div>
  )
}

export default DashItemClip