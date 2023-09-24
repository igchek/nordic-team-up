import React from 'react'
import { useAppDispatch,useAppSelector } from '../../hooks'
import styles from "./Focus.module.scss"
import ContentFocus from "./ContentFocus/ContentFocus"

const Focus = () => {
    const focusedContent = useAppSelector(({focus})=>focus.focusedContent)

    if (focusedContent!=null){
    return (
      <div className={styles.focusWrapper}>
          <div className={styles.upperVerticalWrapper}>

          </div>
          <div className={styles.centralWrapper}>          </div>
          <div className={styles.lowerVerticalWrapper}>
            
          </div>
      </div>
  )}
  else {
    return(
    <div className={styles.focusWrapper}>
          <div className={styles.upperVerticalWrapper}>

          </div>
          <div className={styles.centralWrapper}>
            <ContentFocus/>
          </div>
          <div className={styles.lowerVerticalWrapper}>
            
          </div>
      </div>)
  }
}

export default Focus