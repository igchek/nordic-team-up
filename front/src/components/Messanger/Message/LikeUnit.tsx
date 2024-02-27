"use client";


import { userData } from '@/lib/models/profiles/user.models';
import styles from './styles.module.scss';
import React, { useState } from 'react'
import SvgSelector from '@/Utils/SvgSelector';

interface likeUnitI {
    type:string
    quantity:number
}

const LikeUnit:React.FC<likeUnitI> = (props) => {

    const [isHovered, setHover] = useState(false)

  return (
    <div onMouseEnter={()=>setHover(!isHovered)} onMouseLeave={()=>setHover(!isHovered)} className={styles.likeUnit}>
        <div className={styles.likeSocket}>
            <SvgSelector
                value={props.type}
                focus={isHovered}
                tier='standart'
            />
        </div>
        <div className={styles.quantitySocket}>
            {props.quantity}
        </div>
    </div>
  )
}

export default LikeUnit