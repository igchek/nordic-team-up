import React from 'react'
import styles from './top.module.scss'

interface ProfileI {
    photo:string
}

const Profile:React.FC<ProfileI> = ({photo}) => {
  return (
    <div className={styles.profilePhotoWrapper}>
        <img className={styles.profile} src={`src/assets/Personal/${photo}.jpg`} alt="personal" />
    </div>
  )
}

export default Profile