"use client"
import React from 'react'
import styles from './styles.module.scss'
import SvgSelector from '@/Utils/SvgSelector'
import { useAppDispatch, useAppSelector} from '@/hooks'
import {useRouter} from 'next/navigation'
import { setFocusedCommunity } from '@/store/focus'
import { useEffect, useState } from 'react'

interface CommunityUnitI {
    id:string
    vibeId:string
    communityLogo:string
    communityTitle:string
    communityType:string
    push:boolean
}

const handleClick = (vibeId:string, communityId:string, focus:boolean ) =>{
    
    

    
    const router = useRouter()
    const dispatch = useAppDispatch()
    try {
        if(focus){
            dispatch(setFocusedCommunity(null))
            router.push(`/Vibe/${vibeId}`)
        }
        else {
            dispatch(setFocusedCommunity(communityId))
            router.push(`/Vibe/Community/${communityId}`)
        }
    } catch (error:any) {
        
    }
}
const CommunutyUnit:React.FC<CommunityUnitI> = ({id, vibeId, communityLogo, communityTitle, push}) => {
    const focusedCommunity = useAppSelector(({focus})=>focus.focusCommunity)
    const [isCommunityFocused, setCommunityFocus] = useState(false)
    useEffect(()=>{
        if(focusedCommunity && focusedCommunity.communityId===id){
            setCommunityFocus(true)
        }
        else setCommunityFocus(false)
    },[focusedCommunity])

    return (
    <div onClick={()=>{handleClick(vibeId, id, isCommunityFocused)}} className={styles.communityUnit}>
        <div className={styles.imgSegment}>
            <img className={styles.img} src={`src/assets/community/logos/${communityLogo}.jpg`} alt="cLogo" />
        </div>
        <div className={styles.titleSegment}>
            {communityTitle}
        </div>
        <div className={styles.pushSegment}>
            {
                push?
                <div className={styles.pushSocket}>
                    <SvgSelector
                        value={`${push}`}
                        tier='standart'
                        focus={isCommunityFocused}
                    />
                </div>
                
                :
                null
            }
        </div>

    </div>
  )
}

export default CommunutyUnit