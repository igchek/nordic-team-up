import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const TargetCommunityMSVG:React.FC<MSVG> = ({ focus}) => {
    const [stopOne, animateStopOne] = useAnimate()
    const [stopTwo, animateStopTwo] = useAnimate()
    const [stopThree, animateStopThree] = useAnimate()
    const [stopFour, animateStopFour] = useAnimate()

    const [blurScope, animateBlur] = useAnimate()

    // useEffect(()=>{
    //     if(focus){
    //         animateStopOne(stopOne.current, {stopColor:styleSheet.gradients.sync.on.stopOne})
    //         animateStopTwo(stopTwo.current, {stopColor:styleSheet.gradients.sync.on.stopTwo})
    //         animateStopThree(stopThree.current, {stopColor:styleSheet.gradients.sync.on.stopThree})
    //         animateStopFour(stopFour.current, {stopColor:styleSheet.gradients.sync.on.stopFour})

    //         animateBlur(blurScope.current, {stdDeviation:"8.9022"})
    //     }
    //     else{
    //         animateStopOne(stopOne.current, {stopColor:styleSheet.gradients.sync.on.stopOne})
    //         animateStopTwo(stopTwo.current, {stopColor:styleSheet.gradients.sync.off})
    //         animateStopThree(stopThree.current, {stopColor:styleSheet.gradients.sync.off})
    //         animateStopFour(stopFour.current, {stopColor:styleSheet.gradients.sync.off})

    //         animateBlur(blurScope.current, {stdDeviation:"0"})
    //     }
    // }, [focus])

  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >
    <svg width="100%" height="100%" viewBox="0 0 393 393" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M257.029 91.7382L136.198 91.0884L75.2205 195.406L135.073 300.373L255.903 301.022L281.38 257.439L210.989 257.06L174.092 192.353L211.682 128.046L277.935 128.402L257.029 91.7382ZM345.551 196.859L271.497 66.9865L121.997 66.1826L46.5508 195.251L120.605 325.124L270.105 325.928L345.551 196.859ZM278.934 140.822L218.783 140.499L218.782 140.5L253.676 140.688L272.124 173.042L253.329 205.195L216.086 204.995L198.801 174.682L188.427 192.43L218.223 244.684L278.374 245.008L308.73 193.077L278.934 140.822Z" fill="url(#paint0_linear_124_279)"/>
        <defs>
        <linearGradient id="paint0_linear_124_279" x1="196.051" y1="66.1826" x2="196.051" y2="325.928" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D4C850"/>
        <stop offset="0.320305" stop-color="#C2D255"/>
        <stop offset="0.669278" stop-color="#6BD8C2"/>
        <stop offset="1" stop-color="#956AAF"/>
        </linearGradient>
        </defs>
    </svg>


    </motion.div>
  )
}

export default TargetCommunityMSVG