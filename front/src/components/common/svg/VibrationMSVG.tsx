import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const VibrationMSVG:React.FC<MSVG> = ({ focus}) => {

    const [stopOne, animateStopOne] = useAnimate()
    const [stopTwo, animateStopTwo] = useAnimate()
    const [stopThree, animateStopThree] = useAnimate()
    const [stopFour, animateStopFour] = useAnimate()

    useEffect(()=>{
        if(focus){
            animateStopOne(stopOne.current, {stopColor:styleSheet.gradients.quaterciary.FirstStop})
            animateStopTwo(stopTwo.current, {stopColor:styleSheet.gradients.quaterciary.SecondStop})
            animateStopThree(stopThree.current, {stopColor:styleSheet.gradients.quaterciary.ThirdStop})
            animateStopFour(stopFour.current, {stopColor:styleSheet.gradients.quaterciary.FourthStop})
        }
        else{
            animateStopOne(stopOne.current, {stopColor:styleSheet.gradients.gig.off})
            animateStopTwo(stopTwo.current, {stopColor:styleSheet.gradients.gig.off})
            animateStopThree(stopThree.current, {stopColor:styleSheet.gradients.gig.off})
            animateStopFour(stopFour.current, {stopColor:styleSheet.gradients.gig.off})
        }
    }, [focus])

  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >
        <svg width="100%" height="100%" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_50_303)">
            <path d="M58.2121 67.9028C58.1651 55.3738 64.6761 43.2441 74.6064 35.3082C89.2237 23.6264 110.81 21.3548 127.074 30.949C131.516 33.5693 135.393 37.0238 138.431 41.1074C140.355 43.6925 137.543 47.1003 134.649 45.6758C130.374 43.5702 125.98 41.808 121.097 40.8599C111.887 39.0716 102.23 39.7206 93.3862 42.9009C85.1772 45.8533 77.7589 50.8068 71.9441 57.3025C68.6564 60.9757 66.1516 65.0046 63.9791 69.2491C62.5268 72.0874 58.2244 71.0914 58.2121 67.9028ZM126.682 57.4765C115.996 50.3085 102.254 47.7564 90.1902 51.7189C87.1524 52.7167 87.5252 57.1127 90.6831 57.6155C95.3963 58.3667 100.008 59.5007 104.522 61.4882C112.505 65.0034 119.515 70.5177 124.863 77.4016C130.625 84.8181 134.227 93.7895 135.369 103.089C135.975 108.021 135.654 112.738 134.97 117.45C134.508 120.638 138.622 122.256 140.489 119.63C143.439 115.482 145.531 110.732 146.654 105.703C150.729 87.4567 142.087 67.8096 126.682 57.4765ZM110.002 79.35C110.768 84.2302 111.112 89.1309 110.552 94.2224C109.569 103.157 106.204 111.878 100.896 119.146C95.4463 126.607 88.0739 132.582 79.5967 136.274C75.34 138.128 71.0542 139.185 66.6794 139.938C63.5306 140.48 63.284 144.89 66.3323 145.845C71.0655 147.329 76.0918 147.869 81.0954 147.45C100.021 145.865 116.304 131.299 121.353 113.228C124.787 100.94 122.921 87.2137 115.462 77.0629C113.575 74.4949 109.508 76.2032 110.002 79.35ZM66.0184 125.713C78.9452 125.304 91.655 119.29 99.1217 108.954C100.994 106.362 98.1058 103.022 95.2532 104.47C90.9991 106.629 86.6009 108.42 81.7813 109.456C72.6267 111.425 62.9273 110.929 54.0475 107.921C45.759 105.113 38.3035 100.294 32.3386 93.9076C28.9456 90.2745 26.4291 86.27 24.2095 82.0567C22.7075 79.2065 18.4261 80.3124 18.4613 83.5326C18.5167 88.62 19.6193 93.6898 21.6707 98.4175C29.0926 115.524 47.5287 126.299 66.0184 125.713ZM63.7448 103.267C66.7854 104.241 69.0639 100.462 66.8087 98.2045C63.4387 94.8299 60.3756 91.2056 57.8901 86.9473C53.3407 79.1526 50.8567 70.1617 50.7727 61.1331C50.6891 52.0746 53.0293 43.0942 57.4202 35.1845C59.832 30.8394 62.8689 27.2118 66.1959 23.8008C68.4463 21.4936 66.0699 17.7693 63.0136 18.7977C58.1855 20.4219 53.6971 23.0365 49.8286 26.4457C35.665 38.9288 31.1576 60.1281 37.7667 77.6234C42.2556 89.5067 51.7971 99.441 63.7448 103.267Z" fill="url(#paint0_radial_50_303)"/>
            </g>
            <defs>
            <filter id="filter0_d_50_303" x="0.65654" y="0.817673" width="164.807" height="164.574" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="8.9022"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.952941 0 0 0 0 0.819608 0 0 0 0 0.34902 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_50_303"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_50_303" result="shape"/>
            </filter>
            <radialGradient id="paint0_radial_50_303" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(83 83) rotate(89.5001) scale(64.5409)">
                <motion.stop ref={stopOne} initial={focus?{stopColor:styleSheet.gradients.gig.off}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}} offset="0.310127" stop-color="#DDC34D"/>
                <motion.stop ref={stopTwo} initial={focus?{stopColor:styleSheet.gradients.gig.off}:{stopColor:styleSheet.gradients.quaterciary.SecondStop}} offset="0.554923" stop-color="#AAE05C"/>
                <motion.stop ref={stopThree} initial={focus?{stopColor:styleSheet.gradients.gig.off}:{stopColor:styleSheet.gradients.quaterciary.ThirdStop}} offset="0.799719" stop-color="#66C7D1"/>
                <motion.stop ref={stopFour} initial={focus?{stopColor:styleSheet.gradients.gig.off}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}} offset="1" stop-color="#A14EA7"/>
            </radialGradient>
            </defs>
        </svg>
    </motion.div>
  )
}

export default VibrationMSVG