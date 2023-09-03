import React, { useEffect } from "react";
import styles from "./PublicOutput.module.scss"
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import PublicUnit from "./PublicUnit";
import ModalityPreset from "../ModalityPreset/ModalityPreset";


const PublicOutput:React.FC = () => {
    const publicContent = useAppSelector(({publicContent})=> publicContent.content)
    const sortedPublicContent = useAppSelector(({publicContent})=> publicContent.sortedContent)
    const currentFocusedContent = useAppSelector(({focus})=> focus.focusedContent)


    return(
        <div className={styles.wrapper}>
            <ModalityPreset/>
            <div className={styles.output}>
                {sortedPublicContent.length>0
                ?
                    sortedPublicContent.map(sortedUnit=>{ if('modality' in sortedUnit && sortedUnit?.modality)
                    {
                       return (<PublicUnit
                        id={sortedUnit.id}
                        poster={sortedUnit.promoLogo}
                        sourceType={sortedUnit.sourceType}
                        contentTitle={sortedUnit.title}
                        sourceTitle={sortedUnit.author}
                        audience={sortedUnit.AudienceParams.total}
                        modality={sortedUnit.modality}
                     />)
                    }
                    else if (!('modality' in sortedUnit && sortedUnit?.modality)) {
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
                        ('modality' in publicContent && publicContent?.modality){
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