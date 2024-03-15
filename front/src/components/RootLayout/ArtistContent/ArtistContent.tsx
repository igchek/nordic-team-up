"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './styles.module.scss'
// import { useSession } from 'next-auth/react'
import SvgSelector from '@/Utils/SvgSelector'
import { useAppDispatch, useAppSelector } from '@/hooks'
import ArtistVibeOutput from './ArtistVibeOutput'
import ArtistSyncOutput from './ArtistSyncOutput'
import ArtistGigOutput from './ArtistGigOutput'
import { fetchArtistContentEssentials } from '@/lib/actions/profiles/artist.actions'
import { parseArtistContentsEssentials } from '@/store/subAccounts'


const ArtistsContent = () => {
    
  const dispatch = useAppDispatch()
    const focusArtistAccount = useAppSelector(({user})=>user.subAccounts.artist.focusAccount)
    const vibes = useAppSelector(({subAccounts})=>subAccounts.artist.vibes)
    const [modalitySelector, setModalitySelector] = useState('')
    useEffect(()=>{

      if(focusArtistAccount){
        fetchArtistContentEssentials({artistId:focusArtistAccount._id}).then(res=>{
          
          dispatch(parseArtistContentsEssentials({vibeData:res.vibes, syncData:res.syncs, gigData:res.gigs}))
        })
      }

      
    }, [focusArtistAccount])
  return (
    <motion.div
        key={'wrapper'}
            initial={{width:0, x:'15vw'}}
            animate={{width:'15vw', x:0}}
            exit={{width:0, x:'15vw'}}
        className={styles.wrapper}
    >
      <motion.div
        className={styles.selectorControls}
      >
        <motion.div
          className={styles.search}
        >
          <motion.div
            className={styles.inputWrapper}
          >
            <motion.input type="text"
              className={styles.input}
            />
          </motion.div>
          <motion.div
            className={styles.iconWrapper}
          >
            <motion.div
              className={styles.iconSocket}
            >
              <SvgSelector
                tier='standart'
                focus={false}
                value='search'
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.modalityPreset}
        >
          <motion.div
            className={styles.modalityWrapper}
          >
            <motion.div
              className={styles.modalitySocket}
              onClick={()=>{
                if(modalitySelector==='vibe'){
                  setModalitySelector('')
                }
                else 
                setModalitySelector('vibe')
              }}
            >
              <SvgSelector
                tier='standart'
                focus={modalitySelector==='vibe'?true:false}
                value='vibe'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.modalityWrapper}
          >
            <motion.div
              className={styles.modalitySocket}
              onClick={()=>{
                if(modalitySelector==='sync'){
                  setModalitySelector('')
                }
                else 
                setModalitySelector('sync')
              }}
            >
              <SvgSelector
                tier='standart'
                focus={modalitySelector==='sync'?true:false}
                value='sync'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.modalityWrapper}
          >
            <motion.div
              className={styles.modalitySocket}
              onClick={()=>{
                if(modalitySelector==='gig'){
                  setModalitySelector('')
                }
                else 
                setModalitySelector('gig')
              }}
            >
              <SvgSelector
                tier='standart'
                focus={modalitySelector==='gig'?true:false}
                value='gig'
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.output}
      >
        <AnimatePresence>
          {
           modalitySelector==='vibe'&&
           <ArtistVibeOutput
              vibes={vibes}
           />

          }
          {
            modalitySelector==='sync'&&
            <ArtistSyncOutput/>
          }
          {
            modalitySelector==='gig'&&
            <ArtistGigOutput/>
          }
        </AnimatePresence>
      </motion.div>

    </motion.div>
  )
}

export default ArtistsContent