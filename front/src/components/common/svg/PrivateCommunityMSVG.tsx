import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const PrivateCommunityMSVG:React.FC<MSVG> = ({ focus}) => {
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
        <mask id="path-1-inside-1_124_227" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M138.698 95.4319L254.529 96.0548L271.166 125.233L211.059 124.91L175.024 186.556L210.394 248.586L281.34 248.967L253.45 296.679L137.619 296.056L80.2432 195.433L138.698 95.4319ZM268.398 72.3273L339.388 196.826L267.064 320.555L123.749 319.784L52.7598 195.285L125.084 71.5566L268.398 72.3273Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M138.698 95.4319L254.529 96.0548L271.166 125.233L211.059 124.91L175.024 186.556L210.394 248.586L281.34 248.967L253.45 296.679L137.619 296.056L80.2432 195.433L138.698 95.4319ZM268.398 72.3273L339.388 196.826L267.064 320.555L123.749 319.784L52.7598 195.285L125.084 71.5566L268.398 72.3273Z" fill="url(#paint0_linear_124_227)"/>
        <path d="M254.529 96.0548L264.867 90.1598L261.463 84.191L254.593 84.1541L254.529 96.0548ZM138.698 95.4319L138.762 83.5312L131.891 83.4943L128.424 89.4262L138.698 95.4319ZM271.166 125.233L271.102 137.134L291.715 137.245L281.504 119.338L271.166 125.233ZM211.059 124.91L211.123 113.009L204.252 112.972L200.784 118.904L211.059 124.91ZM175.024 186.556L164.75 180.55L161.282 186.482L164.686 192.451L175.024 186.556ZM210.394 248.586L200.055 254.481L203.459 260.449L210.33 260.486L210.394 248.586ZM281.34 248.967L291.614 254.973L302.016 237.177L281.404 237.066L281.34 248.967ZM253.45 296.679L253.386 308.58L260.257 308.617L263.724 302.685L253.45 296.679ZM137.619 296.056L127.281 301.951L130.684 307.92L137.555 307.957L137.619 296.056ZM80.2432 195.433L69.9689 189.427L66.5015 195.359L69.9049 201.328L80.2432 195.433ZM339.388 196.826L349.662 202.832L353.13 196.9L349.726 190.931L339.388 196.826ZM268.398 72.3273L278.737 66.4323L275.333 60.4635L268.462 60.4266L268.398 72.3273ZM267.064 320.555L267 332.455L273.87 332.492L277.338 326.56L267.064 320.555ZM123.749 319.784L113.411 325.679L116.815 331.648L123.685 331.685L123.749 319.784ZM52.7598 195.285L42.4855 189.279L39.018 195.211L42.4215 201.18L52.7598 195.285ZM125.084 71.5566L125.148 59.6559L118.277 59.619L114.81 65.5509L125.084 71.5566ZM254.593 84.1541L138.762 83.5312L138.634 107.333L254.465 107.955L254.593 84.1541ZM281.504 119.338L264.867 90.1598L244.19 101.95L260.828 131.128L281.504 119.338ZM210.995 136.811L271.102 137.134L271.23 113.332L211.123 113.009L210.995 136.811ZM185.298 192.562L221.333 130.916L200.784 118.904L164.75 180.55L185.298 192.562ZM220.732 242.691L185.362 180.661L164.686 192.451L200.055 254.481L220.732 242.691ZM281.404 237.066L210.458 236.685L210.33 260.486L281.276 260.868L281.404 237.066ZM263.724 302.685L291.614 254.973L271.065 242.961L243.175 290.674L263.724 302.685ZM137.555 307.957L253.386 308.58L253.514 284.779L137.683 284.156L137.555 307.957ZM69.9049 201.328L127.281 301.951L147.957 290.161L90.5815 189.538L69.9049 201.328ZM128.424 89.4262L69.9689 189.427L90.5175 201.439L148.972 101.438L128.424 89.4262ZM349.726 190.931L278.737 66.4323L258.06 78.2222L329.05 202.721L349.726 190.931ZM277.338 326.56L349.662 202.832L329.114 190.82L256.789 314.549L277.338 326.56ZM123.685 331.685L267 332.455L267.128 308.654L123.813 307.883L123.685 331.685ZM42.4215 201.18L113.411 325.679L134.088 313.889L63.0981 189.39L42.4215 201.18ZM114.81 65.5509L42.4855 189.279L63.0341 201.291L135.358 77.5624L114.81 65.5509ZM268.462 60.4266L125.148 59.6559L125.02 83.4573L268.334 84.228L268.462 60.4266Z" fill="url(#paint1_linear_124_227)" mask="url(#path-1-inside-1_124_227)"/>
        <defs>
        <linearGradient id="paint0_linear_124_227" x1="196.074" y1="71.5566" x2="196.074" y2="320.555" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D3C951"/>
        <stop offset="0.330722" stop-color="#96DE7E"/>
        <stop offset="0.643235" stop-color="#6ED1C1"/>
        <stop offset="1" stop-color="#9B5DAB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_124_227" x1="196.074" y1="71.5566" x2="196.074" y2="320.555" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D3C951"/>
        <stop offset="0.330722" stop-color="#96DE7E"/>
        <stop offset="0.643235" stop-color="#6ED1C1"/>
        <stop offset="1" stop-color="#9B5DAB"/>
        </linearGradient>
        </defs>
    </svg>

    </motion.div>
  )
}

export default PrivateCommunityMSVG