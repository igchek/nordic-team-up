import React from "react";
import { useEffect, useState, useMemo } from "react";
import classes from './involvedData.modules.css'
import Modality from "./Modality";
import CurrentAudience from "./CurrentAudience";

const InvolvedData = (props) => {


        return <div className={classes.wrapper}>
                    <Modality modality={props.modality} />
                    <CurrentAudience audince={props.audience}/>
                </div>
}

export default InvolvedData