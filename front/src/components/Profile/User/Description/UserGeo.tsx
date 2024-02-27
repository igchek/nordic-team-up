"use client"
import { useSession } from 'next-auth/react'
import styles from './styles.module.scss'

import { motion, AnimatePresence, useAnimate } from 'framer-motion'

import React, {useState} from 'react'
import SvgSelector from '@/Utils/SvgSelector'

interface UserGeoI{
    value:string
}




const UserGeo:React.FC<UserGeoI> = ({value}) => {
    const [pencilScope, animatePencil] = useAnimate()
    const [isEdited, setEditMode] = useState(false)
    const [geo, setGeo] = useState(value)
    const session = useSession()

    async function handleSubmit(geo:string ){
        try {
            const update = {"core.geo":geo}
            await fetch(`http://localhost:3000/api/profiles/user/data/${session.data?.userData._id}`, {
            method:"PUT",    
            cache:'no-cache',
                headers:{
                    "Content-Type":"application/json"
                },
            body:JSON.stringify({update})
            })
            setEditMode(false)
        } catch (error:any) {
            throw new Error(`Crashed editing users Geo`)
        }
    }


    return(
        <motion.div
            onMouseEnter={()=>{
                animatePencil(pencilScope.current,{opacity:0.5})
            }}
            onMouseLeave={()=>{
                animatePencil(pencilScope.current, isEdited?{opacity:0.5}:{opacity:0})
            }}
        className={styles.descriptionUnit}>
            <motion.div
                initial={{opacity:0, x:-15}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-15}}
            className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    Geo
                </div>
            </motion.div>
            <AnimatePresence>
            {isEdited?
                
                <motion.form 
                    initial={{opacity:0, x:-15}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:15}}
                className={styles.editForm}>
                    <motion.input
                    className={styles.input}
                    onChange={(e)=>{setGeo(e.target.value)}}
                    value={geo}
                    type="text" />
                    <motion.button
                        initial={{opacity:0, x:-15, backgroundColor:'rgba(32, 151, 78, 0)'}}
                        animate={{opacity:1, x:0, backgroundColor:'rgba(32, 151, 78, 0.5)'}}
                        exit={{opacity:0, x:15, backgroundColor:'rgba(32, 151, 78, 0)'}}
                        whileHover={{opacity:1, x:0, backgroundColor:'rgba(32, 151, 78, 1)'}}
                        type="submit"
                        className={styles.submitBtn}
                        onClick={()=>{
                            handleSubmit(geo)
                            setEditMode(!isEdited)
                        }}
                    >
                        Submit
                    </motion.button>
                </motion.form>
            :
                <motion.div
                    initial={{opacity:0, x:-15}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:15}}
                className={styles.output}>
                    {geo}
                </motion.div>
                
            }
            </AnimatePresence>
            
            <motion.div
                ref={pencilScope}
                initial={isEdited?{opacity:0.5}:{opacity:0}}
                whileHover={{opacity:1}}
                onClick={()=>{
                    setEditMode(!isEdited)
                } 
                }
            className={styles.iconSocket}>
                <SvgSelector
                    value='pencil'
                    tier='standart'
                    focus={isEdited}
                />
            </motion.div>
        </motion.div>
    )
}

export default UserGeo