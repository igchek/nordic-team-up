import React from "react";
import styles from "./InvolvedOutput.module.scss"
import { useAppSelector } from "../../../hooks";
import PublicContentUnit from "../../public/molecules/PublicOutput/PublicContentUnit";
import PublicHostUnit from "../../public/molecules/PublicOutput/PublicHostUnit";
import { vibe } from "../../../store/modules/libraries/Content/Vibe";


interface InvolvedOutputI {

}


const InvolvedOutput: React.FC<InvolvedOutputI> = () => {
    const involvedContents = useAppSelector(({involvedContent})=> involvedContent.content)
    const sortedInvolvedContent = useAppSelector(({involvedContent})=> involvedContent.sortedContent)





    return(
        <div className={styles.wrapper}>
            <div className={styles.output}>
                {sortedInvolvedContent.length>0
                ?
                    sortedInvolvedContent.map(sortedUnit=>{ if((sortedUnit instanceof vibe) )
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
                        isInvolved={involvedContents.includes(sortedUnit)}
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
                                isInvolved={involvedContents.includes(sortedUnit)}
                            />)
                        )
                    })
                :
                    involvedContents.map(publicUnit=>{if
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
                                        isInvolved={involvedContents.includes(publicUnit)}
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
                                isInvolved={involvedContents.includes(publicUnit)}
                            />)                      
                        })}
                            
                                
            </div>
                
            
        </div>
            

    )


}

export default InvolvedOutput