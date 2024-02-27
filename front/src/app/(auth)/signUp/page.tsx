"use client"
import React from 'react'
import styles from '../styles.module.scss'
import SignUpForm from '@/components/auth/SignUpForm'
import { AnimatePresence } from 'framer-motion'
export default function page() {
  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode='wait'>
        <SignUpForm/>
      </AnimatePresence>
    </div>
  )
}
