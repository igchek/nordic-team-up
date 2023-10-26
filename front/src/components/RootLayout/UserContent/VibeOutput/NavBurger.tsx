"use client"
import React from 'react'
import styles from 'common.module.scss'
import SvgSelector from '@/Utils/SvgSelector'
import {useState} from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '@/hooks'
import { sortByPreset } from '@/store/involvedContent'

interface NavBurgerI {
    focus:boolean
    communityTarget:boolean
}

export const NavBurger:React.FC<NavBurgerI> = (focus) => {
  const dispatch = useAppDispatch()
  const [searhBurger, setSearchBurger] = useState(false)
  const [presetFocus, setPresetFocus] = useState('')

  const handlePreset = (e:string|null) =>{
    if (presetFocus === e){
      setPresetFocus('')
      dispatch(sortByPreset(null))
    }
    else {
      if(e==='vibe'){
        setPresetFocus(e)
        dispatch(sortByPreset(e))
      }
      else if(e==='community'){
        setPresetFocus(e)
        dispatch(sortByPreset(e))
      }
      else if (e==='artist'){
        setPresetFocus(e)
        dispatch(sortByPreset(e))
      }
    }
  }

  if (focus){
    return(
      <div className={styles.NavBarWrapper}>
        <div className={styles.searchWrapper}>
          <div className={styles.inputWrapper}>
            <input className={styles.searchInput} type="text" />
            <div className={styles.burgerWrapper}>
              <div
                onClick={()=>setSearchBurger(!searhBurger)}
                className={styles.burgerSocket}>
                  <SvgSelector
                    value='burger'
                    tier='standart'
                    focus={searhBurger}
                  />
              </div>
            </div>
          </div>
          <div className={styles.searchIconWrapper}>
            <div className={styles.searchIconSocket}>
              <SvgSelector
                value='search'
                tier='standart'
                focus={true}
              />
            </div>
          </div>
        </div>
        <motion.div className={styles.outputPresetWrapper}>
            <div className={styles.outputPresetSegment}>
              <div
                onClick={()=>handlePreset('vibe')}
              className={styles.outputPresetSocket}>
                <SvgSelector
                  value='vibe'
                  tier='standart'
                  focus={presetFocus==='vibe'?true:false}
                />
              </div>
            </div>
            <div className={styles.outputPresetSegment}>
              <div
                onClick={()=>handlePreset('community')}
              className={styles.outputPresetSocket}>
                <SvgSelector
                  value='community'
                  tier='standart'
                  focus={presetFocus==='community'?true:false}
                />
              </div>
            </div>
            <div className={styles.outputPresetSegment}>
              <div
                onClick={()=>handlePreset('artist')}
              className={styles.outputPresetSocket}>
                <SvgSelector
                  value='artist'
                  tier='standart'
                  focus={presetFocus==='artist'?true:false}
                />
              </div>
            </div>
          </motion.div>
        </div>
    )
  }
  else
  return (
    <div className={styles.NavBarWrapper}>
        <div className={styles.inputWrapper}>
            <input className={styles.searchInput} type="text" />
            <div className={styles.burgerWrapper}>
              <div
                onClick={()=>setSearchBurger(!searhBurger)}
                className={styles.burgerSocket}>
                  <SvgSelector
                    value='burger'
                    tier='standart'
                    focus={searhBurger}
                  />
              </div>
            </div>
          </div>
          <div className={styles.searchIconWrapper}>
            <div className={styles.searchIconSocket}>
              <SvgSelector
                value='search'
                tier='standart'
                focus={false}
              />
            </div>
          </div>
    </div>
  )
}
