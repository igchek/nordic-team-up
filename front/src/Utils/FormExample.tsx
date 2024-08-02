"use client"
import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'

interface MotionIconUpload {
    fileControl:React.Dispatch<React.SetStateAction<File[]>>
    urlControl:React.Dispatch<React.SetStateAction<string[]>>
}

const MotionIconUpload = ({fileControl, urlControl }:MotionIconUpload) => {
    


    function SubmitFile(e:ChangeEvent<HTMLInputElement>){
        // e.stopPropagation()
        e.preventDefault()
        const fileReader = new FileReader()
        console.log('form work 1')
        if (e.target.files){
            const file = e.target.files[0]
            console.log('form work 2')
            fileReader.onloadend = (event) =>{
                fileControl([file])
                const fileUrl = event.target?.result?.toString()||''
                urlControl([fileUrl])
            }
            fileReader.readAsDataURL(file)
        }
    }
  return (
    <div
        // style={url.length?{backgroundImage:`url(${url[0]})`}:{}}
        className={styles.form}
    >
        
            <input onChange={SubmitFile} type="file" />
        
    </div>
  )
}

export default MotionIconUpload

