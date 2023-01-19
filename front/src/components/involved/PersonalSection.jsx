import React from "react";
import InvolvedOutput from "./molecules/InvolvedOutput";
import LowerBar from "./molecules/LowerBar";
import Personal from "./molecules/Personal";
import styles from './PersonalSection.module.scss'

const PersonalSection = () => {

    return (
        <div className={styles.sectionWrapper}>
            <Personal/>
            <InvolvedOutput/>
            <LowerBar/>
        </div>
    )
}

export default PersonalSection