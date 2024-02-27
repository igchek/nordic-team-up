"use client"
import React from 'react'
import styles from './styles.module.scss'
import SvgSelector from '@/Utils/SvgSelector'
import {useState} from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '@/hooks'
import { sortByModalityPreset } from '@/store/involvedContent'

interface NavBurgerI {
    focus:boolean
    communityTarget:boolean
}

export const NavBurger:React.FC<NavBurgerI> = (focus) => {
  const dispatch = useAppDispatch()
  const [isSearchSet, setSearchSet] = useState(false)
  const [vibePreset, setVibePreset] = useState(false)
  const [syncPreset, setSyncPreset] = useState(false)
  const [gigPreset, setGigPreset] = useState(false)

  

  if (focus){
    return(
      <div className={styles.NavBurger}>
        <div className={styles.SearchWrapper}>
          <div className={styles.InputWrapper}>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.iconWrapper}>
            <div className={styles.iconSocket}>
              <SvgSelector
                value='search'
                tier='standart'
                focus={isSearchSet}
              />
            </div>
          </div>
        </div>
        <div className={styles.presetWrapper}>
          <div onClick={()=>{
            if(vibePreset){
              dispatch(sortByModalityPreset('vibe'))
              setVibePreset(!vibePreset)
            }
            else{
              dispatch(sortByModalityPreset(null))
              setVibePreset(!vibePreset)
            }
            
          }} className={styles.preset}>
            <div className={styles.presetSocket}>
              <SvgSelector
                value='vibe'
                tier='standart'
                focus={vibePreset}
              />
            </div>
          </div>
          <div onClick={()=>{
            if(syncPreset){
              dispatch(sortByModalityPreset('sync'))
              setSyncPreset(!syncPreset)
            }
            else{
              dispatch(sortByModalityPreset(null))
              setSyncPreset(!syncPreset)
            }
            
          }}
           className={styles.preset}>
            <div className={styles.presetSocket}>
              <SvgSelector
                value='sync'
                tier='standart'
                focus={syncPreset}
              />
            </div>
          </div>
          <div onClick={()=>{
            if(gigPreset){
              dispatch(sortByModalityPreset('gig'))
              setGigPreset(!gigPreset)
            }
            else{
              dispatch(sortByModalityPreset(null))
              setGigPreset(!gigPreset)
            }
            
          }}
           className={styles.preset}>
            <div className={styles.presetSocket}>
              <SvgSelector
                value='gig'
                tier='standart'
                focus={gigPreset}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  else
  return (
    <div className={styles.NavBurger}>
      nav burger
    </div>
  )
}
