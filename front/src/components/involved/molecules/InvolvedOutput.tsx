import React from "react";
import styles from "./InvolvedOutput.module.scss"
import { useSelector } from "react-redux";
import InvolvedContent from "./InvolvedContent";




const InvolvedOutput = (props) => {
    const involvedContentArr = useSelector(({involvedContent}) => involvedContent.content)
    





    return(
        <div className={styles.wrapper}>
            {involvedContentArr.map(contentUnit=> {
                return <InvolvedContent 
                    img={contentUnit.promoLogo}
                    providerTitle={contentUnit.author}
                    ContentTitle={contentUnit.title}
                    modality={contentUnit.modality}
                    audience={contentUnit.currentAudience}
                    id={contentUnit.id}
                />
            })}
            
        </div>
    )


}

export default InvolvedOutput