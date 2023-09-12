import React from "react";
import { useSelector } from "react-redux";
import InvolvedOutput from "./molecules/InvolvedOutput";
import LowerBar from "./molecules/LowerBar";
import Personal from "./molecules/Personal";
import styles from "./PersonalSection.module.scss"
import {motion} from 'framer-motion'

interface PersonalSectionI {

}

const PersonalSection : React.FC<PersonalSectionI> = () => {
    return (
        <motion.div className={styles.sectionWrapper}>
            <motion.div className={styles.personal}>
                <Personal />
            </motion.div>
            
            <motion.div className={styles.output}>
                <InvolvedOutput/>
            </motion.div>
            <motion.div className={styles.LowerBar}>
                <LowerBar/>
            </motion.div>
            
        </motion.div>
    )
}

export default PersonalSection