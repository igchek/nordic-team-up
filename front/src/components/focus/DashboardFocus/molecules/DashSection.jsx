import React from 'react'
import styles from './DashSection.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useMemo } from 'react'
import sectionDashboard, { setFormatedContent, setSubSectionedContent, setSubsections } from '../../../../store/sectionDashboard'
import DashItem from './DashItem'
import DashItemClip from '../atoms/DashItemClip'
import focus, { setFocusedSubsection } from '../../../../store/focus'


const DashSection = (props) => {
const dispatch = useDispatch()
const sectionTitle = props.sectionTitle

const focusedSection = useSelector(({focus})=>state.focusedSection)
const focusedSubsection = useSelector(({focus})=>state.focusedSubsection)
const formatedContent = useMemo(()=> Object.entries(useSelector(({sectionDashboard})=> state.formatedContent)), [focusedSection, focusedSubsection])
const selectionSectionVideoIncluded = []
const subSectionsArrayInput = [] 
const subSectionedContent = useMemo(()=>Object.entries(useSelector(({sectionDashboard})=> state.subSectionedContent)), [focusedSection, focusedSubsection])

if (focusedSection===''){
    const selectedSectionOutput = formatedContent[props.sectionTitle]
    return selectedSectionOutput
}
else {

        for (let subsection of subSectionedContent){
            if (Object.keys(subsection)===sectionTitle){
                const selectedSectionOutput = Object.values(subsection)
                return selectedSectionOutput
            }
        }
    }


const configureSubsections = (tags) => {
    for (let tag of tags){
        if (!subSectionsArrayInput.includes(tag)&&!AllFormats.includes(tag)){
            subSectionsArrayInput.push(tag)
        }
    }
}

const configureTagArray = (id) => {
    const TagArrayOutput = []
    for (let content of selectedSectionOutput){
        if (content.id===id){
            TagArrayOutput = content.formats
        }
    }
    return TagArrayOutput
}


const setFocusedSection = (sectionInput) => {
    if ((useSelector(({sectionDashboard})=>state.formats)).includes(sectionInput)){
        for (let content of formatedContent.sectionInput){
            configureSubsections(configureTagArray(content.id))
        }
        dispatch(setSubsections(subSectionsArrayInput))
        dispatch(setSubSectionedContent(formatedContent.sectionInput))
        dispatch(setFocusedSection(sectionInput))
    }
    else {
        for (let subsection of useSelector(({sectionDashboard})=>state.subSections)){
            if (subsection === sectionInput){
                dispatch(setFocusedSubsection(sectionInput))
            }
        }
    }
}

for (let content of selectedSectionOutput){
    if (content.media.video){
        selectionSectionVideoIncluded.push(content)
    }
}
const [currentPrefocus, setCurrentPrefocus] = useState('null')

const focusItem = (e) => {
    if(currentPrefocus!=='null'&&currentPrefocus.id===e.id){
        setCurrentPrefocus('null')
    }
    else if (currentPrefocus!=='null'&&currentPrefocus.id!==e.id){
        setCurrentPrefocus(e.target)
    }
    else if (currentPrefocus==='null'){
        setCurrentPrefocus(e.target)
    }

}





if (currentPrefocus==='null'){
    return(
        <div className={styles.sectionWrapper}>
            <div onClick={setFocusedSection(props.sectionTitle)} className={styles.sectionTitleWrapper}>
                {props.sectionTitle}
            </div>
            <div className={styles.sectionContentOutput}>
                {selectedSectionOutput.map(unit=>{
                    return(
                        <DashItem
                            onClick={(e)=>{focusItem(e)}}
                            id={unit.id}
                            focus={currentPrefocus.id===unit.id?'true':'false'}
                            modality={unit.modality}
                            title={unit.title}
                            authorLogo={unit.authorLogo}
                            authorName={unit.author}
                            promoPoster={unit.promoLogo}
                            tagArray={configureTagArray(unit.id)}

                        />
                    )
                })}
            </div>
        </div>
    )
}
else if (currentPrefocus!=='null'){
    if(selectionSectionVideoIncluded.includes(currentPrefocus)){
        return(
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitleWrapper}>
                    {props.sectionTitle}
                </div>
                <div className={styles.sectionContentOutput}>
                    {selectedSectionOutput.map(unit=>{
                        return(
                            <DashItem
                                onClick={(e)=>{focusItem(e)}}
                                id={unit.id}
                                focus={currentPrefocus.id===unit.id?'true':'false'}
                                modality={unit.modality}
                                title={unit.title}
                                authorLogo={unit.authorLogo}
                                authorName={unit.author}
                                promoPoster={unit.promoLogo}
                                tagArray={configureTagArray(unit.id)}

                            />
                        )
                    })}
                </div>
                <DashItemClip
                    authorTitle={currentPrefocus.author}
                    clipDescription={currentPrefocus.clipDescription}
                    authorLogo={currentPrefocus.authorLogo}
                    video={currentPrefocus.clip}
                />
            </div>
        )
    }
    else if(!selectionSectionVideoIncluded.includes(currentPrefocus)){
            return(
                <div className={styles.sectionWrapper}>
                    <div className={styles.sectionTitleWrapper}>
                        {props.sectionTitle}
                    </div>
                    <div className={styles.sectionContentOutput}>
                        {selectedSectionOutput.map(unit=>{
                            return(
                                <DashItem
                                    onClick={(e)=>{focusItem(e)}}
                                    id={unit.id}
                                    focus={currentPrefocus.id===unit.id?'true':'false'}
                                    modality={unit.modality}
                                    title={unit.title}
                                    authorLogo={unit.authorLogo}
                                    authorName={unit.author}
                                    promoPoster={unit.promoLogo}
                                    tagArray={configureTagArray(unit.id)}

                                />
                            )
                        })}
                    </div>
                </div>
                 )
    }
}
}

export default DashSection