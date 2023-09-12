import React, { useEffect } from "react";
import styles from "./PublicOutput.module.scss"
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import PublicContentUnit from "./PublicContentUnit";
import ModalityPreset from "../ModalityPreset/ModalityPreset";
import { setMocks } from "../../../../store/publicContent";
import { vibe } from "../../../../store/modules/libraries/Content/Vibe";
import PublicHostUnit from "./PublicHostUnit";
import involvedContent from "../../../../store/involvedContent";


const PublicOutput:React.FC = () => {
    const dispatch =useAppDispatch()
    dispatch(setMocks())
    const publicContent = useAppSelector(({publicContent})=> publicContent.content)
    const sortedPublicContent = useAppSelector(({publicContent})=> publicContent.sortedContent)
    const currentFocusedContent = useAppSelector(({focus})=> focus.focusedContent)
    const involvedContent = useAppSelector(({involvedContent})=>involvedContent.content)

    return(
        <div className={styles.wrapper}>
            <ModalityPreset/>
            <div className={styles.output}>
                {sortedPublicContent.length>0
                ?
                    sortedPublicContent.map(sortedUnit=>{ if((sortedUnit instanceof vibe) )
                    {
                       return (<PublicContentUnit
                        id={sortedUnit.id}
                        poster={sortedUnit.promoLogo}
                        sourceType={sortedUnit.sourceType}
                        contentTitle={sortedUnit.title}
                        sourceTitle={sortedUnit.author}
                        audience={sortedUnit.AudienceParams}
                        modality={sortedUnit.modality}
                        this={sortedUnit}
                        isInvolved={involvedContent.includes(sortedUnit)}
                     />)
                    }
                        else return (
                            (<PublicHostUnit
                                id={sortedUnit.id}
                                poster={sortedUnit.logo}
                                sourceType={sortedUnit.sourceType}
                                contentTitle={sortedUnit.providerTitle}
                                sourceTitle={sortedUnit.providerType}
                                this={sortedUnit}
                                modality={sortedUnit.sourceType}
                                isInvolved={involvedContent.includes(sortedUnit)}
                            />)
                        )
                    })
                :
                    publicContent.map(publicUnit=>{if
                        ((publicUnit instanceof vibe)){
                           return (<PublicContentUnit
                                        id={ publicUnit.id}
                                        poster={ publicUnit.promoLogo}
                                        sourceType={ publicUnit.sourceType}
                                        contentTitle={ publicUnit.title}
                                        sourceTitle={ publicUnit.author}
                                        audience={ publicUnit.AudienceParams}
                                        modality={ publicUnit.modality}
                                        this={publicUnit}
                                        isInvolved={involvedContent.includes(publicUnit)}
                                     />)
                        }
                        else 
                        
                            return(<PublicHostUnit
                                id={publicUnit.id}
                                poster={publicUnit.logo}
                                sourceType={publicUnit.sourceType}
                                contentTitle={publicUnit.providerTitle}
                                sourceTitle={publicUnit.providerType}
                                this={publicUnit}
                                modality={publicUnit.sourceType}
                                isInvolved={involvedContent.includes(publicUnit)}
                            />)                      
                        })}
                            
                                
            </div>
                
            
        </div>)


}

export default PublicOutput