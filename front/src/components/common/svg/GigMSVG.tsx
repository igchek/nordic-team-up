import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}



const GigMSVG:React.FC<MSVG> = ({ focus}) => {

  // sparkles

  const [Sparkle1StopFirstScope, animateSparkle1FirstStop] = useAnimate()
  const [Sparkle2StopFirstScope, animateSparkle2FirstStop] = useAnimate()
  const [Sparkle3StopFirstScope, animateSparkle3FirstStop] = useAnimate()
  const [Sparkle4StopFirstScope, animateSparkle4FirstStop] = useAnimate()
  const [Sparkle5StopFirstScope, animateSparkle5FirstStop] = useAnimate()
  const [Sparkle6StopFirstScope, animateSparkle6FirstStop] = useAnimate()
  const [Sparkle7StopFirstScope, animateSparkle7FirstStop] = useAnimate()
  const [Sparkle8StopFirstScope, animateSparkle8FirstStop] = useAnimate()
  const [Sparkle9StopFirstScope, animateSparkle9FirstStop] = useAnimate()
  const [Sparkle10StopFirstScope, animateSparkle10FirstStop] = useAnimate()
  const [Sparkle11StopFirstScope, animateSparkle11FirstStop] = useAnimate()
  const [Sparkle12StopFirstScope, animateSparkle12FirstStop] = useAnimate()
  const [Sparkle1StopSecondScope, animateSparkle1SecondStop] = useAnimate()
  const [Sparkle2StopSecondScope, animateSparkle2SecondStop] = useAnimate()
  const [Sparkle3StopSecondScope, animateSparkle3SecondStop] = useAnimate()
  const [Sparkle4StopSecondScope, animateSparkle4SecondStop] = useAnimate()
  const [Sparkle5StopSecondScope, animateSparkle5SecondStop] = useAnimate()
  const [Sparkle6StopSecondScope, animateSparkle6SecondStop] = useAnimate()
  const [Sparkle7StopSecondScope, animateSparkle7SecondStop] = useAnimate()
  const [Sparkle8StopSecondScope, animateSparkle8SecondStop] = useAnimate()
  const [Sparkle9StopSecondScope, animateSparkle9SecondStop] = useAnimate()
  const [Sparkle10StopSecondScope, animateSparkle10SecondStop] = useAnimate()
  const [Sparkle11StopSecondScope, animateSparkle11SecondStop] = useAnimate()
  const [Sparkle12StopSecondScope, animateSparkle12SecondStop] = useAnimate()


  // core

  const [CoreFill1Stop1, animateCoreFill1Stop1] = useAnimate()
  const [CoreFill1Stop2, animateCoreFill1Stop2] = useAnimate()
  const [CoreFill1Stop3, animateCoreFill1Stop3] = useAnimate()
  const [CoreFill1Stop4, animateCoreFill1Stop4] = useAnimate()

  const [CoreFill2Stop1, animateCoreFill2Stop1] = useAnimate()
  const [CoreFill2Stop2, animateCoreFill2Stop2] = useAnimate()
  const [CoreFill2Stop3, animateCoreFill2Stop3] = useAnimate()
  const [CoreFill2Stop4, animateCoreFill2Stop4] = useAnimate()

  const [CoreBlurGauss, animateCoreBlur] = useAnimate()

  // radius

  const [RadiusFillStop1, animateRadiusFillStop1] = useAnimate()
  const [RadiusFillStop2, animateRadiusFillStop2] = useAnimate()
  const [RadiusFillStop3, animateRadiusFillStop3] = useAnimate()


  const [RadiusBlurGauss, animateRadiusBlur] = useAnimate()
  const [RadiusDropShadow, animateRadiusDropShadow] = useAnimate()
  

  // shape

  const [ShapeFillStop1, animateShapeFillStop1] = useAnimate()
  const [ShapeFillStop2, animateShapeFillStop2] = useAnimate()



  // animation effect

  useEffect(()=>{
    if(focus){

      // sparkles

      animateSparkle1FirstStop(Sparkle1StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle2FirstStop(Sparkle2StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle3FirstStop(Sparkle3StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle4FirstStop(Sparkle4StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle5FirstStop(Sparkle5StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle6FirstStop(Sparkle6StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle7FirstStop(Sparkle7StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle8FirstStop(Sparkle8StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle9FirstStop(Sparkle9StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle10FirstStop(Sparkle10StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle11FirstStop(Sparkle11StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})
      animateSparkle12FirstStop(Sparkle12StopFirstScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.saturated})

      animateSparkle1SecondStop(Sparkle1StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle2SecondStop(Sparkle2StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle3SecondStop(Sparkle3StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle4SecondStop(Sparkle4StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle5SecondStop(Sparkle5StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle6SecondStop(Sparkle6StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle7SecondStop(Sparkle7StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle8SecondStop(Sparkle8StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle9SecondStop(Sparkle9StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle10SecondStop(Sparkle10StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle11SecondStop(Sparkle11StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})
      animateSparkle12SecondStop(Sparkle12StopSecondScope.current, {stopColor:styleSheet.gradients.gig.on.sparkles.vague})



      // radius
      animateRadiusFillStop1(RadiusFillStop1.current, {stopColor:styleSheet.gradients.gig.on.radius.Stop1})
      animateRadiusFillStop2(RadiusFillStop2.current, {stopColor:styleSheet.gradients.gig.on.radius.Stop2})
      animateRadiusFillStop3(RadiusFillStop3.current, {stopColor:styleSheet.gradients.gig.on.radius.Stop3})

      animateRadiusBlur(RadiusBlurGauss.current, {stdDeviation:"16.6198"})
      animateRadiusDropShadow(RadiusDropShadow.current, {stdDeviaton:"8.30992"})

      // core

      animateCoreFill1Stop1(CoreFill1Stop1.current, {stopColor:styleSheet.gradients.gig.on.core.stopOne})
      animateCoreFill1Stop2(CoreFill1Stop2.current, {stopColor:styleSheet.gradients.gig.on.core.stopTwo})
      animateCoreFill1Stop3(CoreFill1Stop3.current, {stopColor:styleSheet.gradients.gig.on.core.stopThree})
      animateCoreFill1Stop4(CoreFill1Stop4.current, {stopColor:styleSheet.gradients.gig.on.core.stopFour})

      animateCoreFill2Stop1(CoreFill2Stop1.current, {stopColor:styleSheet.gradients.gig.on.core.stopOne})
      animateCoreFill2Stop2(CoreFill2Stop2.current, {stopColor:styleSheet.gradients.gig.on.core.stopTwo})
      animateCoreFill2Stop3(CoreFill2Stop3.current, {stopColor:styleSheet.gradients.gig.on.core.stopThree})
      animateCoreFill2Stop4(CoreFill2Stop4.current, {stopColor:styleSheet.gradients.gig.on.core.stopFour})

      animateCoreBlur(CoreBlurGauss.current, {stdDeviation:"10.3874"})
      // shape

      animateShapeFillStop1(ShapeFillStop1.current, {stopColor:styleSheet.gradients.gig.on.shape.stopOne})
      animateShapeFillStop2(ShapeFillStop2.current, {stopColor:styleSheet.gradients.gig.on.shape.stopTwo})

    }
    else{
      // sparkles
      animateSparkle1FirstStop(Sparkle1StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle2FirstStop(Sparkle2StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle3FirstStop(Sparkle3StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle4FirstStop(Sparkle4StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle5FirstStop(Sparkle5StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle6FirstStop(Sparkle6StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle7FirstStop(Sparkle7StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle8FirstStop(Sparkle8StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle9FirstStop(Sparkle9StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle10FirstStop(Sparkle10StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle11FirstStop(Sparkle11StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle12FirstStop(Sparkle12StopFirstScope.current, {stopColor:styleSheet.gradients.gig.off})

      animateSparkle1SecondStop(Sparkle1StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle2SecondStop(Sparkle2StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle3SecondStop(Sparkle3StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle4SecondStop(Sparkle4StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle5SecondStop(Sparkle5StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle6SecondStop(Sparkle6StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle7SecondStop(Sparkle7StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle8SecondStop(Sparkle8StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle9SecondStop(Sparkle9StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle10SecondStop(Sparkle10StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle11SecondStop(Sparkle11StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})
      animateSparkle12SecondStop(Sparkle12StopSecondScope.current, {stopColor:styleSheet.gradients.gig.off})


      // radius
      animateRadiusFillStop1(RadiusFillStop1.current, {stopColor:styleSheet.gradients.gig.off})
      animateRadiusFillStop2(RadiusFillStop2.current, {stopColor:styleSheet.gradients.gig.off})
      animateRadiusFillStop3(RadiusFillStop3.current, {stopColor:styleSheet.gradients.gig.off})

      animateRadiusBlur(RadiusBlurGauss.current, {stdDeviation:"1"})
      animateRadiusDropShadow(RadiusDropShadow.current, {stdDeviaton:"1"})

      // core
      animateCoreFill1Stop1(CoreFill1Stop1.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill1Stop2(CoreFill1Stop2.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill1Stop3(CoreFill1Stop3.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill1Stop4(CoreFill1Stop4.current, {stopColor:styleSheet.gradients.gig.off})

      animateCoreFill2Stop1(CoreFill2Stop1.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill2Stop2(CoreFill2Stop2.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill2Stop3(CoreFill2Stop3.current, {stopColor:styleSheet.gradients.gig.off})
      animateCoreFill2Stop4(CoreFill2Stop4.current, {stopColor:styleSheet.gradients.gig.off})

      animateCoreBlur(CoreBlurGauss.current, {stdDeviation:"1"})

      // shape

      animateShapeFillStop1(ShapeFillStop1.current, {stopColor:styleSheet.gradients.gig.off})
      animateShapeFillStop2(ShapeFillStop2.current, {stopColor:styleSheet.gradients.gig.off})
    }
  },[focus])

  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >
        <svg width="100%" height="100%" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="focus=on">
          <g id="Svibe pic" clipPath="url(#clip0_50_275)">
          <g id="Group">
          <g id="Core" filter="url(#coreFilter)">
          <path id="Core_external_raius" d="M65.8555 49.4075C63.0626 49.4319 60.3408 50.4286 58.0344 52.2716C55.728 54.1146 53.9405 56.7212 52.898 59.7617C51.8555 62.8022 51.6048 66.1401 52.1775 69.3533C52.7503 72.5666 54.1209 75.5108 56.1159 77.8138C58.1109 80.1168 60.6407 81.6751 63.3856 82.2916C66.1304 82.9082 68.967 82.5553 71.5365 81.2777C74.1061 80 76.2933 77.8549 77.8216 75.1136C79.3499 72.3723 80.1506 69.1579 80.1225 65.8769C80.0804 61.4782 78.5547 57.2737 75.88 54.1861C73.2053 51.0985 69.6001 49.3799 65.8555 49.4075ZM66.114 79.0322C63.9193 79.0513 61.7672 78.3055 59.9298 76.889C58.0925 75.4724 56.6525 73.4489 55.7919 71.0742C54.9314 68.6995 54.6889 66.0803 55.0952 63.5479C55.5015 61.0156 56.5383 58.6837 58.0745 56.8473C59.6107 55.0109 61.5773 53.7524 63.7256 53.231C65.8738 52.7096 68.1072 52.9487 70.1434 53.9181C72.1795 54.8875 73.9269 56.5436 75.1646 58.6769C76.4023 60.8103 77.0746 63.3251 77.0966 65.9033C77.1226 69.3587 75.9811 72.6813 73.9222 75.1425C71.8634 77.6037 69.0554 79.0025 66.114 79.0322Z" fill="url(#core_fill_1)"/>
          <path id="Core_internal_raius" d="M66.114 79.0322C63.9193 79.0513 61.7672 78.3055 59.9298 76.889C58.0925 75.4724 56.6525 73.4489 55.7919 71.0742C54.9314 68.6995 54.6889 66.0803 55.0952 63.5479C55.5015 61.0156 56.5383 58.6837 58.0745 56.8473C59.6107 55.0109 61.5773 53.7524 63.7256 53.231C65.8738 52.7096 68.1072 52.9487 70.1434 53.9181C72.1795 54.8875 73.9269 56.5436 75.1646 58.6769C76.4023 60.8103 77.0746 63.3251 77.0966 65.9033C77.1226 69.3587 75.9811 72.6813 73.9222 75.1425C71.8634 77.6037 69.0554 79.0025 66.114 79.0322Z" fill="url(#core_fill_2)"/>
          </g>
          <path id="Shape" d="M120.357 63.8596L97.853 53.6718C96.9626 53.2687 96.15 52.6594 95.4634 51.8803C94.7769 51.1012 94.2304 50.1681 93.8567 49.1368C93.483 48.1054 93.2896 46.9968 93.288 45.877C93.2865 44.7572 93.4768 43.6491 93.8477 42.6188L98.6254 29.3389C98.7426 29.0111 98.7731 28.6492 98.7131 28.3001C98.6531 27.951 98.5054 27.6309 98.2889 27.3811C98.0725 27.1313 97.7974 26.9633 97.4992 26.899C97.2011 26.8347 96.8936 26.877 96.6166 27.0204L85.3985 32.867C84.5281 33.3207 83.5884 33.5637 82.6353 33.5816C81.6823 33.5995 80.7353 33.3919 79.8509 32.9712C78.9665 32.5504 78.1628 31.9251 77.4875 31.1326C76.8122 30.34 76.2793 29.3964 75.9203 28.3578L66.8499 2.10285C66.7356 1.772 66.5393 1.48891 66.2865 1.29041C66.0338 1.09191 65.7362 0.987172 65.4326 0.989821C65.129 0.99247 64.8333 1.10238 64.584 1.30527C64.3348 1.50815 64.1434 1.79462 64.035 2.12741L55.4249 28.5346C55.0842 29.5794 54.5678 30.5323 53.9065 31.3366C53.2452 32.1409 52.4524 32.7801 51.5755 33.2162C50.6985 33.6524 49.7553 33.8764 48.8021 33.8751C47.8488 33.8738 46.905 33.647 46.0268 33.2085L34.7118 27.5585C34.4324 27.4206 34.1244 27.3841 33.8277 27.4538C33.5309 27.5235 33.259 27.6961 33.0471 27.9495C32.8352 28.2029 32.6931 28.5253 32.639 28.8751C32.5849 29.2249 32.6214 29.586 32.7438 29.9117L37.7534 43.1062C38.1422 44.1299 38.3519 45.2345 38.3698 46.3541C38.3878 47.4738 38.2138 48.5856 37.8581 49.6233C37.5024 50.6611 36.9724 51.6035 36.2995 52.3945C35.6266 53.1855 34.8247 53.8089 33.9416 54.2274L11.6132 64.8084C11.3318 64.9417 11.0914 65.1715 10.9231 65.4679C10.7549 65.7643 10.6666 66.1135 10.6697 66.4702C10.6728 66.8269 10.7672 67.1745 10.9406 67.4679C11.114 67.7613 11.3584 67.9868 11.642 68.1152L34.1465 78.304C35.0368 78.7071 35.8495 79.3164 36.536 80.0955C37.2226 80.8746 37.769 81.8077 38.1427 82.8391C38.5165 83.8704 38.7099 84.979 38.7114 86.0988C38.713 87.2186 38.5227 88.3267 38.1518 89.357L33.3731 102.636C33.2569 102.964 33.2271 103.325 33.2874 103.674C33.3478 104.022 33.4956 104.342 33.7117 104.591C33.9279 104.841 34.2025 105.009 34.5002 105.073C34.7979 105.138 35.105 105.097 35.3819 104.954L46.6018 99.1099C47.4722 98.656 48.4119 98.4129 49.365 98.3949C50.3181 98.3769 51.2651 98.5845 52.1495 99.0053C53.034 99.426 53.8377 100.051 54.513 100.844C55.1883 101.637 55.7212 102.58 56.08 103.619L65.1496 129.872C65.2639 130.203 65.4601 130.486 65.7129 130.684C65.9657 130.883 66.2632 130.988 66.5668 130.985C66.8705 130.982 67.1662 130.872 67.4154 130.67C67.6647 130.467 67.856 130.18 67.9645 129.847L76.5737 103.44C76.9145 102.396 77.4309 101.443 78.0922 100.638C78.7536 99.8343 79.5463 99.1951 80.4232 98.759C81.3002 98.3229 82.2433 98.0988 83.1965 98.1C84.1498 98.1013 85.0936 98.3279 85.9717 98.7663L97.2876 104.414C97.567 104.552 97.875 104.589 98.1717 104.519C98.4685 104.449 98.7404 104.277 98.9523 104.023C99.1642 103.77 99.3064 103.447 99.3604 103.098C99.4145 102.748 99.378 102.387 99.2556 102.061L94.2469 88.8676C93.8581 87.8439 93.6484 86.7393 93.6305 85.6197C93.6125 84.5 93.7865 83.3882 94.1422 82.3504C94.4979 81.3127 95.0279 80.3703 95.7008 79.5793C96.3737 78.7883 97.1756 78.1649 98.0587 77.7463L120.382 67.1664C120.663 67.0331 120.904 66.8033 121.072 66.507C121.24 66.2106 121.329 65.8614 121.325 65.5047C121.322 65.148 121.228 64.8003 121.055 64.507C120.881 64.2136 120.637 63.988 120.353 63.8596L120.357 63.8596ZM96.925 74.4492C95.6655 75.0459 94.5219 75.9347 93.5622 77.0625C92.6026 78.1903 91.8466 79.5341 91.3392 81.0139C90.8318 82.4937 90.5835 84.0791 90.609 85.6758C90.6345 87.2724 90.9333 88.8476 91.4876 90.3075L94.9326 99.3808L87.1493 95.4948C85.8971 94.87 84.5514 94.5473 83.1923 94.5458C81.8332 94.5443 80.4886 94.8641 79.2384 95.4862C77.9882 96.1083 76.8581 97.0199 75.9154 98.1667C74.9726 99.3136 74.2365 100.672 73.7509 102.162L66.5091 124.366L58.881 102.291C58.3719 100.808 57.6135 99.4597 56.6511 98.3272C55.6888 97.1948 54.5423 96.3015 53.2803 95.7009C52.0184 95.1003 50.6669 94.8048 49.307 94.832C47.947 94.8593 46.6064 95.2087 45.3656 95.8594L37.6513 99.8806L40.9375 90.7486C41.4663 89.2792 41.7376 87.6991 41.7352 86.1022C41.7328 84.5053 41.4568 82.9245 40.9237 81.4538C40.3906 79.9831 39.6112 78.6527 38.632 77.5418C37.6529 76.4309 36.4939 75.5622 35.2242 74.9876L16.3056 66.424L35.0762 57.5256C36.3357 56.9289 37.4793 56.0401 38.4389 54.9123C39.3986 53.7845 40.1546 52.4407 40.662 50.9609C41.1694 49.4811 41.4177 47.8957 41.3922 46.299C41.3667 44.7024 41.0679 43.1272 40.5136 41.6673L37.0668 32.594L44.8501 36.48C46.1023 37.1047 47.4479 37.4274 48.8069 37.4288C50.1659 37.4303 51.5105 37.1105 52.7607 36.4886C54.0108 35.8666 55.1409 34.9552 56.0837 33.8085C57.0265 32.6619 57.7628 31.3034 58.2486 29.8141L65.4904 7.61148L73.1185 29.6864C73.6302 31.1674 74.3901 32.5131 75.353 33.6434C76.3158 34.7737 77.462 35.6654 78.7231 36.2655C79.9842 36.8656 81.3345 37.1617 82.6935 37.1363C84.0526 37.1109 85.3926 36.7644 86.6338 36.1175L94.3481 32.0962L91.0619 41.2283C90.5334 42.6973 90.2622 44.2771 90.2645 45.8736C90.2669 47.4701 90.5427 49.0506 91.0755 50.521C91.6084 51.9915 92.3874 53.3217 93.3661 54.4326C94.3449 55.5435 95.5034 56.4123 96.7726 56.9872L115.696 65.5568L96.925 74.4492Z" fill="url(#shapeFill)"/>
          <g id="Sparkles">
          <path id="Vector" d="M81.2514 28.6793C81.5013 28.8334 81.7826 28.9027 82.0637 28.8794C82.3449 28.8562 82.6147 28.7413 82.8429 28.5476L86.1779 25.7061C88.2648 23.9194 89.9739 21.5933 91.1738 18.9066C92.3737 16.2198 93.0325 13.244 93.0995 10.2076L93.1947 5.36616C93.2013 5.03467 93.1288 4.70738 92.9854 4.42132C92.8419 4.13525 92.6333 3.90184 92.3831 3.74749C92.1329 3.59315 91.8511 3.52403 91.5696 3.54797C91.2881 3.5719 91.0182 3.68794 90.7903 3.88294L87.4578 6.71931C85.371 8.5061 83.662 10.8322 82.4621 13.5189C81.2622 16.2057 80.6034 19.1815 80.5362 22.2178L80.4445 27.0603C80.4377 27.3912 80.5096 27.718 80.6522 28.004C80.7947 28.29 81.0023 28.5239 81.2514 28.6793V28.6793ZM83.5614 22.3112C83.6162 19.8211 84.1564 17.3805 85.1403 15.1771C86.1243 12.9736 87.5258 11.0658 89.2372 9.60045L90.0955 8.86778L90.0709 10.1173C90.0162 12.6075 89.4761 15.0483 88.4922 17.252C87.5082 19.4557 86.1066 21.3636 84.3951 22.8291L83.5369 23.5617L83.5614 22.3112Z" fill="url(#paint3_sparkle_fill)"/>
          <path id="Vector_2" d="M50.8702 103.418C50.6204 103.264 50.339 103.194 50.0577 103.218C49.7765 103.241 49.5067 103.356 49.2788 103.551L45.9437 106.387C43.8568 108.174 42.1477 110.5 40.9478 113.187C39.7479 115.873 39.0891 118.849 39.0221 121.886L38.9269 126.727C38.9201 127.058 38.9924 127.385 39.1355 127.671C39.2786 127.957 39.4869 128.191 39.7368 128.346C39.9866 128.5 40.2681 128.57 40.5494 128.546C40.8308 128.523 41.1007 128.408 41.3287 128.213L44.6638 125.377C46.7508 123.59 48.46 121.264 49.6599 118.578C50.8599 115.891 51.5186 112.915 51.5854 109.878L51.6806 105.036C51.6869 104.705 51.6144 104.378 51.4712 104.092C51.3281 103.806 51.1199 103.573 50.8702 103.418ZM48.5602 109.786C48.5056 112.276 47.9655 114.717 46.9816 116.92C45.9976 119.124 44.596 121.032 42.8844 122.497L42.0262 123.229L42.0507 121.98C42.1054 119.49 42.6455 117.049 43.6295 114.845C44.6134 112.642 46.015 110.734 47.7266 109.268L48.5848 108.536L48.5602 109.786Z" fill="url(#paint4_sparkle_fill)"/>
          <path id="Vector_3" d="M86.8784 105.928L83.4944 103.15C83.263 102.961 82.9915 102.852 82.7103 102.834C82.4292 102.816 82.1496 102.891 81.9031 103.05C81.6566 103.208 81.4529 103.445 81.3149 103.733C81.177 104.02 81.1102 104.348 81.1223 104.678L81.302 109.519C81.4218 112.553 82.1323 115.517 83.3789 118.183C84.6255 120.848 86.3751 123.144 88.493 124.894L91.877 127.672C92.1084 127.862 92.3803 127.973 92.662 127.991C92.9437 128.009 93.2239 127.935 93.4711 127.776C93.7182 127.617 93.9223 127.38 94.0604 127.091C94.1986 126.803 94.2651 126.475 94.2526 126.144L94.0729 121.305C93.9526 118.269 93.2415 115.305 91.9943 112.639C90.7471 109.974 88.997 107.678 86.8784 105.928V105.928ZM90.2175 121.982C88.4806 120.547 87.0459 118.664 86.0236 116.478C85.0014 114.292 84.4188 111.861 84.3207 109.372L84.2744 108.122L85.1452 108.84C86.8821 110.275 88.3168 112.159 89.3391 114.345C90.3613 116.531 90.9439 118.962 91.042 121.451L91.0884 122.7L90.2175 121.982Z" fill="url(#paint5_sparkle_fill)"/>
          <path id="Vector_4" d="M45.1204 26.0642L48.5045 28.843C48.7366 29.0268 49.0071 29.1323 49.2864 29.1477C49.5657 29.1632 49.843 29.088 50.0879 28.9306C50.3329 28.7731 50.5361 28.5394 50.6752 28.2549C50.8143 27.9705 50.884 27.6464 50.8766 27.3181L50.6969 22.479C50.5768 19.4444 49.8661 16.4805 48.6195 13.8151C47.3729 11.1497 45.6236 8.85377 43.5059 7.10367L40.1279 4.32483C39.8966 4.13414 39.6246 4.02318 39.3428 4.00453C39.061 3.98588 38.7806 4.06028 38.5333 4.21931C38.2861 4.37834 38.0819 4.61564 37.9439 4.90433C37.8058 5.19303 37.7395 5.52159 37.7523 5.85281L37.9294 10.6889C38.0494 13.7235 38.76 16.6875 40.0066 19.3529C41.2532 22.0183 43.0026 24.3142 45.1204 26.0642V26.0642ZM41.7813 10.0103C43.5181 11.4456 44.9527 13.3286 45.9749 15.5146C46.9972 17.7006 47.5798 20.1313 47.6781 22.6201L47.7244 23.87L46.8536 23.1524C45.1164 21.718 43.6811 19.8357 42.6582 17.6503C41.6352 15.4648 41.0517 13.0344 40.9525 10.5457L40.9062 9.29683L41.7813 10.0103Z" fill="url(#paint6_sparkle_fill)"/>
          <path id="Vector_5" d="M98.1607 45.8273C98.2838 46.011 98.4365 46.1646 98.6101 46.2791C98.7836 46.3937 98.9745 46.467 99.172 46.4949C99.3694 46.5228 99.5695 46.5047 99.7608 46.4417C99.9521 46.3787 100.131 46.272 100.287 46.1277L108.086 38.9185C108.245 38.7759 108.379 38.5973 108.479 38.3933C108.579 38.1892 108.643 37.9637 108.668 37.7298C108.693 37.496 108.678 37.2585 108.625 37.0312C108.571 36.804 108.479 36.5914 108.355 36.4059C108.23 36.2205 108.076 36.0658 107.9 35.951C107.725 35.8361 107.532 35.7634 107.332 35.737C107.133 35.7106 106.931 35.7311 106.738 35.7973C106.546 35.8635 106.367 35.974 106.211 36.1224L98.4113 43.3316C98.0964 43.6228 97.8931 44.0491 97.8461 44.5171C97.7991 44.985 97.9123 45.4563 98.1607 45.8273V45.8273Z" fill="url(#paint7_sparkle_fill)"/>
          <path id="Vector_6" d="M101.452 49.5144C101.562 49.8546 101.758 50.1473 102.014 50.3532C102.269 50.5591 102.572 50.6682 102.882 50.6659C103.06 50.6648 103.237 50.6261 103.404 50.5516L118.745 43.753C118.931 43.6708 119.101 43.5463 119.245 43.3867C119.39 43.2271 119.506 43.0355 119.588 42.8229C119.669 42.6103 119.714 42.3807 119.72 42.1474C119.726 41.9141 119.693 41.6816 119.622 41.4631C119.552 41.2447 119.445 41.0446 119.309 40.8742C119.173 40.7039 119.009 40.5666 118.828 40.4703C118.647 40.374 118.451 40.3205 118.253 40.3129C118.054 40.3053 117.856 40.3437 117.671 40.4259L102.33 47.2246C101.955 47.3908 101.652 47.7254 101.487 48.1548C101.322 48.5842 101.31 49.0732 101.452 49.5144V49.5144Z" fill="url(#paint8_sparkle_fill)"/>
          <path id="Vector_7" d="M23.4526 39.6594L31.3761 46.7314C31.5345 46.8728 31.715 46.9762 31.9073 47.0358C32.0996 47.0954 32.2998 47.1099 32.4967 47.0786C32.6935 47.0472 32.883 46.9707 33.0545 46.8532C33.2259 46.7357 33.3758 46.5797 33.4958 46.394C33.6157 46.2083 33.7032 45.9965 33.7534 45.7708C33.8036 45.5452 33.8154 45.31 33.7881 45.0787C33.7609 44.8473 33.6952 44.6245 33.5947 44.4228C33.4942 44.2211 33.361 44.0445 33.2025 43.9031L25.2825 36.828C25.1244 36.6823 24.9432 36.5749 24.7496 36.5121C24.556 36.4493 24.3539 36.4323 24.1548 36.4622C23.9558 36.492 23.764 36.5681 23.5905 36.686C23.4169 36.8039 23.2652 36.9612 23.1441 37.1488C23.023 37.3364 22.935 37.5506 22.8851 37.7788C22.8353 38.007 22.8246 38.2447 22.8537 38.478C22.8828 38.7114 22.9511 38.9357 23.0547 39.138C23.1583 39.3403 23.295 39.5165 23.4569 39.6563L23.4526 39.6594Z" fill="url(#paint9_sparkle_fill)"/>
          <path id="Vector_8" d="M12.876 44.6777L28.3341 51.2076C28.5007 51.2786 28.6767 51.3142 28.8538 51.3128C29.2093 51.3103 29.5524 51.1607 29.8228 50.8904C30.0933 50.6201 30.2737 50.2462 30.3325 49.8345C30.3914 49.4227 30.3248 48.9994 30.1445 48.6387C29.9643 48.2781 29.6818 48.0032 29.3467 47.8623L13.8921 41.3324C13.705 41.2534 13.5065 41.2184 13.308 41.2295C13.1095 41.2406 12.915 41.2975 12.7355 41.3969C12.5559 41.4964 12.3949 41.6365 12.2617 41.8092C12.1284 41.9819 12.0255 42.1838 11.9587 42.4035C11.892 42.6232 11.8628 42.8562 11.8728 43.0894C11.8828 43.3226 11.9318 43.5513 12.017 43.7624C12.1021 43.9736 12.2218 44.1631 12.3692 44.3202C12.5166 44.4772 12.6889 44.5987 12.876 44.6777V44.6777Z" fill="url(#paint10_sparkle_fill)"/>
          <path id="Vector_9" d="M108.548 92.3403L100.624 85.2683C100.466 85.1269 100.285 85.0235 100.093 84.9639C99.9009 84.9043 99.7006 84.8898 99.5038 84.9211C99.307 84.9524 99.1174 85.029 98.946 85.1465C98.7746 85.2639 98.6246 85.42 98.5047 85.6057C98.3848 85.7914 98.2972 86.0032 98.2471 86.2288C98.1969 86.4545 98.1851 86.6897 98.2123 86.921C98.2395 87.1523 98.3053 87.3752 98.4058 87.5769C98.5062 87.7786 98.6395 87.9552 98.7979 88.0966L106.722 95.1686C106.88 95.3144 107.062 95.4217 107.255 95.4845C107.449 95.5473 107.651 95.5643 107.85 95.5345C108.049 95.5046 108.241 95.4285 108.414 95.3106C108.588 95.1927 108.74 95.0354 108.861 94.8478C108.982 94.6602 109.07 94.4461 109.12 94.2179C109.169 93.9897 109.18 93.752 109.151 93.5186C109.122 93.2852 109.054 93.0609 108.95 92.8586C108.847 92.6563 108.71 92.4801 108.548 92.3403V92.3403Z" fill="url(#paint11_sparkle_fill)"/>
          <path id="Vector_10" d="M119.124 87.319L103.667 80.7891C103.479 80.7101 103.281 80.6752 103.082 80.6862C102.884 80.6973 102.689 80.7542 102.51 80.8537C102.33 80.9531 102.169 81.0932 102.036 81.2659C101.903 81.4386 101.8 81.6406 101.733 81.8602C101.666 82.0799 101.637 82.313 101.647 82.5461C101.657 82.7793 101.706 83.008 101.791 83.2192C101.877 83.4303 101.996 83.6199 102.144 83.7769C102.291 83.9339 102.463 84.0554 102.65 84.1344L118.108 90.6644C118.295 90.7434 118.493 90.7783 118.692 90.7672C118.89 90.7562 119.085 90.6993 119.264 90.5998C119.444 90.5003 119.605 90.3603 119.738 90.1875C119.871 90.0148 119.974 89.8129 120.041 89.5932C120.108 89.3736 120.137 89.1405 120.127 88.9073C120.117 88.6742 120.068 88.4455 119.983 88.2343C119.898 88.0231 119.778 87.8336 119.631 87.6766C119.483 87.5195 119.311 87.398 119.124 87.319V87.319Z" fill="url(#paint12_sparkle_fill)"/>
          <path id="Vector_11" d="M33.8408 86.1674C33.7177 85.9838 33.565 85.8304 33.3916 85.7159C33.2181 85.6015 33.0273 85.5282 32.8299 85.5003C32.6326 85.4724 32.4326 85.4904 32.2414 85.5534C32.0502 85.6163 31.8716 85.7229 31.7156 85.867L23.9194 93.0792C23.7599 93.2218 23.6263 93.4004 23.5263 93.6044C23.4262 93.8085 23.3618 94.034 23.3368 94.2678C23.3118 94.5017 23.3266 94.7392 23.3804 94.9665C23.4343 95.1937 23.526 95.4063 23.6504 95.5918C23.7747 95.7772 23.9292 95.9319 24.1047 96.0467C24.2803 96.1616 24.4734 96.2343 24.6729 96.2607C24.8724 96.2871 25.0743 96.2666 25.2668 96.2004C25.4592 96.1342 25.6385 96.0237 25.794 95.8752L33.5937 88.6661C33.7499 88.5217 33.8801 88.3424 33.9771 88.1386C34.074 87.9349 34.1357 87.7105 34.1587 87.4784C34.1816 87.2463 34.1653 87.011 34.1108 86.7861C34.0563 86.5611 33.9645 86.3509 33.8408 86.1674V86.1674Z" fill="url(#paint13_sparkle_fill)"/>
          <path id="Vector_12" d="M30.5478 82.4793C30.4046 82.0388 30.1189 81.6823 29.7531 81.4879C29.3873 81.2935 28.9712 81.277 28.596 81.4421L13.2542 88.2407C12.9217 88.3875 12.6441 88.6672 12.4701 89.031C12.2962 89.3947 12.237 89.8191 12.303 90.2298C12.369 90.6404 12.556 91.0111 12.831 91.2767C13.1061 91.5422 13.4518 91.6858 13.8074 91.6821C13.9844 91.6804 14.1597 91.6417 14.3251 91.5679L29.6669 84.7692C29.8529 84.6873 30.0233 84.563 30.1682 84.4036C30.3132 84.2441 30.4299 84.0526 30.5117 83.84C30.5935 83.6273 30.6388 83.3977 30.645 83.1642C30.6512 82.9308 30.6182 82.698 30.5478 82.4793Z" fill="url(#paint14_sparkle_fill)"/>
          </g>
          <g id="Radius" filter="url(#radius_filter)">
          <path id='internalRadius' d="M65.7757 41.4444C61.6148 41.4807 57.56 42.9656 54.124 45.7113C50.688 48.457 48.0251 52.3402 46.4721 56.8699C44.9191 61.3995 44.5457 66.3722 45.3991 71.1592C46.2525 75.9461 48.2943 80.3323 51.2665 83.7631C54.2387 87.1939 58.0077 89.5153 62.0968 90.4336C66.186 91.352 70.4118 90.8261 74.2398 88.9224C78.0678 87.0188 81.3261 83.8229 83.6026 79.7389C85.8792 75.6548 87.0719 70.8661 87.0297 65.9782C86.9668 59.4254 84.6937 53.1622 80.7091 48.5627C76.7246 43.9633 71.354 41.4033 65.7757 41.4444V41.4444ZM66.176 87.3185C62.6133 87.3496 59.1198 86.1389 56.1373 83.8395C53.1549 81.5402 50.8173 78.2554 49.4203 74.4007C48.0233 70.546 47.6297 66.2944 48.2891 62.1837C48.9485 58.073 50.6314 54.2877 53.1249 51.3066C55.6184 48.3255 58.8106 46.2824 62.2978 45.4358C65.7849 44.5892 69.4104 44.9771 72.7156 46.5504C76.0209 48.1237 78.8576 50.8117 80.8669 54.2745C82.8762 57.7374 83.9679 61.8195 84.0039 66.0046C84.0466 71.6141 82.1937 77.0082 78.8516 81.0038C75.5095 84.9995 70.951 87.2704 66.176 87.3185Z" fill="url(#radius_fill)"/>
          </g>
          </g>
          </g>
          </g>
          <defs>
            
          <filter id="coreFilter" x="31.1021" y="28.6324" width="69.7957" height="74.7296" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <motion.feGaussianBlur initial={focus?{stdDeviation:'10.3874'}:{stdDeviation:'1'}} ref={CoreBlurGauss}/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.983218 0 0 0 0 0.88585 0 0 0 0 0.374667 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_50_275"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_50_275" result="shape"/>
          </filter>

          <filter id="radius_filter" x="11.7125" y="8.20425" width="108.558" height="115.909" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <motion.feGaussianBlur initial={focus?{stdDeviation:'16.6198'}:{stdDeviation:'1'}} ref={RadiusBlurGauss} in="BackgroundImageFix"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_50_275"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <motion.feGaussianBlur  initial={focus?{stdDeviation:'8.30992'}:{stdDeviation:'1'}} ref={RadiusDropShadow}/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.658824 0 0 0 0 0.929412 0 0 0 0 0.341176 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_backgroundBlur_50_275" result="effect2_dropShadow_50_275"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_50_275" result="shape"/>
          </filter>
          
          <radialGradient id="core_fill_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.0003 65.9971) rotate(89.246) scale(28.2501 21.054)">
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopOne}:{stopColor:styleSheet.gradients.gig.off}} ref={CoreFill1Stop1} offset="0.269097" stopColor="#FFD583"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopTwo}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill1Stop2} offset="0.565972" stopColor="#FCCC51"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopThree}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill1Stop3} offset="0.878472" stopColor="#8BE9A0"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopFour}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill1Stop4} offset="0.94618" stopColor="#82D65E"/>
          </radialGradient>

          <radialGradient id="core_fill_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.0003 65.9971) rotate(89.246) scale(28.2501 21.054)">
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopOne}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill2Stop1} offset="0.269097" stopColor="#FFD583"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopTwo}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill2Stop2} offset="0.565972" stopColor="#FCCC51"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopThree}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill2Stop3} offset="0.878472" stopColor="#8BE9A0"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.core.stopFour}:{stopColor:styleSheet.gradients.gig.off}}  ref={CoreFill2Stop4} offset="0.94618" stopColor="#82D65E"/>
          </radialGradient>

          <radialGradient id="shapeFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(65.9976 65.9874) rotate(89.4979) scale(55.0085 49.673)">
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.shape.stopOne}:{stopColor:styleSheet.gradients.gig.off}} ref={ShapeFillStop1} offset="0.508047" stopColor="#44CBE4"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.shape.stopTwo}:{stopColor:styleSheet.gradients.gig.off}} ref={ShapeFillStop2} offset="1" stopColor="#E18EF5"/>
          </radialGradient>

          <radialGradient id="paint3_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(86.8196 16.2136) rotate(112.903) scale(21.3614 5.57284)">
          <motion.stop ref={Sparkle1StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#A14EA7"/>
          <motion.stop ref={Sparkle1StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#EC9BF3"/>
          </radialGradient>

          <radialGradient id="paint4_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.3037 115.882) rotate(89.5001) scale(12.626 6.47211)">
          <motion.stop ref={Sparkle2StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#C878CF"/>
          <motion.stop ref={Sparkle2StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#ED9BF4"/>
          </radialGradient>

          <radialGradient id="paint5_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.6875 115.413) rotate(66.7887) scale(22.116 3.9984)">
          <motion.stop ref={Sparkle3StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#AB5BB1"/>
          <motion.stop ref={Sparkle3StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#EC9BF3"/>
          </radialGradient>

          <radialGradient id="paint6_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.2819 16.1885) rotate(73.6585) scale(15.5922 5.48189)">
          <motion.stop ref={Sparkle4StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#A14EA7"/>
          <motion.stop ref={Sparkle4StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#DF9FE3"/>
          </radialGradient>

          <radialGradient id="paint7_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.258 41.1167) rotate(89.5001) scale(5.35665 5.45352)">
          <motion.stop ref={Sparkle5StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle5StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint8_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110.537 45.4889) rotate(89.5001) scale(5.10997 9.21287)">
          <motion.stop ref={Sparkle6StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle6StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint9_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.3201 41.7713) rotate(89.5001) scale(5.35791 5.45125)">
          <motion.stop ref={Sparkle7StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle7StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint10_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.1121 46.2702) rotate(89.5001) scale(5.10997 9.21244)">
          <motion.stop ref={Sparkle8StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle8StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint11_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.683 90.2269) rotate(89.5001) scale(5.35641 5.45341)">
          <motion.stop ref={Sparkle9StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle9StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint12_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110.887 85.7267) rotate(89.5001) scale(5.10983 9.21298)">
          <motion.stop ref={Sparkle10StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle10StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint13_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.7468 90.8797) rotate(89.5001) scale(5.35793 5.45324)">
          <motion.stop ref={Sparkle11StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle11StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="paint14_sparkle_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.4612 86.5057) rotate(89.5001) scale(5.10944 9.21387)">
          <motion.stop ref={Sparkle12StopFirstScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.saturated}:{stopColor:styleSheet.gradients.gig.off}} stopColor="#9C4BA3"/>
          <motion.stop ref={Sparkle12StopSecondScope} initial={focus?{stopColor:styleSheet.gradients.gig.on.sparkles.vague}:{stopColor:styleSheet.gradients.gig.off}} offset="1" stopColor="#D685DD"/>
          </radialGradient>

          <radialGradient id="radius_fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.2502 64.8646) rotate(-105.607) scale(5.31966 14.7835)">
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.radius.Stop1}:{stopColor:styleSheet.gradients.gig.off}} ref={RadiusFillStop1} offset="0.133591" stopColor="#7FD04D"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.radius.Stop2}:{stopColor:styleSheet.gradients.gig.off}} ref={RadiusFillStop2} offset="0.492422" stopColor="#ADF057"/>
          <motion.stop initial={focus?{stopColor:styleSheet.gradients.gig.on.radius.Stop3}:{stopColor:styleSheet.gradients.gig.off}} ref={RadiusFillStop3} offset="0.888263" stopColor="#8FF1BF"/>
          </radialGradient>

          <clipPath id="clip0_50_275">
          <rect width="100%" height="100%" fill="white" transform="translate(0.435547 1.56958) rotate(-0.499913)"/>
          </clipPath>
          </defs>
        </svg>


    </motion.div>
  )
}

export default GigMSVG