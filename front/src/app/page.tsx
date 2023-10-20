'use client'
import { vibe } from '@/store/modules/libraries/Content/Vibe'
import styles from './root.module.scss'
import { useAppSelector, useAppDispatch } from 'src/hooks'
import { sync } from '@/store/modules/libraries/Content/Sync'
import { gig } from '@/store/modules/libraries/Content/Gig'
import { useEffect, useState } from 'react'
import { setMocks } from '@/store/publicContent'
import DashRow from './components/HomePage/DashRow'

 
export default function Home() {
  const publicContent = useAppSelector(({publicContent})=>publicContent.content)
  const dispatch = useAppDispatch()
  const coupledVibes:(vibe|sync|gig)[][] = []
  // const [isSegmentRequested, setSegmentRequest] = useState(false)

  useEffect(()=>{
    dispatch(setMocks)
    for (let c of publicContent){
      let couple:(vibe|sync|gig)[] = []
      if (c instanceof vibe||sync||gig){
        {couple.length<2?
          couple.push(c)
          :
          coupledVibes.push(couple)
          couple=[]
          couple.push(c)
        }
      }
    }
  },[])





  return (
    <div className={styles.HomePageWrapper}>
      {
        coupledVibes.map(couple=>
          <DashRow
            vibes={couple}
          />)
      }
    </div>
  )
}