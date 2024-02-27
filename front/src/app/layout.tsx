"use client"
import styles from './root.module.scss'
import { ReduxProvider } from '@/store/provider'
import Top from '@/components/RootLayout/Top/Top'
import UserOutput from '@/components/RootLayout/UserContent/UserOutput'
import { Providers } from '@/components/Provider'
import {Inter} from 'next/font/google'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
 
import { ourFileRouter } from "@/app/api/uploadthing/core";


const inter = Inter({
  subsets:['latin']
}
)



export default async  function RootLayout({
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
            <div className={styles.display}>
                <UserOutput/>

              <div className={styles.focus}>
                {children}
              </div>
            </div>
          </ReduxProvider>
          
          </Providers>

        </body>
      </html>
    )
  }