import React from 'react'
import styles from './styles.module.scss';


const DoneOnSvg:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1707_20724)">
        <rect width="81" height="81" rx="40.5" fill="url(#paint0_linear_1707_20724)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M60.83 31.5855C62.7767 29.2538 62.4646 25.7854 60.1329 23.8387C57.8011 21.8919 54.3327 22.2041 52.386 24.5358L35.2886 45.0148L28.5761 37.1588C26.6029 34.8494 23.1312 34.5769 20.8218 36.5501C18.5124 38.5234 18.2399 41.9951 20.2131 44.3045L30.6068 56.4688C31.7627 57.8216 33.4327 58.4754 35.082 58.3884C36.8978 58.6383 38.7978 57.9753 40.0591 56.4646L60.83 31.5855Z" fill="#F5F5F5"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_1707_20724" x1="40.5" y1="0" x2="40.5" y2="81" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4C951"/>
        <stop offset="0.331596" stopColor="#C3D15A"/>
        <stop offset="0.659721" stopColor="#6FD1C2"/>
        <stop offset="1" stopColor="#9470B0"/>
        </linearGradient>
        <clipPath id="clip0_1707_20724">
        <rect width="81" height="81" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>
  )
}

export default DoneOnSvg