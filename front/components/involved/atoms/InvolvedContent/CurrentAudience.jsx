import React from "react";
import classes from './CurrentAudience.modules.css'


const CurrentAudience = (props) => {
    if (props.focus === 'false'){
        return <div className={classes.passiveWrapper}>
                    <div className={classes.passiveHolder}>
                        ${props.audience}
                    </div>

        </div>}
    else {
        return <div className={classes.activeWrapper}>
                    <div className={classes.activeHolder}>
                        ${props.audience}
                    </div>

        </div>
    }

}

export default CurrentAudience