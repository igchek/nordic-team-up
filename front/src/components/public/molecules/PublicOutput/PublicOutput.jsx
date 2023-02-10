import React, { useEffect } from "react";
import styles from "./PublicOutput.module.scss"
import { useSelector, useDispatch } from "react-redux";
import PublicUnit from "./PublicUnit";
import ModalityPreset from "../ModalityPreset/ModalityPreset";

const PublicOutput = () => {
    const publicContent = useSelector(({publicContent})=> publicContent.content)
    const sortedPublicContent = useSelector(({publicContent})=> publicContent.sortedContent)
    const currentFocusedContent = useSelector(({focus})=> focus.focusedContent)
    // useEffect(()=>{
    //     console.log(`mounted public content is `, publicContent)
    //     console.log(`mounted sorted content is`, sortedPublicContent)
    // },
    // [])
    // useEffect(()=>{
    //     console.log(`current selected public content is`, publicContent)
    //     console.log(`current selected sorted content is`, sortedPublicContent)
    // },
    // [sortedPublicContent, publicContent])

    return(
        <div className={styles.wrapper}>
            <ModalityPreset/>
            <div className={styles.output}>
                {sortedPublicContent.length>0
                ?
                    sortedPublicContent.map(sortedUnit=>{ if(sortedUnit.sourceType==='content')
                    {
                       return (<PublicUnit
                        id={sortedUnit.id}
                        poster={sortedUnit.promoLogo}
                        sourceType={sortedUnit.sourceType}
                        contentTitle={sortedUnit.title}
                        sourceTitle={sortedUnit.author}
                        audience={sortedUnit.currentAudience}
                        modality={sortedUnit.modality}
                     />)
                    }
                    else {
                      return (<PublicUnit
                        id={sortedUnit.id}
                        poster={sortedUnit.logo}
                        sourceType={sortedUnit.providerType}
                        contentTitle={sortedUnit.providerTitle}
                        providerTitle={sortedUnit.providerTitle}
                        modality={sortedUnit.providerType}
                    />)
                    }})
                :
                    publicContent.map(publicUnit=>{if
                        (publicUnit.sourceType==='content'){
                           return (<PublicUnit
                                        id={ publicUnit.id}
                                        poster={ publicUnit.promoLogo}
                                        sourceType={ publicUnit.sourceType}
                                        contentTitle={ publicUnit.title}
                                        sourceTitle={ publicUnit.author}
                                        audience={ publicUnit.currentAudience}
                                        modality={ publicUnit.modality}
                                     />)
                        }
                        else{
                            return (<PublicUnit
                                        id={ publicUnit.id}
                                        poster={ publicUnit.logo}
                                        sourceType={ publicUnit.providerType}
                                        contentTitle={ publicUnit.providerTitle}
                                        providerTitle={ publicUnit.providerTitle}
                                        modality={ publicUnit.providerType}
                                     />)
                        }})}
                            
                                
            </div>
                
            
        </div>)


}

export default PublicOutput