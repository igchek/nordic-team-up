import React from "react";
import styles from "./PublicOutput.module.scss"
import { useAppSelector} from '../../../../hooks';
import PublicContentUnit from "./PublicContentUnit";
import ModalityPreset from "../ModalityPreset/ModalityPreset";
import { vibe } from "../../../../store/modules/libraries/Content/Vibe";
import PublicHostUnit from "./PublicHostUnit";

const PublicOutput:React.FC = () => {

    const publicContent = useAppSelector(({publicContent})=> publicContent.content)
    const sortedPublicContent = useAppSelector(({publicContent})=> publicContent.sortedContent)

    
    return(
        <div className={styles.wrapper}>
            <ModalityPreset/>
            <div className={styles.output}>
                {sortedPublicContent.length>0
                ?
                    sortedPublicContent.map(sortedUnit=>{     
                        if((sortedUnit instanceof vibe) )
                    {
                       return (<PublicContentUnit
                        id={sortedUnit.id}
                        poster={sortedUnit.promoLogo}
                        sourceType={sortedUnit.sourceType}
                        contentTitle={sortedUnit.title}
                        sourceTitle={sortedUnit.author}
                        totalAudience={sortedUnit.totalAudience}
                        modality={sortedUnit.modality}
                        this={sortedUnit}
                        isInvolved={false}
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
                                isInvolved={false}
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
                                        totalAudience={ publicUnit.totalAudience}
                                        modality={ publicUnit.modality}
                                        this={publicUnit}
                                        isInvolved={false}
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
                                isInvolved={false}
                            />)   
                            }                   
                        
                        )
                        }
                            
                                
            </div>
                
            
        </div>)


}

export default PublicOutput