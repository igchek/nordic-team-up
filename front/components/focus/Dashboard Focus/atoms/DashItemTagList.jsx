import React from 'react'
import classes from './DashItemAtoms.modules.css'

const DashItemTagList = (props) => {
    const tagArr = props.tagArray
  
    return (
    <div>
        {
            tagArr.map(tag=>{return(
                <div className={classes.tagItem}>
                    {tag.value}
                </div>
            )})
        }
    </div>
  )
}

export default DashItemTagList