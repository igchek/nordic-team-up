import React from "react";
import styles from './InvolvedContentTitle.module.scss'


const InvolvedContentTitle = (props) => {
    const ContentTitle = props.ContentTitle
    const isFocused = props.focus 
    if (isFocused === 'false'){
        return (
            <div className={styles.wrapperPassive}>
                ${ContentTitle}
            </div>
        )
    }
    else {
        return (
            <div className={styles.wrapperAvtive}>
                ${ContentTitle}
            </div>
        )
    }
}

export default InvolvedContentTitle