"use client"
import style from './styles.module.scss'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setArtistAccountFocus, setTargetGroupAccountFocus, setVenueAccountFocus } from '@/store/user'

interface EngagementUnitI{
    _id:string
    role:string
    title:string
    pic:string
}

const EngagementUnit:React.FC<EngagementUnitI> = ({_id, title,pic, role}) => {
    const dispatch = useAppDispatch()
    if(role==='artist'){
        const focusArtist = useAppSelector(({user})=>user.subAccounts.artist.focusAccount)
    return (
    <div 
        onClick={()=>{
            dispatch(setArtistAccountFocus(_id))
           
        }}
    className={style.engagementUnit}>
        <div style={{backgroundImage:`url(${pic})`}} className={style.logoWrapper}/>

        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    else if(role==='venue'){
        const focusVenue= useAppSelector(({user})=>user.subAccounts.venue.focusAccount)
    return (
    <div 
        onClick={()=>{
            dispatch(setVenueAccountFocus(_id))
            
        }}
    className={style.engagementUnit}>
        <div style={{backgroundImage:`url(${pic})`}} className={style.logoWrapper}/>
        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    else if(role==='target group'){
    const focusTarget = useAppSelector(({user})=>user.subAccounts.targetGroup.focusAccount)
    return (
    <div 
        onClick={()=>{
            dispatch(setTargetGroupAccountFocus(_id))
            
        }}
    className={style.engagementUnit}>
        <div style={{backgroundImage:`url(${pic})`}} className={style.logoWrapper}/>
        <div className={style.titleWrapper}>
            {title}
        </div>
    </div>
  )
    }
    
}

export default EngagementUnit