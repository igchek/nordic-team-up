"use client"

import styles from './styles.module.scss';
import React from 'react';

interface MajorVisualI{
    promoLogo:string
}



const MajorVisual:React.FC<MajorVisualI> = (props) => {
    var coverStyle = {
        backgroundImage:`url(src/assets/PromoLogo/${props.promoLogo}.jpg)`
    }
  return (
    <div
        style={coverStyle}
        className={styles.majorVisual}>
        {/* prhps pull some essentials or dynamic updates here */}
    </div>
  )
}

export default MajorVisual