import React, { ChangeEvent } from 'react'
import styles from './styles.module.scss'

interface InputUpload{
    fileControl:React.Dispatch<React.SetStateAction<File[]>>
    urlControl:React.Dispatch<React.SetStateAction<string[]>>
}

const InputUpload = ({fileControl, urlControl}:InputUpload) => {

    function SubmitFile(e:ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        console.log('inup working 1')
        const fileReader = new FileReader()
        if (e.target.files){
            console.log('inup working 2')
            const file = e.target.files[0]
            fileReader.onloadend = (event) =>{
                fileControl([file])
                const fileUrl = event.target?.result?.toString()||''
                urlControl([fileUrl])
            }
            fileReader.readAsDataURL(file)
        }
    }
  return (
    <input className={styles.InputUpload} type="file" />
  )
}

export default InputUpload