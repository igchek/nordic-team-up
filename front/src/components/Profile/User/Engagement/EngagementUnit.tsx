"use client"
import style from './styles.module.scss'
import Image from 'next/image'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setFocusArtistAccount, setFocusTargetGroupAccount, setFocusVenueAccount } from '@/store/focus'

interface EngagementUnitI{
    _id:string
    role:string
    title:string
    pic:string
}

const EngagementUnit:React.FC<EngagementUnitI> = ({_id, title,pic, role}) => {
    const dispatch = useAppDispatch()
    if(role==='artist'){
        const focusArtist = useAppSelector(({focus})=>focus.subAccount.artist)
    return (
    <div 
        onClick={()=>{
            if(focusArtist){
                dispatch(setFocusArtistAccount(_id))
            }
            else dispatch(setFocusArtistAccount(null))
            
        }}
    className={style.engagementUnit}>
        <div className={style.logoWrapper}>
            <Image
                src={require(`@/assets/ArtistLogo/${pic}.jpg`)}
                className={style.logo}
                alt='logo'
            />
        </div>
        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    else if(role==='venue'){
        const focusVenue= useAppSelector(({focus})=>focus.subAccount.venue)
    return (
    <div 
        onClick={()=>{
            if(focusVenue?.id!==_id || !focusVenue){
                dispatch(setFocusVenueAccount(_id))
            }
            else dispatch(setFocusVenueAccount(null))
            
        }}
    className={style.engagementUnit}>
        <div className={style.logoWrapper}>
            <Image
                src={require(`@/assets/VenueLogo/${pic}.jpg`)}
                className={style.logo}
                alt='logo'
            />
        </div>
        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    else if(role==='target group'){
    const focusTarget = useAppSelector(({focus})=>focus.subAccount.targetGroup)
    return (
    <div 
        onClick={()=>{
            if(focusTarget?.id!==_id || !focusTarget){
                dispatch(setFocusTargetGroupAccount(_id))
            }
            else dispatch(setFocusTargetGroupAccount(null))
            
        }}
    className={style.engagementUnit}>
        <div className={style.logoWrapper}>
            <Image
                src={require(`@/assets/TargetLogo/${pic}.jpg`)}
                className={style.logo}
                alt='logo'
            />
        </div>
        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    
}

export default EngagementUnit