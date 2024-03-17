"use client"

import React, { useState } from 'react' 
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const VibeSetUp = () => {

    const [setUpSection, setSetUpSection] = useState(initialState)

    async function formSubmit(e:any){
        e.preventDefault()
        try {
            
        } catch (error:any) {
            throw new Error(`crashed posting a vibe:${error.message}`)
        }
    }

  return (
    <motion.form
        key={'vibe set up'}
        

        onSubmit={formSubmit}
        className={styles.vibeSetUp}
    >


                {/* content-community selector  */}
        <motion.div
            className={styles.controls}
        >
            <motion.div
            
                className={styles.titles}
            >
                Vibe set up
            </motion.div>
            <motion.div
            
                className={styles.submit}
            >
                                                                                                          
            </motion.div>
        </motion.div>




    </motion.form>
  )
}

export default VibeSetUp