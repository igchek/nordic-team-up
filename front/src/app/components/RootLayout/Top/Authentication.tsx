import React from 'react'
import style from './top.module.scss'

interface AuthenticationI {

}

const Authentication:React.FC<AuthenticationI> = () => {
  return (
    <div className={style.authenticationWrapper}>
        <button className={style.authenticationButton}>Sign In</button>
        <button className={style.authenticationButton}>Log In</button>    
    </div>
  )
}

export default Authentication