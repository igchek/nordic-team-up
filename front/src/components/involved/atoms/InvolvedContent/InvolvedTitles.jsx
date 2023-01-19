import React from "react";
import InvolvedContentTitle from "../atoms/InvolvedContentTitle";
import InvolvedProviderTitle from "../atoms/InvolvedProviderTitle";
import classes from './InvolvedTitles.module.css'


const InvolvedTiitles = (props) => {
    return (
        <div className={classes.wrapper}>
            <InvolvedContentTitle ContentTitle={props.ContentTitle} focus={props.focus}/>
            <InvolvedProviderTitle providerTitle={props.providerTitle} focus={props.focus}/>
        </div>
    )
}

export default InvolvedTiitles