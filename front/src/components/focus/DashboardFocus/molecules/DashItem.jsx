import React from 'react'
import DashItemModality from '../atoms/DashItemModality'
import DashItemTagList from '../atoms/DashItemTagList'
import DashItemTitle from '../atoms/DashItemTitle'
import styles from './DashSection.module.scss'
import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusedContent } from '../../../../store/focus'

const DashItem = (props) => {
    const dispatch = useDispatch()

    const allContent = useSelector(({sectionDashboard})=>sectionDashboard.content)
    const thisContent = allContent.find(content=>content.id===props.id)

    const cardImg = useRef(null)
    useEffect(
        ()=>{
            cardImg.current.style.backgroundImage = `${props.promoPoster}`
        },
        []
    )
    
    const clickEvent = (thisContent) => {
        props.onClick(thisContent)
        if (props.focus){
            dispatch(setFocusedContent(thisContent))
        }
    }


  return (
    <div onClick={()=>clickEvent(thisContent)} className={props.focus?styles.cardWrapperActive:styles.cardWrapperPasssive}>
        <div ref={cardImg} className={props.focus?styles.sectionModalityWrapperActive:styles.sectionModalityWrapperPassive}>
        <DashItemModality 
            focus={props.focus}
            modality={props.modality}
        />
        </div>
        <div className={props.focus?styles.cardDescriptionActive:styles.cardDescriptionPassive}>
            <DashItemTitle
                title={props.title}
                authorLogo={props.authorLogo}
                authorName={props.authorName}
            />
            <DashItemTagList
                tagArray={props.tagArray}
            />
        </div>
    </div>
  )
}

export default DashItem