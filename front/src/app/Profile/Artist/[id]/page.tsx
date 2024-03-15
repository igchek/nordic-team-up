"use server"

import React from 'react'
import styles from './styles.module.scss'
export default async function page({params}:{params:{id:string}}) {
  return (
    <div
        className={styles.wrapper}
    >
        Artist home page


    </div>
  )
}
