"use client"


import { uploadFiles } from '@/Utils/uploadhelpers'
import styles from './styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion'


import React, { ChangeEvent, useState, useEffect } from 'react'


interface ImageUploaderI {
    returnController:React.Dispatch<React.SetStateAction<string[]>>
}

const ImageUploader:React.FC<ImageUploaderI> = ({returnController}) => {
    const [files, setFiles] = useState<File[]>([])
    const [url, setUrl] = useState<string>('')

    const handleImage=(e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        e.stopPropagation()
        const fileReader = new FileReader()
        if(e.target.files){
            setFiles(Array.from(e.target.files))
        }
    }

    useEffect(()=>{
        console.log('image uploader url is', url)
    }, [url])
    useEffect(()=>{
        console.log('image uploader files is', files)
    },[files])
  return (
    <motion.form
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    className={styles.fileUploader} action={async(e)=>{
        
        let res = await uploadLogo(files)
        if(res){
            setUrl(res.data.url)
        }
    }}>
        <AnimatePresence>
        {url &&
            <motion.div
                initial={{opacity:0, backgroundColor:'white'}}
                animate={{opacity:1, backgroundImage:`url(${url})`}}
                exit={{opacity:0, backgroundColor:'white'}}
            className={styles.output}/>
        }
        {!url && files.length &&

            <motion.button
                initial={{opacity:0, backgroundColor:'white'}}
                animate={{opacity:1, backgroundImage:`url(https://utfs.io/f/fadd1d59-56f2-419c-be2d-589c88eddad5-ox480a.svg)`}}
                exit={{opacity:0, backgroundColor:'white'}}
            className={styles.button} type='submit'/>

        }
        {!url && !files.length && 
            <motion.label 
                initial={{opacity:0, backgroundColor:'white'}}
                animate={{opacity:1, backgroundImage:`url(https://utfs.io/f/3d5da24e-5282-4a37-bbb2-8bf1fa7c156d-khqj7n.svg)`}}
                exit={{opacity:0, backgroundColor:'white'}}
             className={styles.label}>
                <input onChange={handleImage} className={styles.input} type="file" />
            </motion.label>
        }
        </AnimatePresence>

        
    </motion.form>
  )
}

export default ImageUploader