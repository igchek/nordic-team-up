import React from "react";
import classes from './Modality.modules.css'


const Modality = (props) => {
     if (props.modality ==='vibe'){
        if (props.focus ==='false'){
        return (
            <div className={classes.passiveWepapper}>
                <img className={classes.passiveVibe} src="../../assets/atoms/modality/vibe.svg" alt="vibe" />
            </div>
        )
        }
        else {
            return (
                <div className={classes.activeWepapper}>
                    <img className={classes.activeVibe} src="../../assets/atoms/modality/vibe.svg" alt="vibe" />
                </div>
            )
        }
     }
     else if (props.modality ==='sync'){
        if (props.focus ==='false'){
            return (
                <div className={classes.passiveWepapper}>
                    <img className={classes.passiveSync} src="../../assets/atoms/modality/sync.svg" alt="sync" />
                </div>
            )
            }
            else {
                return (
                    <div className={classes.activeWepapper}>
                        <img className={classes.activeSync} src="../../assets/atoms/modality/sync.svg" alt="sync" />
                    </div>
                )
            }
     }
     else if (props.modality ==='gig'){
        if (props.focus ==='false'){
            return (
                <div className={classes.passiveWepapper}>
                    <img className={classes.passiveGig} src="../../assets/atoms/modality/gig.svg" alt="gig" />
                </div>
            )
            }
            else {
                return (
                    <div className={classes.activeWepapper}>
                        <img className={classes.activeGig} src="../../assets/atoms/modality/gig.svg" alt="gig" />
                    </div>
                )
            }
     }
    
}

export default Modality