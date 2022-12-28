import React from "react";
import InvolvedOutput from "./InvolvedOutput";
import LowerBar from "./LowerBar";
import Personal from "./Personal";
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