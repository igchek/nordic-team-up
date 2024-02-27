"use client"
import React, { ChangeEvent } from 'react'
import {useRouter} from 'next/navigation';
import { useState, useEffect } from 'react';
import style from './styles.module.scss'
import {signIn, useSession} from 'next-auth/react';
import { useAppDispatch } from '@/hooks';
import { setInvolvedVibes } from '@/store/involvedContent';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { useUploadThing } from '@/Utils/uploadhelpers';
import { getEngagement } from '@/lib/actions/profiles/user.actions';
import { parseUserEngagementData } from '@/store/user';


const SignUpForm = () => {
  
  const {startUpload} = useUploadThing('media')

  const [actionScope, animateAction] = useAnimate()
  const [photoScope, animatePhoto] = useAnimate()
  const dispatch = useAppDispatch()
  const session = useSession()
  const router = useRouter()
    const [nick, setNick] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [geo, setGeo] = useState('')
    const [isSubmittable, setSubmittability]=useState(false)
    const [file, setFile] = useState<File[]>([])
    const [pic, setImgUrl] = useState('')

    useEffect(()=>{
      if(nick && password && geo){
        setSubmittability(true)
      }else setSubmittability(false)
    },[nick, password, geo])

  async function handleSubmit(e:any){
    e.preventDefault()
    // console.log('submit photo file is', pic)
    try {
      const uploadRes = await startUpload(file!)
      
      if(uploadRes && uploadRes[0].url){
        console.log('upload res is',uploadRes[0].url)
        setImgUrl(uploadRes[0].url)
        let pic = uploadRes[0].url
        const res = await fetch('http://localhost:3000/api/profiles/user',{
          method:"POST",
          cache:'no-cache',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({nick, pic, password, email, geo})
          
  
        })
        // console.log(`signUp fetch is`, res)
        
          if(res.ok){
              signIn('credentials',{
              nick:nick,
              pic:pic,
              email:email,
              password:password,
              redirect:false
            }).then(res=>{
              
              fetch (`http://localhost:3000/api/content/userContent/${session?.data?.userData?._id}`, {
              method:'GET',
              cache:'no-store'
               }).then((res:any)=> res.json()).then((data)=>{
                  dispatch(setInvolvedVibes(data))
                  console.log('fetched vibes data is', data)
                  router.push('/')
               })
              }).then(()=>{
                if(session.data?.userData._id){
                  if(session.data?.userData){
                    getEngagement({id:session.data.userData._id})
                    .then((res)=>{
                     const {engagement} = res
                     dispatch(parseUserEngagementData(engagement))
                     
                   })
                 }
                }
              })
      }

          
          
        }
        
      
    } catch (error:any) {
      console.log(`crashed submiting a user`, error)
    }

    
  }
  const handleFile = (e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    const fileReader = new FileReader()
      if(e.target.files){
        
        const fileUpload = e.target.files[0]

        setFile([...file, fileUpload])
        // debugger
        fileReader.onload = async (event) =>{
          const imgDataUrl = event.target?.result?.toString()||''
          setImgUrl(imgDataUrl)
        }
        fileReader.readAsDataURL(fileUpload)
        
      }
    
  }

  useEffect(()=>{
    if(pic){
      // console.log('preUpload is',preUploadImgUrl)
      // console.log('pic is', pic)
      animatePhoto(photoScope.current, {backgroundImage:`url(${pic})`})
    }
  },[pic])

  // useEffect(()=>{
  //   console.log(`upload file is `, file)
  // }, [file])
  return (
    <motion.form 
      initial={{opacity:0, y:150}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:150}}
    onSubmit={handleSubmit} className={style.form}>
        <div className={style.imageSegment}>
          
          <motion.label
            initial={{backgroundColor:'rgba(136, 134, 134, 1)'}}
            animate={{backgroundImage:'url(https://utfs.io/f/e2f7fda8-e6cc-4451-af72-80f7305738a0-qxm3rt.jpg)'}}
            onMouseEnter={()=>{if(!pic){
              animatePhoto(photoScope.current, {backgroundImage:'url(https://utfs.io/f/3d5da24e-5282-4a37-bbb2-8bf1fa7c156d-khqj7n.svg)'})
            }
            }}
            onMouseLeave={()=>{
              if(!pic){
                animatePhoto(photoScope.current, {backgroundImage:'url(https://utfs.io/f/e2f7fda8-e6cc-4451-af72-80f7305738a0-qxm3rt.jpg)'})
              }
            }}
            ref={photoScope}
            className={style.imageSocket}>
              <input onChange={handleFile} className={style.input} accept='image/*' type="file" />
            </motion.label>
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setNick(e.target.value)}} className={style.input} placeholder='Nick' value={nick} type="text" />
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setPassword(e.target.value)}} className={style.input} placeholder='Password' value={password} type="password" />
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setEmail(e.target.value)}} className={style.input} placeholder='Email' value={email} type="email" />
        </div>
        <div className={style.inputSocket}>
          <input onChange={(e)=>{setGeo(e.target.value)}} className={style.input} placeholder='Geo' value={geo} type="text" />
        </div>
        <AnimatePresence>
        {isSubmittable &&
        <motion.div
          key={'socket'}
          initial={{opacity:0, y:15}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:15}}
        className={style.actionSocket}>
          <motion.button
            onMouseEnter={()=>{animateAction(actionScope.current, {opacity:1})}}
            onMouseLeave={()=>{animateAction(actionScope.current, {opacity:0.5})}}
            ref={actionScope}
            key={'button'}
            initial={{opacity:0, y:15}}
            animate={{opacity:0.5, y:0}}
            exit={{opacity:0, y:15}}
            type='submit'
            className={style.actionButton}>
            Sign Up
          </motion.button>
        </motion.div>
        }
        </AnimatePresence>
    </motion.form>
  )
}

export default SignUpForm