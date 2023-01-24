import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from "./Focus.module.scss"
import focus from "../../store/focus"
import DashBoardSectionFocus from "./DashboardFocus/DashBoardSectionFocus"
import ContentFocus from "./ContentFocus/ContentFocus"

const Focus = () => {
    const focusedContent = useSelector(({focus})=>focus.focusedContent)
    const focusedSection = useSelector(({focus})=>focus.focusedSection)
    const focusedSubsection = useSelector(({focus})=>focus.focusedSubsection)


    if (focusedContent===''){
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
    <div className={styles.focusWrapper}>
          <div className={styles.upperVerticalWrapper}>

          </div>
          <div className={styles.centralWrapper}>
            <ContentFocus/>
          </div>
          <div className={styles.lowerVerticalWrapper}>
            
          </div>
      </div>
  }
}

export default Focus