import React from 'react'
import DashItemModality from '../atoms/DashItemModality'
import DashItemTagList from '../atoms/DashItemTagList'
import DashItemTitle from '../atoms/DashItemTitle'
import styles from './DashSection.module.scss'
import { useState } from 'react'

const DashItem = (props) => {
    const cardId = props.id
    styles.cardWrapperActive={...styles.cardWrapperActive, 'background-image':`${props.promoPoster};`}
    styles.cardWrapperPassive={...styles.cardWrapperPassive, 'background-image':`${props.promoPoster};`}

  return (
    <div  className={props.focus?styles.cardWrapperActive:styles.cardWrapperPasssive}>
        <div className={props.focus?styles.sectionModalityWrapperActive:styles.sectionModalityWrapperPassive}>
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