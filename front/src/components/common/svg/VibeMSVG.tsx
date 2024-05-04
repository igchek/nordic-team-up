import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './styles.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'

interface MSVG{
    focus:boolean
}


const VibeMSVG:React.FC<MSVG> = ({focus}) => {


  return (
    <motion.div
        key={`${Math.random()*1000} svg`}

        className={styles.wrapper}
    >
        <svg  width="100%" height="100%"  viewBox="0 0 158 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_50_233)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M103.474 19.6607C96.0246 20.7338 89.5607 23.9044 83.3781 29.5182C82.215 30.5743 79.3224 33.3975 76.9503 35.7921C70.573 42.2301 67.1609 44.7506 62.4722 46.487C59.1281 47.7255 56.0416 48.171 51.6288 48.0522C43.2135 47.826 37.8784 45.3008 30.1895 37.9043C26.9055 34.7452 26.2833 34.3428 24.7046 34.3566C22.0073 34.3801 19.9713 36.8928 20.0148 40.1443C20.035 41.672 20.8523 43.1727 22.6844 45.047C30.6216 53.1675 36.9835 57.0352 45.1982 58.7352C47.0448 59.1175 48.7649 59.2166 52.9121 59.1804C57.0592 59.1442 58.7773 59.0151 60.617 58.6007C65.4309 57.5167 69.4485 55.7329 73.4961 52.8825C76.7419 50.5969 78.883 48.6493 85.437 42.0222C91.9798 35.4059 96.1511 32.7296 102.249 31.2355C105.05 30.5494 112.247 30.4866 115.059 31.1237C120.901 32.4475 125.387 35.1284 131.204 40.7723C134.425 43.8977 134.503 43.957 135.846 44.2985C138.895 45.0737 141.821 41.8436 141.367 38.2047C141.127 36.2862 140.63 35.4703 138.287 33.1558C130.287 25.2496 124.083 21.5568 116.148 19.9768C113.488 19.4469 106.217 19.2656 103.474 19.6607ZM105.38 50.2046C95.8129 51.0588 88.7185 54.8704 79.6428 64.0318C73.8028 69.9269 72.9067 70.7847 70.8203 72.4765C65.4231 76.8531 60.2933 78.6594 53.0826 78.7223C44.0021 78.8016 38.4915 76.3037 30.264 68.3784C26.6476 64.8951 25.6899 64.4572 23.4632 65.2674C21.4919 65.9849 20 68.8495 20.3502 71.2447C20.6416 73.2373 21.2637 74.146 24.409 77.1753C33.2923 85.7304 40.3294 89.2284 50.0186 89.9052C58.0936 90.4697 65.7583 88.6743 71.8767 84.786C76.0799 82.1147 78.2802 80.1859 85.8588 72.5289C94.2603 64.0408 99.6685 61.4151 108.917 61.3344C117.998 61.2552 123.508 63.7531 131.736 71.6784C135.352 75.1616 136.31 75.5996 138.537 74.7893C140.508 74.0719 142 71.2073 141.65 68.8121C141.373 66.9197 140.729 65.9274 138.156 63.4285C128.729 54.2707 121.981 50.8658 111.809 50.1343C109.968 50.0017 108.355 49.911 108.225 49.9326C108.094 49.9542 106.814 50.0764 105.38 50.2046ZM104.581 80.9244C95.3917 82.2879 88.5137 85.9654 81.0859 93.4865C74.7025 99.9503 73.0365 101.564 71.2919 102.973C67.6108 105.946 63.9816 107.785 59.7504 108.821C56.9497 109.507 49.7532 109.57 46.9409 108.933C41.0983 107.609 36.6126 104.928 30.796 99.2844C27.5275 96.1127 27.455 96.0589 26.0746 95.7668C22.9744 95.1107 20.1815 98.2341 20.6329 101.852C20.8727 103.771 21.3702 104.586 23.7124 106.901C31.7457 114.839 37.828 118.451 45.971 120.119C47.7836 120.49 49.5578 120.595 53.4476 120.561C60.2013 120.502 64.0344 119.658 69.3068 117.068C73.8663 114.828 77.5606 111.824 85.04 104.274C91.4415 97.8117 94.8917 95.2656 99.5206 93.5878C103.15 92.2719 104.116 92.1211 109.185 92.0768C114.255 92.0326 115.223 92.1665 118.875 93.4189C123.105 94.8689 126.909 97.4375 131.81 102.153C135.094 105.312 135.716 105.714 137.295 105.7C139.992 105.677 142.029 103.164 141.985 99.9124C141.965 98.3884 141.146 96.8835 139.315 95.0013C131.543 87.0135 124.861 82.9554 116.802 81.3283C114.75 80.9139 106.49 80.6411 104.581 80.9244Z" fill="url(#paint0_linear_50_233)"/>
                </g>
                <defs>
                <filter id="filter0_d_50_233" x="0.844692" y="0.278378" width="160.31" height="139.457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="9.58449"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_50_233"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_50_233" result="shape"/>
                </filter>
                  <linearGradient id="paint0_linear_50_233" x1="80.5606" y1="19.6834" x2="81.4387" y2="120.317" gradientUnits="userSpaceOnUse">
                    <motion.stop  
                        initial={focus?{stopColor:styleSheet.$MSVGDefault}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}}
                        animate={focus?{stopColor:styleSheet.gradients.quaterciary.FirstStop}:{stopColor:styleSheet.$MSVGDefault}} />
                    <motion.stop 
                        initial={focus?{stopColor:styleSheet.$MSVGDefault}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}}
                        animate={focus?{stopColor:styleSheet.gradients.quaterciary.FirstStop}:{stopColor:styleSheet.$MSVGDefault}}
                    offset="0.362211" />
                    <motion.stop 
                        initial={focus?{stopColor:styleSheet.$MSVGDefault}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}}
                        animate={focus?{stopColor:styleSheet.gradients.quaterciary.FirstStop}:{stopColor:styleSheet.$MSVGDefault}}
                    offset="0.596591" />
                    <motion.stop 
                        initial={focus?{stopColor:styleSheet.$MSVGDefault}:{stopColor:styleSheet.gradients.quaterciary.FirstStop}}
                        animate={focus?{stopColor:styleSheet.gradients.quaterciary.FirstStop}:{stopColor:styleSheet.$MSVGDefault}}
                    offset="1" />
                  </linearGradient>
                  </defs>
        </svg>
    </motion.div>
  )
}

export default VibeMSVG