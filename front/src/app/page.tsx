
import { vibe } from '@/store/modules/libraries/Content/Vibe'
import styles from './root.module.scss'
import { sync } from '@/store/modules/libraries/Content/Sync'
import { gig } from '@/store/modules/libraries/Content/Gig'
import DashRow from 'src/components/HomePage/DashRow'

import MorphyWaves from '@/components/common/media/MorphyWaves'

import { styleSheet } from '@/stylesGlobal/variables'
import VibeSection from '@/components/HomePage/VibeSection'
import FormExample from '@/Utils/FormExample'


 
export default async function Home() {
  


  const coupledVibes:(vibe|sync|gig)[][] = []





  return (
    <div className={styles.HomePageWrapper}>
      {/* {
        coupledVibes.map(couple=>
          <DashRow
            vibes={couple}
          />)
      } */}
      {/* <VibeSection/> */}
      <MorphyWaves
        fill={styleSheet.spread.interfaceGlobal}
        rotate={true}
      />
      
      {/* <SeparatorWave
        position='upper'
        fill={styleSheet.spread.interfaceGlobal}
      />
      <SeparatorWave
        position='lower'
        fill={styleSheet.spread.interfaceGlobal}
      /> */}
      <VibeSection
        vibe={{
          vibeId:'123',
          content:{
            pic:'https://utfs.io/f/6944cf03-d268-479f-8b2e-b9d90c8d9f26-qaru5d.jpg',
            title:'Test doge'
          },
          artist:{
            title:'Artist Doge',
            logo:'https://utfs.io/f/6944cf03-d268-479f-8b2e-b9d90c8d9f26-qaru5d.jpg'
          },
          vibrations:{
            total:345,
            local:{
              geoLogo:'',
              vibrations:102
            }
          },
          format:'Commotion',
          modality:'vibe'
        }}
      />
      <FormExample/>
    </div>
  )
}