"use client"
import React from 'react'
import styles from './styles.module.scss';
import SvgSelector from '@/Utils/SvgSelector';

interface VibeEssentialsI {
    contentTitle:string
    totalAudience:number
    localAudience?:number
    modality:string
    tags?:string[]
    description?:string
}

const VibeEssentials:React.FC<VibeEssentialsI> = (props) => {


  return (
    <div className={styles.essentialsWrapper}>
        <div className={styles.header}>
            {props.contentTitle}
        </div>
        <div className={styles.body}>
            <div className={styles.state}>
                <div className={styles.audience}>
                    <div className={styles.audienceOutput}>
                        {props.totalAudience}
                    </div>
                    people in
                </div>
                <div className={styles.modality}>
                    {props.modality}
                    <div className={styles.modalitySocket}>
                        <SvgSelector
                            value={props.modality}
                            focus={true}
                            tier='standart'
                        />
                    </div>
                    
                </div>
            </div>
            {props.tags && 
                <div className={styles.tagOutput}>
                {props.tags.map(tag=>{
                            return(<div className={styles.Tag}>
                                {tag}
                            </div>)
                    })
                }
                </div>

            }
            {props.description &&
                <div className={styles.description}>
                    {props.description}
                </div>
            }
            
        </div>
    </div>
  )
}

export default VibeEssentials