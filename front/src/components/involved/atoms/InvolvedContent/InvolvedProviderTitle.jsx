import React from "react";
import styles from './InvolvedProviderTitle.module.scss'

const InvolvedProviderTitle = (props) => {
    const isFocused = props.focus
    const providerTitle = props.providerTitle
    if (isFocused ==='false'){
        return (
            <div className={styles.wrapperPassive}>
                {providerTitle}
            </div>
        )
    }

    else {
        return (
            <div className={styles.wrapperActive}>
                {providerTitle}
            </div>
        )
    }
}

export default InvolvedProviderTitle