import React from "react";
import styles from './InvolvedOutput.module.scss'
import { useSelector } from "react-redux";
import InvolvedContent from "./involvedContent";
import involvedContent from "../../../store/involvedContent";




const InvolvedOutput = (props) => {
    const involvedContentArr = useSelector(({involvedContent}) => state.content)






    return(
        <div className={styles.wrapper}>
            {involvedContentArr.map(contentUnit=> {
                <InvolvedContent 
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