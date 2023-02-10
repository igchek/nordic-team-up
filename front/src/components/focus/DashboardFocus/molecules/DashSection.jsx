import React from 'react'
import styles from './DashSection.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useMemo, useEffect } from 'react'
import  { setFormatedContent, setSubSectionedContent, setSubsections } from '../../../../store/sectionDashboard'
import DashItem from './DashItem'
import DashItemClip from '../atoms/DashItemClip'
import { setFocusedSubsection, setFocusedSection } from '../../../../store/focus'


const DashSection = (props) => {

const dispatch = useDispatch()

// selectors
const focusedSection = useSelector(({focus})=>focus.focusedSection)
const focusedSubsection = useSelector(({focus})=>focus.focusedSubsection)

const totalContent = useSelector(({sectionDashboard})=>sectionDashboard.content)

const allFormats = useSelector(({sectionDashboard})=>sectionDashboard.formats)
const formatedContent = useSelector(({sectionDashboard})=>sectionDashboard.formatedContent)
const subSectionedContent = useSelector(({sectionDashboard})=>sectionDashboard.subSectionedContent)



// inputs\outputs

const sectionOutput = []

const sectionVideoOutput = []

const subSectionsArrayInput = []




//methods

const configureTagArray = (id) => {
    let TagArrayOutput = []
    for (let content of sectionOutput){
        
        if (content.id===id){
            for (let tag of content.formats){
                TagArrayOutput.push(tag)
            }
        }
    }
    return TagArrayOutput
}

const configureSubsections = (tags) => {
    for (let tag of tags){
        if (!subSectionsArrayInput.includes(tag)&&!allFormats.includes(tag)){
            subSectionsArrayInput.push(tag)
        }
    }
}


const focusSection = (sectionInput) =>{
    if (!focusedSection[0]){
        for (let content of sectionOutput){
            configureSubsections(configureTagArray(content.id))
        }
        dispatch(setSubsections(subSectionsArrayInput))
        dispatch(setSubSectionedContent(sectionOutput))
        dispatch(setFocusedSection(sectionInput))
    }
    else if (focusedSection[0]&&!focusedSubsection[0]){
        dispatch(setFocusedSubsection(sectionInput))
    }
}

// section output configure
useEffect(()=>{
    if (!focusedSection[0]){
        for (let content of totalContent){
            if(content.formats.includes(props.sectionTitle)){
                sectionOutput.push(content)
            }
            if(content.media){
                if(content.media.video){
                    sectionVideoOutput.push(content)
                }
            }
            console.log(`${props.sectionTitle} item ${content.title} props are`, Object.entries(content))
            console.log(`${props.sectionTitle} item ${content.title} tag array is `, configureTagArray(content.id))
            
        }
        console.log(`${props.sectionTitle} output is`, sectionOutput)
    }
    else if (focusedSection[0]&&!focusedSubsection[0]){
        for (let content of formatedContent.focusedSection[0]){
            if (content.formats.includes(props.sectionTitle)){
                sectionOutput.push(content)
            }
            if(content.media){
                if(content.media.video){
                    sectionVideoOutput.push(content)
                }
            }
            console.log(`${props.sectionTitle} item ${content.title} props are`, Object.entries(content))
            
        }
        console.log(`${props.sectionTitle} output is`, sectionOutput)
    }
    else if (focusedSection[0]&&focusedSubsection[0]){
        for (let content of subSectionedContent.focusedSubsection[0]){
            sectionOutput.push(content)
            console.log(`${props.sectionTitle} item ${content.title} props are`, Object.entries(content))
        }
        console.log(`${props.sectionTitle} output is`, sectionOutput)
    }




},
[])

// Prefocus
const [currentPrefocus, setCurrentPrefocus] = useState(null)





//component output

if(currentPrefocus!==null){
    if (sectionVideoOutput.includes(currentPrefocus)){
        return(
                 <div className={styles.sectionWrapper}>
                     <div onClick={()=>focusSection(props.sectionTitle)} className={styles.sectionTitleWrapper}>
                             {props.sectionTitle}
                     </div>
                     <div className={styles.sectionContentOutput}>
                            {sectionOutput.map(unit=>{
                                return(
                                    <DashItem
                                        onClick={(e)=>setCurrentPrefocus(e)}
                                        id={unit.id}
                                        focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
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
    else{
        return(
                <div className={styles.sectionWrapper}>
                    <div onClick={()=>focusSection(props.sectionTitle)} className={styles.sectionTitleWrapper}>
                        {props.sectionTitle}
                    </div>
                    <div className={styles.sectionContentOutput}>
                        {sectionOutput.map(unit=>{
                            return(
                                <DashItem
                                    onClick={(e)=>setCurrentPrefocus(e)}
                                    id={unit.id}
                                    focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
                                    modality={unit.modality}
                                    title={unit.title}
                                    authorLogo={unit.authorLogo}
                                    authorName={unit.author}
                                    promoPoster={unit.promoLogo}
                                    tagArray={()=>configureTagArray(unit.id)}

                                />
                            )
                        })}
                    </div>
                </div>
                 )
    }
}
else{
    return(
        <div className={styles.sectionWrapper}>
            <div onClick={()=>focusSection(props.sectionTitle)} className={styles.sectionTitleWrapper}>
                {props.sectionTitle}
            </div>
            <div className={styles.sectionContentOutput}>
                {sectionOutput.map(unit=>{
                    return(
                        <DashItem
                            onClick={(e)=>{setCurrentPrefocus(e)}}
                            id={unit.id}
                            focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
                            modality={unit.modality}
                            title={unit.title}
                            authorLogo={unit.authorLogo}
                            authorName={unit.author}
                            promoPoster={unit.promoLogo}
                            tagArray={()=>configureTagArray(unit.id)}

                        />
                    )
                })}
            </div>
        </div>
    )
}

}
export default DashSection
































    
// const dispatch = useDispatch()
// const sectionTitle = props.sectionTitle

// const focusedSection = useSelector(({focus})=>focus.focusedSection)
// const focusedSubsection = useSelector(({focus})=>focus.focusedSubsection)
// const formatedContent = useSelector(({sectionDashboard})=>sectionDashboard.formatedContent)
// const formatedContentArray = useMemo(()=>Object.entries(formatedContent), [focusedSection, focusedSubsection])
// const selectionSectionVideoIncluded = []
// const subSectionsArrayInput = [] 
// const subSectionedContent = useSelector(({sectionDashboard})=>sectionDashboard.subSectionedContent)
// const subSectionedContentArray = useMemo(()=>Object.entries(subSectionedContent), [focusedSection,focusedSubsection])
// const allFormats = (useSelector(({sectionDashboard})=>sectionDashboard.formats))
// const totalContent = useSelector(({sectionDashboard})=>sectionDashboard.content)

// const selectedSectionOutput = []

// useEffect(()=>{
//         debugger
//         if (focusedSection.length>0){
//             dispatch(setFormatedContent(totalContent))
//             for (let scontent of formatedContentArray){
//                 if (Object.keys(scontent)===props.focusedSection){

//                 }
//             }
            
//         }

    
        

    
// // for (let content of selectedSectionOutput){
// //    if(content.media!==undefined){
// //     if (content.media.video!==undefined){
// //         selectionSectionVideoIncluded.push(content)
// //     }
// //    }
    
// // }
// },
// [])


    



// const configureSubsections = (tags) => {
//     for (let tag of tags){
//         if (!subSectionsArrayInput.includes(tag)&&!allFormats.includes(tag)){
//             subSectionsArrayInput.push(tag)
//         }
//     }
// }

// const configureTagArray = (id) => {
//     const TagArrayOutput = []
//     for (let content of selectedSectionOutput){
//         if (content.id===id){
//             TagArrayOutput = content.formats
//         }
//     }
//     return TagArrayOutput
// }


// const setFocusedSection = (sectionInput) => {
//     if (allFormats.includes(sectionInput)){
//         for (let content of formatedContent.sectionInput){
//             configureSubsections(configureTagArray(content.id))
//         }
//         dispatch(setSubsections(subSectionsArrayInput))
//         dispatch(setSubSectionedContent(formatedContent.sectionInput))
//         dispatch(setFocusedSection(sectionInput))
//     }
//     else {
//         for (let subsection of useSelector(({sectionDashboard})=>sectionDashboard.subSections)){
//             if (subsection === sectionInput){
//                 dispatch(setFocusedSubsection(sectionInput))
//             }
//         }
//     }
// }

// for (let content of selectedSectionOutput){
//     if (content.media.video){
//         selectionSectionVideoIncluded.push(content)
//     }
// }
// const [currentPrefocus, setCurrentPrefocus] = useState(null)
// useEffect(()=>{
//     console.log(`current prefocus in ${props.sectionTitle} is `, currentPrefocus)
// },
// [currentPrefocus])




// if (currentPrefocus===null){
//     return(
//         <div className={styles.sectionWrapper}>
//             <div onClick={()=>setFocusedSection(props.sectionTitle)} className={styles.sectionTitleWrapper}>
//                 {props.sectionTitle}
//             </div>
//             <div className={styles.sectionContentOutput}>
//                 {selectedSectionOutput.map(unit=>{
//                     return(
//                         <DashItem
//                             onClick={(e)=>{setCurrentPrefocus(e)}}
//                             id={unit.id}
//                             focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
//                             modality={unit.modality}
//                             title={unit.title}
//                             authorLogo={unit.authorLogo}
//                             authorName={unit.author}
//                             promoPoster={unit.promoLogo}
//                             tagArray={configureTagArray(unit.id)}

//                         />
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
// else {
//     if(selectionSectionVideoIncluded.includes(currentPrefocus)){
//         return(
//             <div className={styles.sectionWrapper}>
//                 <div className={styles.sectionTitleWrapper}>
//                     {props.sectionTitle}
//                 </div>
//                 <div className={styles.sectionContentOutput}>
//                     {selectedSectionOutput.map(unit=>{
//                         return(
//                             <DashItem
//                                 onClick={(e)=>{setCurrentPrefocus(e)}}
//                                 id={unit.id}
//                                 focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
//                                 modality={unit.modality}
//                                 title={unit.title}
//                                 authorLogo={unit.authorLogo}
//                                 authorName={unit.author}
//                                 promoPoster={unit.promoLogo}
//                                 tagArray={configureTagArray(unit.id)}

//                             />
//                         )
//                     })}
//                 </div>
//                 <DashItemClip
//                     authorTitle={currentPrefocus.author}
//                     clipDescription={currentPrefocus.clipDescription}
//                     authorLogo={currentPrefocus.authorLogo}
//                     video={currentPrefocus.clip}
//                 />
//             </div>
//         )
//     }
//     else {
//             return(
//                 <div className={styles.sectionWrapper}>
//                     <div className={styles.sectionTitleWrapper}>
//                         {props.sectionTitle}
//                     </div>
//                     <div className={styles.sectionContentOutput}>
//                         {selectedSectionOutput.map(unit=>{
//                             return(
//                                 <DashItem
//                                     onClick={(e)=>setCurrentPrefocus(e)}
//                                     id={unit.id}
//                                     focus={currentPrefocus&&currentPrefocus.id===unit.id?true:false}
//                                     modality={unit.modality}
//                                     title={unit.title}
//                                     authorLogo={unit.authorLogo}
//                                     authorName={unit.author}
//                                     promoPoster={unit.promoLogo}
//                                     tagArray={configureTagArray(unit.id)}

//                                 />
//                             )
//                         })}
//                     </div>
//                 </div>
//                  )
//     }
// }
// }

// export default DashSection