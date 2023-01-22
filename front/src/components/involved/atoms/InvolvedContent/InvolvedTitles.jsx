import React from "react";
import InvolvedContentTitle from "./InvolvedContentTitle";
import InvolvedProviderTitle from "./InvolvedProviderTitle";
import styles from './InvolvedTitles.module.scss'


const InvolvedTitles = (props) => {
    return (
        <div className={styles.wrapper}>
            <InvolvedContentTitle ContentTitle={props.ContentTitle} focus={props.focus}/>
            <InvolvedProviderTitle providerTitle={props.providerTitle} focus={props.focus}/>
        </div>
    )
}

export default InvolvedTitles