import React from 'react'
import styles from './styles.module.scss';

const TargetOnSvg:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M33.9083 4.96273L14.4423 4.85806L4.61873 21.6637L14.261 38.574L33.727 38.6787L37.8313 31.6573L26.4911 31.5963L20.5471 21.1719L26.6029 10.812L37.2762 10.8694L33.9083 4.96273ZM48.1693 21.8979L36.2391 0.97521L12.1545 0.845703L0 21.6389L11.9302 42.5615L36.0148 42.6911L48.1693 21.8979ZM37.4373 12.8703L27.7468 12.8182L27.7467 12.8184L33.3681 12.8486L36.3401 18.0608L33.3122 23.2408L27.3123 23.2085L24.5278 18.3251L22.8565 21.1843L27.6566 29.6025L37.347 29.6547L42.2374 21.2885L37.4373 12.8703Z" fill="url(#paint0_linear_772_9230)"/>
        <defs>
        <linearGradient id="paint0_linear_772_9230" x1="24.0847" y1="0.845703" x2="24.0847" y2="42.6911" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4C850"/>
        <stop offset="0.320305" stopColor="#C2D255"/>
        <stop offset="0.669278" stopColor="#6BD8C2"/>
        <stop offset="1" stopColor="#956AAF"/>
        </linearGradient>
        </defs>
        </svg>
    </div>
  )
}

export default TargetOnSvg