"use client"
import SvgSelector from '@/Utils/SvgSelector'
import styles from './styles.module.scss'
import React from 'react'
import { useRouter } from 'next/navigation'

interface EngagementInputI {
    role:string
}

const EngagementInput:React.FC<EngagementInputI> = ({role}) => {
    const router = useRouter()
    if(role==='artist'){
        return (
            <div
                onClick={()=>{
                    router.push(`/setUp/artist`)
                }}
            className={styles.engagementInput}>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgMask}>
                        <div className={styles.imgSocket}>
                            <SvgSelector
                                tier='standart'
                                value='chatCreate'
                                focus={true}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={styles.title}>
                    Set up an artist
                </div>
            </div>
          )
    }
    else if(role==='venue'){
        return (
            <div
                onClick={()=>{
                    // dispatch(setVenueSetUpState('core'))
                    router.push(`/setUp/venue`)
                }}
            className={styles.engagementInput}>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgMask}>
                        <div className={styles.imgSocket}>
                            <SvgSelector
                                tier='standart'
                                value='chatCreate'
                                focus={true}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={styles.title}>
                    Set up a venue
                </div>
            </div>
          )
    }
    else if(role==='target group'){
        return (
            <div
                onClick={()=>{
                    // dispatch(setTargetGroupSetUpState('core'))
                    router.push(`/setUp/targetGroup`)
                }}
            className={styles.engagementInput}>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgMask}>
                        <div className={styles.imgSocket}>
                            <SvgSelector
                                tier='standart'
                                value='chatCreate'
                                focus={true}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={styles.title}>
                    Set up a target group
                </div>
            </div>
          )
    }
  
}

export default EngagementInput