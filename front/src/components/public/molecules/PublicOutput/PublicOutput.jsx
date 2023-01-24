import React from "react";
import styles from "./PublicOutput.module.scss"
import { useSelector, useDispatch } from "react-redux";
import publicContent from "../../../../store/publicContent";
import PublicUnit from "./PublicUnit";
import focus from "../../../../store/focus";

const PublicOutput = () => {
    const publicContent = useSelector(({publicContent})=> publicContent.content)
    const sortedPublicContent = useSelector(({publicContent})=> publicContent.sortedContent)
    const currentFocusedContent = useSelector(({focus})=> focus.focusedContent)

    return (
        <div className={styles.wrapper}>
            {
                sortedPublicContent ?
                sortedPublicContent.map(sortedUnit =>{
                    return sortedUnit.sourceType==='content' ? 
                    <PublicUnit
                                                            poster={sortedUnit.promoLogo}
                                                            sourceType={sortedUnit.sourceType}
                                                            contentTitle={sortedUnit.title}
                                                            providerTitle={sortedUnit.author}
                                                            audience={sortedUnit.currentAudience}
                                                            modality={sortedUnit.modality}
                                                            id={sortedUnit.id}
                                                            />
                        : <PublicUnit 
                            poster={sortedUnit.logo}
                            sourceType={sortedUnit.providerType}
                            providerTitle={sortedUnit.providerTitle}
                            id={sortedUnit.id}
                        />
                })
                : publicContent.map((sortedUnit)=>{
                    return
                        sortedUnit.sourceType==='content'?
                        <PublicUnit
                             poster={sortedUnit.promoLogo}
                            sourceType={sortedUnit.sourceType}
                             contentTitle={sortedUnit.title}
                             providerTitle={sortedUnit.author}
                             audience={sortedUnit.currentAudience}
                             modality={sortedUnit.modality}
                             id={sortedUnit.id}
                        />
                        :<PublicUnit 
                            poster={sortedUnit.logo}
                            sourceType={sortedUnit.providerType}
                            providerTitle={sortedUnit.providerTitle}
                            id={sortedUnit.id}
                        />
                    
                })
            }
        </div>
    )


}

export default PublicOutput