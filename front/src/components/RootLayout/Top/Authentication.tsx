import React, {useState, useEffect} from 'react'
import style from './top.module.scss'
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import SvgSelector from '@/Utils/SvgSelector';
interface AuthenticationI {

}

const Authentication:React.FC<AuthenticationI> = () => {
  const [wrapperScope, animateWrapper] = useAnimate()
  const [iconMaskScope, animateIconMask] = useAnimate()
  const [signInScope, animateSignIn] = useAnimate()
  const [signUpScope, animateSignUp] = useAnimate()
  const router = useRouter()
  const pathname = usePathname()
  const [isIconFocused, setIconFocused] = useState(false)


  // useEffect(()=>{
  //   const signInEnter = ()=>{
  //     animateSignIn(signInScope.current, {backgroundColor:'rgba(136, 134, 134, 0.5)'})
  //   }
  //   const signUpEnter = ()=>{
  //     animateSignUp(signUpScope.current, {backgroundColor:'rgba(136, 134, 134, 0.5)'})
  //   }
  //   const signInExit = ()=>{
  //     animateSignIn(signInScope.current,{backgroundColor:'rgba(136, 134, 134, 0)'})
  //   }
  //   const signUpExit = ()=>{
  //     animateSignUp(signUpScope.current,{backgroundColor:'rgba(136, 134, 134, 0)'})
  //   }
  //   if(pathname==='/Profile/signUp'){
  //     signUpEnter()
  //     signInExit()
  //   }
  //   if(pathname==='/Profile/signIn'){
  //     signInEnter()
  //     signUpExit()
  //   }
  // },[pathname])


  useEffect(()=>{
    if(isIconFocused){
      animateWrapper(wrapperScope.current, {width:'20vw'})
    }else animateWrapper(wrapperScope.current, {width:'5vh'})
  },[isIconFocused])

  return (
    <motion.div
      ref={wrapperScope}
      initial={{opacity:0, x:-15}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-15}}
      onMouseLeave={()=>{setIconFocused(false)}}
    className={style.authenticationWrapper}>
        <div className={style.iconSegment}>
          <motion.div
          onMouseEnter={()=>{
            setIconFocused(true)}

          }
          
            ref={iconMaskScope}
          className={style.iconMask}>
            <div className={style.iconSocket}>
              <SvgSelector
                tier='standart'
                value='logIn'
                focus={isIconFocused?true:false}
              />
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
        {isIconFocused &&
          <motion.div
            key={'output'}
            initial={{opacity:0, x:-15}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-15}}
          className={style.output}>
            <motion.button
              key={"signIn button"}
              initial={pathname==='/signIn'?{backgroundColor:'rgba(136, 134, 134, 0.5)'}:{backgroundColor:'rgba(136, 134, 134, 0)'}}
              onMouseEnter={()=>{pathname==='/signIn'?animateSignIn(signInScope.current,{backgroundColor:'rgba(136, 134, 134, 1)'}):animateSignIn(signInScope.current, {backgroundColor:'rgba(136, 134, 134, 0.5)'})}}
              onMouseLeave={()=>{
                if(pathname==='/signIn'){
                  animateSignIn(signInScope.current,{backgroundColor:'rgba(136, 134, 134, 0.5)'})
                }else animateSignIn(signInScope.current,{backgroundColor:'rgba(136, 134, 134, 0)'})
              }}
              ref={signInScope}
              onClick={()=>{router.push('/signIn')}}
              className={style.authenticationButton}>
                Sign In
            </motion.button>
            <motion.button
              initial={pathname==='/signUp'?{backgroundColor:'rgba(136, 134, 134, 0.5)'}:{backgroundColor:'rgba(136, 134, 134, 0)'}}
              key={"signUp button"}
              onMouseEnter={()=>{pathname==='/signUp'?animateSignUp(signUpScope.current,{backgroundColor:'rgba(136, 134, 134, 1)'}):animateSignUp(signUpScope.current,{backgroundColor:'rgba(136, 134, 134, 0.5)'})}}
              onMouseLeave={()=>{
                if(pathname==='/signUp'){
                  animateSignUp(signUpScope.current,{backgroundColor:'rgba(136, 134, 134, 0.5)'})
                }else animateSignUp(signUpScope.current,{backgroundColor:'rgba(136, 134, 134, 0)'})
              }}
              ref={signUpScope}
              onClick={()=>{router.push('/signUp')}}
              className={style.authenticationButton}>
                Sign Up
            </motion.button>  
          </motion.div>
        }
        </AnimatePresence>

    </motion.div>
  )
}

export default Authentication