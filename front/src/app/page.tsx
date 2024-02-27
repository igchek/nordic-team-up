
import { vibe } from '@/store/modules/libraries/Content/Vibe'
import styles from './root.module.scss'
import { sync } from '@/store/modules/libraries/Content/Sync'
import { gig } from '@/store/modules/libraries/Content/Gig'
import DashRow from 'src/components/HomePage/DashRow'

 
export default async function Home() {
  


  const coupledVibes:(vibe|sync|gig)[][] = []





  return (
    <div className={styles.HomePageWrapper}>
      {
        coupledVibes.map(couple=>
          <DashRow
            vibes={couple}
          />)
      }
      starter
    </div>
  )
}