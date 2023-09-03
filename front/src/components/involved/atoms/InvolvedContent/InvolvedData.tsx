import React from "react";
import styles from './InvolvedData.module.scss'
import Modality from "./Modality";
import CurrentAudience from "./CurrentAudience";

const InvolvedData = (props) => {


        return <div className={styles.wrapper}>
                    <Modality 
                        modality={props.modality}
                        focus={props.focus}
                    />
                    <CurrentAudience audience={props.audience}
                                    focus={props.focus}
                    />
                </div>
}

export default InvolvedData