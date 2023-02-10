import React from "react";
import { useSelector } from "react-redux";
import InvolvedOutput from "./molecules/InvolvedOutput";
import LowerBar from "./molecules/LowerBar";
import Personal from "./molecules/Personal";
import styles from "./PersonalSection.module.scss"

const PersonalSection = () => {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.personal}>
                <Personal />
            </div>
            
            <div className={styles.output}>
                <InvolvedOutput/>
            </div>
            <div className={styles.LowerBar}>
                <LowerBar/>
            </div>
            
        </div>
    )
}

export default PersonalSection