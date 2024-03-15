"use client"
import React, {useState, useEffect} from 'react'
import styles from './top.module.scss'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import {useSession} from 'next-auth/react'
import { parseUserEngagementData, setArtistAccountFocus, setFocusAccountSelection, setTargetGroupAccountFocus, setUserAccountFocus, setVenueAccountFocus } from '@/store/user'
import { getEngagement } from '@/lib/actions/profiles/user.actions'



interface ProfileI{

}

const TopProfile:React.FC<ProfileI> = () => {


  const [wrapperSocpe, animateWrapper] = useAnimate()
  const [focusImageScope, animateSelectedMask] = useAnimate()


  const [userSubScope, animateUserSub] = useAnimate()
  const [artistSubScope, animateArtistUserSub] = useAnimate()
  const [venueSubScope, animateVenueUserSub] = useAnimate()
  const [targetSubScope, animateTargetUserSub] = useAnimate()

  const [selectorIconScope, animateIconSelector] = useAnimate()

  // debugger
  const dispatch = useAppDispatch()
  const focusAccount = useAppSelector(({user})=>user.focusSubAccount)
  const roleSelector = useAppSelector(({user})=>user.subAccounts)
  const router=useRouter()
  const session = useSession()

  const [isRoleSelectorFocused, setRoleSelectorFocus] = useState(false)
  const [isAccountFocused, setAccountFocused] = useState(false)
  


  // useEffect(()=>{
  //   const focusEnter = ()=>{
  //     animateWrapper(wrapperSocpe.current, {backdropFilter:'blur(10px)'})
  //     animateSelectedMask(selectedImageMaskScope.current, {backgroundImage:`variables.$linearFocusGradient`})
  //   }
  //   const focusExit = async() =>{
  //     animateWrapper(wrapperSocpe.current, {boxShadow:'null'})
  //     animateSelectedMask(selectedImageMaskScope.current, {backgroundImage:`variables.$linearTemplateGradient`})
  //   }
  //   if(isAccountFocused){
  //      focusEnter()
  //   }
  //   else  focusExit()
  // },[isAccountFocused])
  useEffect(()=>{
    if(session.data?.userData){
      fetch(`http://localhost:3000/api/profiles/user/data/engagement/${session.data.userData._id}`,{
        method:'GET',
        headers:{
          'Content-type':'Application-json'
        },
        cache:'no-cache'
      }).then( async res=>{
         const engagamenets = await res.json()
         console.log('engagements are', engagamenets)
         dispatch(parseUserEngagementData(engagamenets))
      })
    }
    
    
  }, [])





  useEffect(()=>{
    if(roleSelector.artist.focusAccount||roleSelector.venue.focusAccount|| roleSelector.targetGroup.focusAccount ){
      if(isAccountFocused){
        animateIconSelector(selectorIconScope.current, {backgroundColor:'rgba(136,134,134, 1)'})
      }else animateIconSelector(selectorIconScope.current, {backgroundColor:'rgba(136,134,134, 0.5)'})
    }

  }, [isRoleSelectorFocused])

  return (
    <motion.div
      initial={{x:-15, opacity:0}}
      animate={{x:0, opacity:1}}
      exit={{x:-15, opacity:0}}
      layout
      key='Profile'
    className={styles.profileWrapper}>
      <motion.div
        onClick={()=>{
          if(!focusAccount){
            router.push(`/Profile/User/${session.data?.userData._id}`)
          }
          else if(focusAccount.type==='artist'){
            router.push(`/Profile/Artist/${focusAccount._id}`)
          }
          else if(focusAccount.type==='venue'){
            router.push(`/Profile/Venue/${focusAccount._id}`)
          }
          else if(focusAccount.type==='targetGroup'){
            router.push(`/Profile/TargetGroup/${focusAccount._id}`)
          }
        }}
      className={styles.focusSegment}>
        <motion.div 
          ref={focusImageScope}
          style={focusAccount?{backgroundImage:`url(${focusAccount.pic}))`}:{backgroundImage:`url(${session.data?.userData.core.pic})`}}
        className={styles.pic}/>
        <motion.div className={styles.title}>
          {focusAccount?focusAccount.title:session.data?.userData.core.nick}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {(roleSelector.artist.focusAccount||roleSelector.targetGroup.focusAccount||roleSelector.venue.focusAccount) &&
          <motion.div
            key={'SubAccounts'}
            initial={{width:0}}
            animate={{width:'auto'}}
            exit={{width:0}}
          className={styles.subAccounts}
            onMouseEnter={()=>{
              setRoleSelectorFocus(true)
            }}
            onMouseLeave={()=>{
              setRoleSelectorFocus(false)
            }}
          >
            <motion.div
              initial={{x:-15, opacity:0}}
              animate={{x:0, opacity:1}}
              exit={{x:-15, opacity:0}}
              ref={selectorIconScope}
            className={styles.selectorIcon}>
              <motion.div 
                key={'selectorIcon'}
                initial={{x:-15, opacity:0, rotate:-90}}
                animate={{x:0, opacity:1, rotate:0}}
                exit={{x:-15, opacity:0, rotate:-90}}
                
              className={styles.socket}>
                <SvgSelector
                  tier='standart'
                  value='networking'
                  focus={isRoleSelectorFocused?true:false}
                />
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {
                isRoleSelectorFocused &&
                <motion.div
                  key={'output'}
                  initial={{ width:0,opacity:0}}
                  animate={{ width:'auto',opacity:1}}
                  exit={{ width:0,opacity:0}}
                className={styles.subAccountsOutput}>
                  {
                    (focusAccount) &&
                      <motion.div
                        key={'user'}
                        initial={{ opacity:0}}
                        animate={{ opacity:1}}
                        exit={{ opacity:0}}
                        whileHover={{backgroundColor:'rgba(136,134,134, 1)'}}
                        onClick={()=>{
                          dispatch(setUserAccountFocus())
                          router.push(`/Profile/User/${session.data?.userData._id}`)
                        }}
                      className={styles.subAccountWrapper}>
                        <div 
                          style={{backgroundImage:`url(${session.data?.userData.image})`}}
                        className={styles.pic}/>
                        {session.data?.userData.name}
                      </motion.div>
                  }
                  <AnimatePresence>
                  {
                    (focusAccount?.type!=='artist' && roleSelector.artist.focusAccount) &&
                    <motion.div 
                        key={'artist'}
                        initial={{ x:-15,opacity:0}}
                        animate={{ x:0,opacity:1}}
                        exit={{ x:-15,opacity:0}}
                        whileHover={{borderColor:'white', borderStyle:'solid'}}
                      onClick={()=>{
                        dispatch(setFocusAccountSelection('artist'))
                        router.push(`/Profile/Artist/${roleSelector.artist.focusAccount?._id}`)
                      }}
                      
                    className={styles.subAccountWrapper}>
                      <div
                        style={{backgroundImage:`url(${roleSelector.artist.focusAccount?.image})`}}
                      className={styles.pic}/>
                      {roleSelector.artist.focusAccount.title}
                    </motion.div>
                  }
                  </AnimatePresence>
                  {
                    (focusAccount?.type!=='venue' && roleSelector.venue.focusAccount) &&
                    <motion.div 
                      key={'venue'}
                      initial={{ opacity:0}}
                      animate={{ opacity:1}}
                      exit={{ opacity:0}}
                      whileHover={{backgroundColor:'rgba(136,134,134, 1)'}}
                      onClick={()=>{
                        dispatch(setFocusAccountSelection('venue'))
                        router.push(`/Profile/Venue/${roleSelector.venue.focusAccount?._id}`)
                      }}
                      style={{backgroundImage:`url(${roleSelector.venue.focusAccount?.image})`}}
                    className={styles.subAccountWrapper}>
                      <div className={styles.pic}/>
                      {roleSelector.venue.focusAccount.title}
                    </motion.div>
                  }
                  {
                    (focusAccount?.type!=='targetGroup' && roleSelector.targetGroup.focusAccount) &&
                    <motion.div 
                      key={'targetGroup'}
                      initial={{ opacity:0}}
                      animate={{ opacity:1}}
                      exit={{ opacity:0}}
                      whileHover={{backgroundColor:'rgba(136,134,134, 1)'}}
                      onClick={()=>{
                        dispatch(setFocusAccountSelection('targetGroup'))
                        router.push(`/Profile/TargetGroup/${roleSelector.targetGroup.focusAccount?._id}`)
                      }}
                      style={{backgroundImage:`url(${roleSelector.targetGroup.focusAccount?.image})`}}
                    className={styles.subAccountWrapper}>
                      <div className={styles.pic}/>
                      {roleSelector.targetGroup.focusAccount.title}
                    </motion.div>
                  }
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