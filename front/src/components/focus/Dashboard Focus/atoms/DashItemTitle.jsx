import React from 'react'
import styles from './DashItemAtoms.module.scss'

const DashItemTitle = (props) => {
  return (
    <div className={styles.titleWrapper}>
        <div className={styles.title}>
            {props.title}
        </div>
        <div className={styles.sourceWrapper}>
            <img className={styles.authorLogo} src={props.authorLogo} alt="author logo" />
            <div className={styles.authorName}>
                {props.authorName}
            </div>
        </div>
    </div>
  )
}

export default DashItemTitle