"use client"

import React, { useState } from 'react' 
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'

const VibeSetUp = () => {

    const [setUpSection, setSetUpSection] = useState('content')


            // content control state


    const [contentHeaderFile, setContentHeaderFile] = useState<File[]>([])






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



        
                
        <motion.div
            className={styles.controls}
        >
                    {/* content-community selector  */}
            <motion.div
            
                className={styles.setUpSelectorSegment}
            >
                <motion.div
                
                    className={styles.setUpSelector}
                >
                    <motion.div
                        onClick={(e:any)=>{
                            e.stopPropagation()
                            setSetUpSection('content')
                        }}
                        className={styles.selectorSegment}
                    >
                        <motion.div
                        
                            className={styles.selectorSocket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='vibe'
                                focus={setUpSection==='content'?true:false}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        onClick={(e:any)=>{
                            e.stopPropagation()
                            setSetUpSection('community')
                        }}
                        className={styles.selectorSegment}
                    >
                        <motion.div
                        
                            className={styles.selectorSocket}
                        >
                            <SvgSelector
                                tier='standart'
                                value='networking'
                                focus={setUpSection==='community'?true:false}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>


                    {/* set up title */}
            <motion.div
            
                className={styles.titles}
            >
                {setUpSection==='content' &&
                    'Content Set Up'
                }
                {setUpSection==='community' &&
                    'Community Set Up'
                }
            </motion.div>
            <motion.div
            
                className={styles.submitSegment}
            >
                                                                                                          
            </motion.div>
        </motion.div>
        <AnimatePresence>
                        {/* content set up */}
            { setUpSection==='content' &&
                <motion.div
                    key={'content set up'}
                    transition={{type:'just'}}
                    initial={{opacity:0, width:0, x:'-100vw', height:'auto'}}
                    animate={{opacity:1, width:'100%', x:0, height:'auto'}}
                    exit={{opacity:0, width:0, x:'-100vw', height:'auto'}}
                    className={styles.contentSetUp}
                >
                    <motion.div
                    
                        className={styles.headerSegment}
                    >

                    </motion.div>
                </motion.div>
            }














                        {/* community set up */}
            
            {
                setUpSection==='community' &&
                <motion.div
                    key={'community set up'}
                    transition={{type:'just'}}
                    initial={{opacity:0, width:0, x:'+100vw', height:'auto'}}
                    animate={{opacity:1, width:'100%', x:0, height:'auto'}}
                    exit={{opacity:0, width:0, x:'+100vw', height:'auto'}}
                    className={styles.contentSetUp}
                >
                    Community Set Up
                </motion.div>
            }
        </AnimatePresence>
                    
       




    </motion.form>
  )
}

export default VibeSetUp