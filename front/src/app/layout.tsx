
import type { Metadata } from 'next'
import styles from './root.module.scss'
import Top from './components/RootLayout/Top/Top'
import UserOutput from './components/RootLayout/UserContent/UserOutput/UserOutput'
import { ReduxProvider } from '@/store/provider'
// import styles from '@styles/templates.scss'

export const metadata: Metadata = {
    title: 'Svibes',
    description: 'Pet project',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
         <link rel="icon" type="image/svg+xml" href="/svibes.svg" />       
        <title>Svibes</title>
        </head>
        <body className={styles.globalWrapper}>
          <ReduxProvider>
            <Top
              isAuthorised={false}
            />
            <div className={styles.display}>
              <UserOutput
                communityTarget={false}
                specificSearch={false}
              />
              <div className={styles.focus}>
                {children}
              </div>
            </div>
          </ReduxProvider>
          
          

        </body>
      </html>
    )
  }