import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Focus.modules.css'
import focus from '../../store/focus'
import DashBoardSectionFocus from './Dashboard Focus/DashBoardSectionFocus'
import ContentFocus from './Content Focus/ContentFocus'

const Focus = () => {
    const focusedContent = useSelector(({focus})=>state.focusedContent)
    const focusedSection = useSelector(({focus})=>state.focusedSection)
    const focusedSubsection = useSelector(({focus})=>state.focusedSubsection)


    if (focusedContent===''){
    return (
      <div className={classes.focusWrapper}>
          <div className={classes.upperVerticalWrapper}>

          </div>
          <div className={classes.centralWrapper}>
            <DashBoardSectionFocus/>
          </div>
          <div className={classes.lowerVerticalWrapper}>
            
          </div>
      </div>
  )}
  else {
    <div className={classes.focusWrapper}>
          <div className={classes.upperVerticalWrapper}>

          </div>
          <div className={classes.centralWrapper}>
            <ContentFocus/>
          </div>
          <div className={classes.lowerVerticalWrapper}>
            
          </div>
      </div>
  }
}

export default Focus