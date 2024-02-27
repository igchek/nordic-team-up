"use client"
import React from 'react'
import styles from '../styles.module.scss'
import SignInForm from '@/components/auth/SignInForm'
import { AnimatePresence } from 'framer-motion'

export default function 
() {
  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode='wait'>
        <SignInForm/>
      </AnimatePresence>
    </div>
  )
}
