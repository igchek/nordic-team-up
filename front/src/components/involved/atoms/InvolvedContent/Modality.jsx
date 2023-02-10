import React from "react";
import styles from './Modality.module.scss'
import SvgSelector from "../../../commonUtils/SvgSelector";


const Modality = (props) => {
     if (props.modality ==='vibe'){
        return (
            <div className={styles.wrpapper}>
                <div className={styles.modalitySocketMUD}>
                    <SvgSelector 
                        tier='standart'
                        focus={props.focus}
                        value='vibe'
                    />
                </div>

            </div>
        )
        
     }
     else if (props.modality ==='sync'){
        if (!props.focus){
            return (
                <div className={styles.wrpapper}>
                    <div className={styles.modalitySocketMUD}>
                        <SvgSelector 
                            tier='standart'
                            focus={false}
                            value='sync'
                        />
                    </div>
                </div>
            )
            }
            else {
                return (
                    <div className={styles.wrpapper}>
                        <div className={styles.modalitySocketMUD}>
                            <SvgSelector 
                                tier='standart'
                                focus={true}
                                value='sync'
                            />
                        </div>
                    </div>
                )
            }
     }
     else if (props.modality ==='gig'){
        if (!props.focus){
            return (
                <div className={styles.wrpapper}>
                    <div className={styles.modalitySocketMUD}>
                        <SvgSelector 
                            tier='standart'
                            focus={false}
                            value='gig'
                        />
                    </div>
                </div>
            )
            }
            else {
                return (
                    <div className={styles.wrpapper}>
                        <div className={styles.modalitySocketMUD}>
                            <SvgSelector 
                                tier='standart'
                                focus={true}
                                value='gig'
                            />
                        </div>
                    </div>
                )
            }
     }
    
}

export default Modality