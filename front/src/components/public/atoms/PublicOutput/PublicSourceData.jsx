import React from "react";
import classes from './PublicSourceData.modules.css'


const PublicSourceData = (props) => {
    const setModalitySrc = (modality) =>{
        switch(modality){
            case 'vibe': return '../../../../assets/icons/vibe.svg'
            case 'sync': return '../../../../assets/icons/sync.svg'
            case 'gig': return '../../../../assets/icons/gig.svg'
            default: return '../../../../assets/icons/vibe.svg'
        }}
    const setSourceIconSrc = (source) =>{
        switch(source){
            case 'artist': return '../../../../assets/icons/artist.svg'
            case 'venue': return '../../../../assets/icons/venue.svg'
            default: return '../../../../assets/icons/artist.svg'
        }
    }
    
    if (props.sourceType ==='content'){
        return (
            <div className={classes.dataWrapper}>
                <div className={classes.modalityWrapper}>
                    <img className={classes.modality} src={setModalitySrc(props.modality)} alt="modality" />
                </div>
                <div className={classes.audienceWrapper}>
                    <div className={props.foucs==='true'?classes.audienceSocketActive:classes.audienceSocketPassive}>
                        {props.audience}
                    </div>
                </div>                               
            </div>
        )
    }
    else {
        return (
            <div className={classes.sourceTypeWrapper}>
                <img className={classes.sourceIcon} src={setSourceIconSrc(props.sourceType)} alt="sourceIcon" />                             
            </div>
        )
    }
}

export default PublicSourceData