import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './DashBoardSectionFocus.module.scss'
import { useEffect} from 'react'
import DashSection from './molecules/DashSection'
import DashItem from './molecules/DashItem'
import {setFormatedContent} from '../../../store/sectionDashboard'
import { setFocusedContent } from '../../../store/focus'

const DashBoardSectionFocus = () => {
    const currentFocusedSection = useSelector(({focus})=>focus.focusedSection)
    const currentFocusedSubsection = useSelector(({focus})=>focus.focusedSubsection)
    const AllContent = useSelector(({sectionDashboard})=>sectionDashboard.content)
    const subSectionedContent = useSelector(({sectionDashboard})=>sectionDashboard.subSectionedContent)
    const dispatch = useDispatch()
    const AllFormats = useSelector(({sectionDashboard})=>sectionDashboard.formats)
    const AllSubsections = useSelector(({sectionDashboard})=> sectionDashboard.subSections)
    const currentSub = useSelector(({focus})=>focus.focusedSubsection)


    
    useEffect(() => {
      for (let content of AllContent ){
        dispatch(setFormatedContent(content))
      }
    }, [])

    if (!currentFocusedSection[0]&&!currentFocusedSubsection[0]){
        
        return(
                <div className={styles.sectionDashWrapper}>
                    {AllFormats.map(format=>{return(
                        <DashSection
                            sectionTitle={format}
                        />)
                    })}
                </div>
        )
    }
    else if (currentFocusedSection[0]&&!currentFocusedSubsection[0]){
        
        return(
                <div className={styles.sectionDashWrapper}>
                    {Object.entries(subSectionedContent).map(sub=>{return(
                        <DashSection 
                            sectionTitle={Object.keys(sub)}
                        />)}
                        )}
                </div>
        )
    }
    else if (currentFocusedSection[0]&&currentFocusedSubsection[0]){
        const subOutput = []
        for (let content of subSectionedContent.currentFocusedSubsection[0]){
            subOutput.push(content)
        }

        return(
                <div className={styles.subsectionDashWrapper}>
                    {subOutput.map(sub=>{return(
                        <DashItem
                            onClick={(e)=>dispatch(setFocusedContent(e))}
                            id={sub.id}
                            focus={false}
                            modality={sub.modality}
                            title={sub.title}
                            authorLogo={sub.authorLogo}
                            authorName={sub.author}
                            promoPoster={sub.promoLogo}
                            tagArray={sub.formats}

                        />)}
                        )}
                </div>
        )
    }

    

    

}

export default DashBoardSectionFocus