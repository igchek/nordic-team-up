"use client"
import React, {useState, useEffect} from 'react'
import styles from './top.module.scss'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import {useSession} from 'next-auth/react'
import { setArtistAccountFocus, setTargetGroupAccountFocus, setVenueAccountFocus } from '@/store/user'



interface ProfileI{

}

const TopProfile:React.FC<ProfileI> = () => {


  const [wrapperSocpe, animateWrapper] = useAnimate()
  const [selectedImageMaskScope, animateSelectedMask] = useAnimate()
  // debugger
  const dispatch = useAppDispatch()
  const focusAccount = useAppSelector(({user})=>user.focusSubAccount)
  const roleSelector = useAppSelector(({user})=>user.subAccounts)
  const router=useRouter()
  const session = useSession()

  const [isRoleSelectorFocused, setRoleSelectorFocus] = useState(false)
  const [isAccountFocused, setAccountFocused] = useState(false)
  


  useEffect(()=>{
    const focusEnter = ()=>{
      animateWrapper(wrapperSocpe.current, {backdropFilter:'blur(10px)'})
      animateSelectedMask(selectedImageMaskScope.current, {backgroundImage:`variables.$linearFocusGradient`})
    }
    const focusExit = async() =>{
      animateWrapper(wrapperSocpe.current, {boxShadow:'null'})
      animateSelectedMask(selectedImageMaskScope.current, {backgroundImage:`variables.$linearTemplateGradient`})
    }
    if(isAccountFocused){
       focusEnter()
    }
    else  focusExit()
  },[isAccountFocused])

  return (
    <motion.div
      ref={wrapperSocpe}
      initial={{opacity:0, x:-15}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-15}}
    onClick={()=>{
      if(!focusAccount){
        if(isAccountFocused){
          setAccountFocused(!isAccountFocused)
          router.back()
        }else{
          setAccountFocused(!isAccountFocused)
          router.push(`/Profile/User/${session.data?.userData._id}`)
        }
        
      }
      else if(focusAccount.type==='artist'){
        if(isAccountFocused){
          setAccountFocused(!isAccountFocused)
          router.back()
        }else{
          setAccountFocused(!isAccountFocused)
          router.push(`/Profile/Artist/${focusAccount._id}`)
        }
        
      }
      else if(focusAccount.type==='venue'){
        if(isAccountFocused){
          setAccountFocused(!isAccountFocused)
          router.back()
        }else{
          setAccountFocused(!isAccountFocused)
          router.push(`/Profile/Venue/${focusAccount._id}`)
        }
        
      }
      else if(focusAccount.type==='targetGroup'){
        if(isAccountFocused){
          setAccountFocused(!isAccountFocused)
          router.back()
        }else{
          setAccountFocused(!isAccountFocused)
          router.push(`/Profile/TargetGroup/${focusAccount._id}`)
        }
        
      }
    }} className={styles.profileWrapper}>
      <div className={styles.coreSegment}>
        <motion.div ref={selectedImageMaskScope} className={styles.imageMask}>
          <div style={{backgroundImage:`url(${focusAccount?focusAccount.pic:session.data?.userData.core.pic})`}} className={styles.image}/>
        </motion.div>
        <motion.div className={styles.nickSegment}>
          {session.data?.userData.core.nick}
        </motion.div>
      </div>
      <AnimatePresence>
        {(roleSelector.artist.focusAccount || roleSelector.venue.focusAccount) &&
          <motion.div
            initial={{x:-15, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-15, opacity:0}}
          className={styles.roleSelector}>
            <motion.div 
              initial={isRoleSelectorFocused?{backgroundColor:'rgba(191, 191, 191, 0.5)'}:{backgroundColor:'rgba(191, 191, 191, 0)'}}
              animate={isRoleSelectorFocused?{backgroundColor:'rgba(191, 191, 191, 1)'}:{backgroundColor:'rgba(191, 191, 191, 0.5)'}}
              whileHover={{backgroundColor:'rgba(191, 191, 191, 1)'}}
              onClick={()=>{setRoleSelectorFocus(!isRoleSelectorFocused)}}
            className={styles.iconMask}>
              <div className={styles.iconSocket}>
                <SvgSelector
                  tier='standart'
                  value='networking'
                  focus={isRoleSelectorFocused?true:false}
                />
              </div>
            </motion.div>
            <AnimatePresence>
            {isRoleSelectorFocused &&
              <motion.div
                initial={{x:-15, opacity:0}}
                animate={{x:0, opacity:1}}
                exit={{x:-15, opacity:0}}
                key="selector output"
                className={styles.selectorOutput}>
                <AnimatePresence>
                {roleSelector.artist.focusAccount &&
                  <motion.div className={styles.iconSegment}>
                    <div onClick={()=>{
                      dispatch(setArtistAccountFocus((focusAccount && focusAccount.type==='artist')?false:true))
                    }} className={styles.iconSocket}>
                      <SvgSelector
                        tier='standart'
                        value='artist'
                        focus={(focusAccount && focusAccount.type==='artist')?true:false}
                      />
                    </div>
                  </motion.div>
                }
                {roleSelector.venue.focusAccount &&
                    <div onClick={()=>{
                      dispatch(setVenueAccountFocus((focusAccount && focusAccount.type==='venue')?false:true))
                    }} className={styles.iconSocket}>
                    <SvgSelector
                      tier='standart'
                      value='venue'
                      focus={(focusAccount && focusAccount.type==='venue')?true:false}
                    />
                  </div>
                }
                {roleSelector.targetGroup.focusAccount &&
                    <div onClick={()=>{
                      dispatch(setTargetGroupAccountFocus((focusAccount && focusAccount.type==='targetGroup')?false:true))
                    }} className={styles.iconSocket}>
                    <SvgSelector
                      tier='standart'
                      value='targetGroup'
                      focus={(focusAccount && focusAccount.type==='targetGroup')?true:false}
                    />
                  </div>
                }
                </AnimatePresence>
                  
                
              </motion.div>
            }
            </AnimatePresence>
          </motion.div>
          
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default TopProfile