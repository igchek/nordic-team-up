import React from 'react'
import DashItemModality from '../atoms/DashItemModality'
import DashItemTagList from '../atoms/DashItemTagList'
import DashItemTitle from '../atoms/DashItemTitle'
import styles from './DashSection.module.scss'
import { useRef, useEffect } from 'react'

const DashItem = (props) => {
    const cardImg = useRef(null)
    useEffect(
        ()=>{
            cardImg.current.style.backgroundImage = `${props.promoPoster}`
        },
        []
    )
    const cardId = props.id

  return (
    <div  className={props.focus?styles.cardWrapperActive:styles.cardWrapperPasssive}>
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