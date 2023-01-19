import React from "react";
import styles from './CurrentAudience.module.scss'


const CurrentAudience = (props) => {
    if (props.focus === 'false'){
        return (<div className={styles.wrapper}>
                    <div className={styles.passiveSocket}>
                        ${props.audience}
                    </div>

        </div>)
    }
    else {
        return (<div className={styles.wrapper}>
                    <div className={styles.activeSocket}>
                        ${props.audience}
                    </div>

        </div>)
    }

}

export default CurrentAudience