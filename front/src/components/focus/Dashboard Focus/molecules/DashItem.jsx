import React from 'react'
import DashItemModality from '../atoms/DashItemModality'
import DashItemTagList from '../atoms/DashItemTagList'
import DashItemTitle from '../atoms/DashItemTitle'
import classes from './DashSection.modules.css'
import { useState } from 'react'

const DashItem = (props) => {
    const cardId = props.id
    classes.cardWrapperActive={...classes.cardWrapperActive, 'background-image':`${props.promoPoster}`}
    classes.cardWrapperPassive={...classes.cardWrapperPassive, 'background-image':`${props.promoPoster}`}

  return (
    <div  className={props.focus?classes.cardWrapperActive:classes.cardWrapperPasssive}>
        <DashItemModality 
            focus={props.focus}
            modality={props.modality}
        />
        <div className={props.focus?classes.cardDescriptionActive:classes.cardDescriptionPassive}>
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