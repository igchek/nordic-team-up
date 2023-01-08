import React from 'react'
import classes from './DashItemAtoms.modules.css'
import { useRef } from 'react'
import SvgSelector from '../../../common utils/SvgSelector'

const DashItemClip = (props) => {
    const isMuted = useRef('true')
    return (
    <div className={classes.clipWrapper}>
        <video muted={isMuted} autoPlay='true' className={classes.clip} src={props.video} ></video>
        <div className={clases.clipDescriptionWrapper}>
            <div className={classes.clipAuthorDecription}>
                <img className={classes.authorLogo} src={props.authorLogo} alt="authorLogo" />
                <div className={classes.authorTitle}>
                    {props.authorTitle}
                </div>
            </div>
            <div className={classes.clipDescription}>
                {props.clipDescription}
            </div>
        </div>
        <div className={classes.muteSocket}>
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