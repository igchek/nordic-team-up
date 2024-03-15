"use client"
import React, { useEffect } from 'react'
import {useRouter} from 'next/navigation';
import { useState } from 'react';
import style from './styles.module.scss'
import {signIn} from 'next-auth/react';
import { motion, useAnimate, AnimatePresence } from 'framer-motion';
import {useSession} from 'next-auth/react'
import { getEngagement } from '@/lib/actions/profiles/user.actions';
import { useAppDispatch } from '@/hooks';
import { parseUserEngagementData } from '@/store/user';

const SignInForm = () => {
    const session = useSession()
    const dispatch = useAppDispatch()
    const [actionScope, animateAction] = useAnimate()
    const router = useRouter()
    const [nick, setNick] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isSubmittable, setSubmittability]=useState(false)
    useEffect(()=>{
      if(nick && password){
        setSubmittability(true)
      }else setSubmittability(false)
    },[nick, password])

  async function handleSubmit(e:any){
    e.preventDefault()
    try {
        const res =  signIn('credentials', {
            nick:nick,
            email:email,
            password:password,
            redirect:false
        })
        res.finally(()=>{
          router.push(`/`)
        })

    } catch (error:any) {
        
    }
  }
  return (
    <motion.form
      initial={{opacity:0, y:150}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:150}}
      onSubmit={handleSubmit}
      className={style.form}>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setNick(e.target.value)}} className={style.input} placeholder='Nick' value={nick} type="text" />
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setPassword(e.target.value)}} className={style.input} placeholder='Password' value={password} type="password" />
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setEmail(e.target.value)}} className={style.input} placeholder='Email' value={email} type="email" />
        </div>
        {isSubmittable &&
        <motion.div
          key={'socket'}
          initial={{opacity:0, y:15}}
          animate={{opacity:0.5, y:0}}
          exit={{opacity:0, y:15}}
        className={style.actionSocket}>
          <motion.button
            onMouseEnter={()=>{animateAction(actionScope.current, {opacity:1})}}
            onMouseLeave={()=>{animateAction(actionScope.current, {opacity:0.5})}}
            ref={actionScope}
            key={'button'}
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:15}}
            type='submit'
            className={style.actionButton}>
            Sign In
          </motion.button>
        </motion.div>
        }
        
    </motion.form>
  )
}

export default SignInForm