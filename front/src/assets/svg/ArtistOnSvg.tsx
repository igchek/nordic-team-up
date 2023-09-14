import styles from './styles.module.scss';
import React from 'react'

const ArtistOnSvg:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 77 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_392_9483)">
          <path d="M75.2813 35.0924L63.8049 31.3678C54.5135 28.3526 47.1892 21.9077 43.7634 13.7318L39.5304 3.63185C39.3713 3.25217 38.9599 3 38.5 3C38.0401 3 37.6287 3.25217 37.4696 3.63185L33.2366 13.7312C29.8102 21.9077 22.4859 28.3526 13.1951 31.3678L1.71801 35.0924C1.28656 35.2324 1 35.5944 1 35.9991C1 36.4039 1.28656 36.7659 1.71801 36.9059L13.1958 40.6316C22.4865 43.6468 29.8102 50.0917 33.2366 58.2676L37.4696 68.3681C37.6287 68.7478 38.0401 69 38.5 69C38.9599 69 39.3713 68.7478 39.5304 68.3681L43.7634 58.2676C47.1898 50.0917 54.5135 43.6463 63.8042 40.6316L75.282 36.9059C75.7134 36.7659 76 36.4039 76 35.9991C76 35.5944 75.7128 35.2324 75.2813 35.0924Z" fill="url(#paint0_radial_392_9483)"/>
          </g>
          <defs>
          <filter id="filter0_dd_392_9483" x="0.195848" y="0.788583" width="76.6083" height="70.4228" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-1.40727"/>
          <feGaussianBlur stdDeviation="0.402076"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_392_9483"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1.40727"/>
          <feGaussianBlur stdDeviation="0.402076"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_392_9483" result="effect2_dropShadow_392_9483"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_392_9483" result="shape"/>
          </filter>
          <radialGradient id="paint0_radial_392_9483" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38 35.9005) rotate(90) scale(33 42.0645)">
          <stop offset="0.115035" stopColor="#FBC861"/>
          <stop offset="0.271294" stopColor="#81D55E"/>
          <stop offset="0.495265" stopColor="#70BCE6"/>
          <stop offset="1" stopColor="#BC6BC2"/>
          </radialGradient>
          </defs>
        </svg>

    </div>
  )
}

export default ArtistOnSvg


