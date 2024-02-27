"use client"
import React from 'react'
import styles from './styles.module.scss'
import {motion} from 'framer-motion'
import SvgSelector from '@/Utils/SvgSelector'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {useRouter} from 'next/navigation'
import { setFocusedCommunity, setFocusedVibe } from '@/store/focus'
import {useSession} from 'next-auth/react'
import { setCommunities } from '@/store/communities'

interface ContentI{
    _id:string
    vibeId:string
    poster:string
    contentTitle:string
    authorTitle:string
    modality:string
    audience:number
    focus:Boolean
    communityFocus:Boolean

}

const getCommunities = async(vibeId:string, userId:string) =>{
    try {
        const res =  await fetch(`htttp://localhost:3000/api/Vibe/Community`, {
                        method:'GET', 
                        headers:{
                            'Content-Type':'application/json'
                        },
                        cache:'no-cache',
                        body:JSON.stringify({vibeId, userId})
                    })
        if (res.ok){
            return res.json()
        }
    } catch (error:any) {
        console.log(`crashed fetching communities:${error.message}`)
    }
}

const Content:React.FC<ContentI> = ({_id, vibeId, poster, contentTitle, authorTitle, modality, focus, audience, communityFocus}) => {
    const session = useSession()
    const router = useRouter()
    const dispatch = useAppDispatch()
    const focusedVibe = useAppSelector(({focus})=>focus.focusVibe)

    async function handleClick(e:React.MouseEvent<HTMLElement>){
        e.preventDefault()
        try {
            if(focusedVibe){
                if(focusedVibe.vibeId!==_id){
                    const {communities} = await getCommunities(vibeId, session.data?.userData?.id as string)
                    dispatch(setCommunities(communities))
                    dispatch(setFocusedVibe(_id))
                    router.push(`/Vibe/${_id}`)
                }
                else{
                    dispatch(setFocusedVibe(null))
                    dispatch(setFocusedCommunity(null))
                    router.push('/')
                }
            }
            else {
                const {communities} = await getCommunities(vibeId, session.data?.userData?.id as string)
                dispatch(setCommunities(communities))
                dispatch(setFocusedVibe(_id))
                router.push(`/Vibe/${_id}`)
            }
        } catch (error:any) {
            console.log(`crashed handling click on ${contentTitle}`, error)
        }
    }
  
    if (communityFocus){
    return(
        <div className={styles.content}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${poster}.jpg`} alt="poster" />
            </div>
        </div>)
  }
  else
    return(
        <motion.div onClick={(e)=>handleClick(e)} className={styles.content}>
            <motion.div className={styles.imgWrapper}>
                <img className={styles.img} src={`src/assets/PromoLogo/${poster}.jpg`} alt="poster" />
            </motion.div>
        <motion.div className={styles.titles}>
            <div className={styles.contentTitle}>
                {contentTitle}
            </div>
            <div className={styles.artistTitle}>
                {authorTitle}
            </div>
        </motion.div>
        <div className={styles.contentData}>
            <div className={styles.modalityWrapper}>
                <div className={styles.modalitySocket}>
                    <SvgSelector
                        value={modality}
                        focus={focus}
                        tier='normal'
                    />
                </div>
            </div>
            <div className={styles.audienceWrapper}>
                <div className={styles.audienceSocket}>
                    {audience}
                </div>
            </div>
        </div>
    </motion.div>
    )
    
}



export default Content