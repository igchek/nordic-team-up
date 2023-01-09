import React from "react";
import InvolvedOutput from "./molecules/InvolvedOutput";
import LowerBar from "./molecules/LowerBar";
import Personal from "./molecules/Personal";
import classes from './PersonalSection.modules.css'

const PersonalSection = () => {

    return (
        <div className={classes.sectionWrapper}>
            <Personal/>
            <InvolvedOutput/>
            <LowerBar/>
        </div>
    )
}

export default PersonalSection