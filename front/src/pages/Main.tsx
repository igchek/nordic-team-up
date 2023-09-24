import React from 'react'
import PersonalSection from '../components/involved/PersonalSection'
import Public from '../components/public/Public'
import Focus from '../components/focus/Focus'
import styles from "./Pages.module.scss"
import { useAppDispatch, useAppSelector } from '@/hooks'
import {useEffect} from 'react'
import { setMocks } from '@/store/publicContent'
import  { setInvolvedMocks } from '@/store/involvedContent'

const Main:React.FC = () => {
  const dispatch = useAppDispatch()
  
  const mocks = useAppSelector(({publicContent})=>publicContent.mockContent)
  const imocks = useAppSelector(({involvedContent})=>involvedContent.mockContent)
  useEffect(()=>{
    dispatch(setMocks(mocks))
    dispatch(setInvolvedMocks(imocks))
    
  },[])


  return (
    <div className={styles.browserWrapper}>
        <PersonalSection/>
        <Focus/>
        <Public/>
    </div>
  )
}

export default Main