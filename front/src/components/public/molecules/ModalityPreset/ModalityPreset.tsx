import React from 'react'
import styles from "./ModalityPreset.module.scss";
import ModalityTemplate from '../../atoms/ModalityPreset/ModalityTemplate';

const ModalityPreset:React.FC = () => {
  

 

  return (
    <div className={styles.wrapper}>
      <ModalityTemplate
        value='vibe'
        focus={false}
        tier='standart'
      />
      <ModalityTemplate
        value='sync'
        focus={false}
        tier='standart'
      />
      <ModalityTemplate
        value='gig'
        focus={false}
        tier='standart'
      />
    </div>
  )
}

export default ModalityPreset