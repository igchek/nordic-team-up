import React, { useEffect } from 'react'
import { motion, useAnimate, useMotionValue } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const FormatMSVG:React.FC<MSVG> = ({focus}) => {
    const [polygon, animatePolygon] = useAnimate()
    const [internalDispersion, animateInternalDispersion] = useAnimate()
    const [externalDispersion, animateExternalDispersion] = useAnimate()
   

    useEffect(()=>{
        if(focus){
            animatePolygon(polygon.current, {fill:'#D9D9D9'})
            animateInternalDispersion(internalDispersion.current, {fill:"url(#paint0_linear_100_67)"})
            animateExternalDispersion(externalDispersion.current, {fillOpacity:1})
        }
        else{
            animatePolygon(polygon.current, {fill:'#BCBCBC'})
            animateInternalDispersion(internalDispersion.current, {fill:"#D9D9D9"})
            animateExternalDispersion(externalDispersion.current, {fillOpacity:0})
        }
    }, [focus])
  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >

    <svg width="100%" height="100%" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="focus=on">
        <motion.path
            ref={polygon}
            initial={focus?{
                fill:"#BCBCBC"
            }
            :
            {
                fill:"#D9D9D9"
            }
        }
        id="Polygon" d="M64.5 18L106.502 100.5H22.4978L64.5 18Z" fill="#D9D9D9"/>
        <g id="Dispersion">
        <motion.path
            ref={internalDispersion}
            initial={focus?{
                fill:"url(#paint0_linear_100_67)"
            }
            :
            {
                fill:"#D9D9D9"
            }
        }
        d="M79 46.5C84.4673 57.2394 87.5327 63.2606 93 74C105.302 78.1005 124.5 84.5 124.5 84.5V46.5C124.5 46.5 96.7689 46.5 79 46.5Z" 
        // fill="url(#paint0_linear_100_67)"
        />
        <motion.path
            initial={focus?{
                fillOpacity:1
            }
            :
            {
                fillOpacity:0
            }
        }
        ref={externalDispersion} d="M43 60.5L93 74L79 46.5L43 60.5Z" fill="url(#paint1_linear_100_67)"/>
        </g>
        </g>
        <defs>
        <linearGradient id="paint0_linear_100_67" x1="69.5" y1="46.5" x2="69.5" y2="84.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DDC34D"/>
        <stop offset="0.325" stop-color="#A9E05C"/>
        <stop offset="0.665" stop-color="#5FD6D6"/>
        <stop offset="1" stop-color="#A547A4"/>
        </linearGradient>
        <linearGradient id="paint1_linear_100_67" x1="69.5" y1="46.5" x2="69.5" y2="84.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DDC34D"/>
        <stop offset="0.325" stop-color="#A9E05C"/>
        <stop offset="0.665" stop-color="#5FD6D6"/>
        <stop offset="1" stop-color="#A547A4"/>
        </linearGradient>
        </defs>
    </svg>
    </motion.div>
  )
}

export default FormatMSVG