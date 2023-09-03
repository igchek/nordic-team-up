import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from "./Focus.module.scss"
import DashBoardSectionFocus from "./DashboardFocus/DashBoardSectionFocus"
import ContentFocus from "./ContentFocus/ContentFocus"

const Focus = () => {
    const focusedContent = useSelector(({focus})=>focus.focusedContent)
    const focusedSection = useSelector(({focus})=>focus.focusedSection)
    const focusedSubsection = useSelector(({focus})=>focus.focusedSubsection)


    if (!focusedContent.length>0){
    return (
      <div className={styles.focusWrapper}>
          <div className={styles.upperVerticalWrapper}>

          </div>
          <div className={styles.centralWrapper}>
            <DashBoardSectionFocus/>
          </div>
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