'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import {interpolate} from 'flubber'
import {motion, animate, useMotionValue, useTransform} from 'framer-motion'
interface MorphingWaveI {
    waveStates:string[]
    fill:string
}



const MorphingWave:React.FC<MorphingWaveI> = ({waveStates, fill}) => {
    const [pathIndex , setPathIndex] = useState(0)
    const progress = useMotionValue(pathIndex)
    
    const indexArray = waveStates.map((_, i)=>i)
    const wavePath = useTransform<unknown, string>(progress, indexArray, waveStates, {
        mixer:(a,b)=>interpolate(a,b, {maxSegmentLength:false})
    })

    useEffect(()=>{
        const animation = animate(progress, pathIndex, {
            duration:1, 
            ease:'linear',
            delay:0.5,
            onComplete:()=>{
                if(pathIndex===waveStates.length-1){
                    progress.set(1)
                    setPathIndex(1)
                }
                else{
                    setPathIndex(pathIndex+1)
                }
            }
        })
        return ()=>{animation.stop()}
    }, [pathIndex])

    
    return (
    <motion.path fill={fill} d={wavePath} />
  )
}

export default MorphingWave