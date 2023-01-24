import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './DashBoardSectionFocus.module.scss'
import { useEffect} from 'react'
import DashSection from './molecules/DashSection'
import DashItem from './molecules/DashItem'
import {setFormatedContent} from '../../../store/sectionDashboard'

const DashBoardSectionFocus = () => {
    const currentFocusedSection = useSelector(({focus})=>focus.focusedSection)
    const currentFocusedSubsection = useSelector(({focus})=>focus.focusedSubsection)
    const AllContent = useSelector(({sectionDashboard})=>sectionDashboard.content)
    const subSectionedContent = useSelector(({sectionDashboard})=>sectionDashboard.subSectionedContent)
    const dispatch = useDispatch()
    
    useEffect(() => {
      for (let content of AllContent ){
        dispatch(setFormatedContent(content))
      }
    }, [])

    if (!currentFocusedSection&&!currentFocusedSubsection ){
        const AllFormats = useSelector(({sectionDashboard})=>sectionDashboard.formats)
        return(
                <div className={styles.sectionDashWrapper}>
                    {AllFormats.map(format=>{
                        <DashSection
                            sectionTitle={format}
                        />
                    })}
                </div>
        )
    }
    else if (currentFocusedSection!==''&&!currentFocusedSubsection){
        const AllSubsections = useSelector(({sectionDashboard})=> sectionDashboard.subSections)
        return(
                <div className={styles.sectionDashWrapper}>
                    {subSectionedContent.map(sub=>
                        <DashSection 
                            sectionTitle={Object.keys(sub)}
                        />
                        )}
                </div>
        )
    }
    else if (currentFocusedSection!==''&&currentFocusedSubsection!==''){
        const subOutput = []
        const currentSub = useSelector(({focus})=>focus.focusedSubsection)
        const AllSubs = useSelector(({sectionDashboard})=> sectionDashboard.subSections)
        for (let sub of Object.entries(AllSubs)){
            if (Object.keys(sub)===currentSub){
                subOutput=Object.values(sub)
            }
        }

        return(
                <div className={styles.subsectionDashWrapper}>
                    {subOutput.map(sub=>
                        <DashItem
                            id={sub.id}
                            focus='false'
                            modality={sub.modality}
                            title={sub.title}
                            authorLogo={sub.authorLogo}
                            authorName={sub.author}
                            promoPoster={sub.promoLogo}
                            tagArray={{}}

                        />
                        )}
                </div>
        )
    }

    

    

}

export default DashBoardSectionFocus