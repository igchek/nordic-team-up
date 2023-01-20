import React from "react";
import styles from './Modality.module.scss'
import SvgSelector from "../../../commonUtils/SvgSelector";


const Modality = (props) => {
     if (props.modality ==='vibe'){
        if (props.focus ==='false'){
        return (
            <div className={styles.wrpapper}>
                <SvgSelector 
                    tier='standart'
                    focus='false'
                    value='vibe'
                />
            </div>
        )
        }
        else {
            return (
                <div className={styles.wrpapper}>
                    <SvgSelector 
                        tier='standart'
                        focus='true'
                        value='vibe'
                    />
                </div>
            )
        }
     }
     else if (props.modality ==='sync'){
        if (props.focus ==='false'){
            return (
                <div className={styles.wrpapper}>
                     <SvgSelector 
                        tier='standart'
                        focus='false'
                        value='sync'
                    />
                </div>
            )
            }
            else {
                return (
                    <div className={styles.wrpapper}>
                        <SvgSelector 
                            tier='standart'
                            focus='true'
                            value='sync'
                        />
                    </div>
                )
            }
     }
     else if (props.modality ==='gig'){
        if (props.focus ==='false'){
            return (
                <div className={styles.wrpapper}>
                        <SvgSelector 
                            tier='standart'
                            focus='false'
                            value='gig'
                        />
                </div>
            )
            }
            else {
                return (
                    <div className={styles.wrpapper}>
                        <SvgSelector 
                            tier='standart'
                            focus='true'
                            value='gig'
                        />
                    </div>
                )
            }
     }
    
}

export default Modality