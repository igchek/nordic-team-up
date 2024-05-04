"use client"
import React, { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'

const FormExample = () => {
    const [file, setFiles] = useState<File[]>([])
    const [url, setUrl] = useState<string[]>([])


    function SubmitFile(e:ChangeEvent<HTMLInputElement>){
        // e.stopPropagation()
        e.preventDefault()
        const fileReader = new FileReader()
        console.log('form work 1')
        if (e.target.files){
            const file = e.target.files[0]
            console.log('form work 2')
            fileReader.onloadend = (event) =>{
                setFiles([file])
                const fileUrl = event.target?.result?.toString()||''
                setUrl([fileUrl])
            }
            fileReader.readAsDataURL(file)
        }
    }
  return (
    <div
        style={url.length?{backgroundImage:`url(${url[0]})`}:{}}
        className={styles.form}
    >
        {
            !file.length &&
            <input onChange={SubmitFile} type="file" />
        }
    </div>
  )
}

export default FormExample

