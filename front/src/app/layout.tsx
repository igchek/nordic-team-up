"use client"
import styles from './root.module.scss'
import { ReduxProvider } from '@/store/provider'
import Top from '@/components/RootLayout/Top/Top'
import { Providers } from '@/components/Provider'
import {Inter} from 'next/font/google'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
 
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { AnimatePresence } from 'framer-motion'

import { motion } from 'framer-motion'
import ContentNavigator from '@/components/RootLayout/Navigation/Navigator'



const inter = Inter({
  subsets:['latin']
}
)



export default   function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <html className={inter.className} lang="en">
        <head >
         <link rel="icon" type="image/svg+xml" href="/svibes.svg" />       
        <title>Svibes</title>
        </head>
        <body className={styles.globalWrapper}>
          <Providers>
          <ReduxProvider>
          <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
          />
            <Top
            />
            <motion.div className={styles.display}>
              <AnimatePresence>
                <ContentNavigator/>
              </AnimatePresence>
              <div className={styles.focus}>
                {children}
              </div>
            </motion.div>
          </ReduxProvider>
          
          </Providers>

        </body>
      </html>
    )
  }