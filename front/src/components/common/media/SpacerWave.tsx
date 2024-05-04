"use client"

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import {motion, useAnimate} from 'framer-motion'

interface SpacerWaveI {
    fill:{
        one:string,
        two:string,
        three:string,
        four:string,
        five:string
    }
    focus:'default'|"prefocus"|"focus"
    rotate:boolean
}

const SpacerWave:React.FC<SpacerWaveI> = ({fill, focus, rotate}) => {
    
    const [oneScope, animateOneScope] = useAnimate()
    const [twoScope, animateTwoScope] = useAnimate()
    const [threeScope, animateThreeScope] = useAnimate()
    const [fourScope, animateFourScope] = useAnimate()
    const [fiveScope, animateFiveScope] = useAnimate()

    useEffect(()=>{
        if(focus==='default'){
            animateOneScope(oneScope.current, {fillOpacity:1})
            animateTwoScope(twoScope.current, {fillOpacity:0.5})
            animateThreeScope(threeScope.current, {fillOpacity:0.3})
            animateFourScope(fourScope.current, {fillOpacity:0})
            animateFiveScope(fiveScope.current, {fillOpacity:0})
        }
        else if(focus==='prefocus'){
            animateOneScope(oneScope.current, {fillOpacity:1})
            animateTwoScope(twoScope.current, {fillOpacity:1})
            animateThreeScope(threeScope.current, {fillOpacity:0.5})
            animateFourScope(fourScope.current, {fillOpacity:0.3})
            animateFiveScope(fiveScope.current, {fillOpacity:0})
        }
        else {
            animateOneScope(oneScope.current, {fillOpacity:1})
            animateTwoScope(twoScope.current, {fillOpacity:1})
            animateThreeScope(threeScope.current, {fillOpacity:1})
            animateFourScope(fourScope.current, {fillOpacity:1})
            animateFiveScope(fiveScope.current, {fillOpacity:1})
        }
    }, [focus])



    
    return (
        <motion.div style={rotate?{transform:"rotate(180deg)"}:{}} className={styles.Spacer}>
            <svg preserveAspectRatio="none" id="visual" viewBox="0 0 900 600" width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="900" height="600" fill="#ffffff"></rect>
            <motion.path
            initial={{fillOpacity:0}}
            ref={fiveScope}   id='5' d="M0 348L21.5 338.3C43 328.7 86 309.3 128.8 306.8C171.7 304.3 214.3 318.7 257.2 322.5C300 326.3 343 319.7 385.8 317.8C428.7 316 471.3 319 514.2 308C557 297 600 272 642.8 276.8C685.7 281.7 728.3 316.3 771.2 322.7C814 329 857 307 878.5 296L900 285L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
             fill={fill.five}
            // fillOpacity={focus==="default"?0:focus==='prefocus'?0:1}
             ></motion.path>
            <motion.path
            initial={{fillOpacity:0}}
            ref={fourScope}  id='4' d="M0 254L21.5 245.8C43 237.7 86 221.3 128.8 212.5C171.7 203.7 214.3 202.3 257.2 216.3C300 230.3 343 259.7 385.8 268.7C428.7 277.7 471.3 266.3 514.2 261C557 255.7 600 256.3 642.8 262.3C685.7 268.3 728.3 279.7 771.2 275.3C814 271 857 251 878.5 241L900 231L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" 
            fill={fill.four}
            // fillOpacity={focus==="default"?0:focus==='prefocus'?0:1}
            ></motion.path>
            <motion.path
            initial={{fillOpacity:0.3}}
            ref={threeScope}  id='3' d="M0 192L21.5 194.5C43 197 86 202 128.8 197.2C171.7 192.3 214.3 177.7 257.2 171.5C300 165.3 343 167.7 385.8 175.3C428.7 183 471.3 196 514.2 194.3C557 192.7 600 176.3 642.8 178.7C685.7 181 728.3 202 771.2 215.2C814 228.3 857 233.7 878.5 236.3L900 239L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" 
            fill={fill.three}
            // fillOpacity={focus==="default"?0.3:focus==='prefocus'?0.5:1}
            ></motion.path>
            <motion.path
            initial={{fillOpacity:0.5}}
            ref={twoScope}  id='2' d="M0 121L21.5 123.3C43 125.7 86 130.3 128.8 135.5C171.7 140.7 214.3 146.3 257.2 150.7C300 155 343 158 385.8 153C428.7 148 471.3 135 514.2 129.5C557 124 600 126 642.8 131.5C685.7 137 728.3 146 771.2 153.2C814 160.3 857 165.7 878.5 168.3L900 171L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" 
            fill={fill.two}
            // fillOpacity={focus==="default"?0.8:focus==='prefocus'?1:1}
            ></motion.path>
            <motion.path
            initial={{fillOpacity:1}}
            ref={oneScope}  id='1' d="M0 117L21.5 112C43 107 86 97 128.8 95.5C171.7 94 214.3 101 257.2 101C300 101 343 94 385.8 95.7C428.7 97.3 471.3 107.7 514.2 110C557 112.3 600 106.7 642.8 100.5C685.7 94.3 728.3 87.7 771.2 89C814 90.3 857 99.7 878.5 104.3L900 109L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" 
            fill={fill.one}
            // fillOpacity={focus==="default"?1:focus==='prefocus'?1:1}
            ></motion.path>
            </svg>
        </motion.div>
    )
}

export default SpacerWave