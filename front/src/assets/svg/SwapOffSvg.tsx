import React from 'react'
import styles from './styles.module.scss';

const SwapOffSvg:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="1200" rx="600" fill="#BFBFBF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M1051 574.487H945.117C941.089 420.808 814.906 297 660.273 297H264.893V407.335H660.273C754.052 407.335 830.594 481.673 834.59 574.487H729.29L890.124 735.289L1051 574.487ZM471.71 626.363L310.876 465.561L150 626.363H255.883C259.911 780.042 386.083 903.85 540.727 903.85H936.107V793.515H540.727C446.948 793.515 370.406 719.177 366.41 626.363H471.71Z" fill="#323232"/>
        </svg>


    </div>
  )
}

export default SwapOffSvg

