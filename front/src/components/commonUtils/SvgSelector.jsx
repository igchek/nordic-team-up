import React from 'react'
import styles from './SvgSelector.modules.css'
import VibeOffSvg from '../../assets/svg/VibeOffSvg'
import VibeOnSvg from '../../assets/svg/VibeOnSvg'
import SyncOffSvg from '../../assets/svg/SyncOffSvg'
import SyncOnSvg from '../../assets/svg/SyncOnSvg'
import GigOffSvg from '../../assets/svg/GigOffSvg'
import GigOnSvg from '../../assets/svg/GigOnSvg'
import SearchOnSvg from '../../assets/svg/SearchOnSvg'
import SearchOffSvg from '../../assets/svg/SearchOffSvg'
import SettingsOnSvg from '../../assets/svg/SettingsOnSvg'
import ArtistOnSvg from '../../assets/svg/ArtistOnSvg'
import ArtistOffSvg from '../../assets/svg/ArtistOffSvg'
import MutedSvg from '../../assets/svg/mutedSVG'
import UnmutedSvg from '../../assets/svg/UnmutedSvg'


const SvgSelector = (props) => {
    const tier = props.tier
  if (props.value ==='vibe' && props.focus ==='false')  {
    switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <VibeOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <VibeOffSvg/>
            </div>
        )
    }
}
            
      

  else if (props.value ==='vibe' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <VibeOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <VibeOnSvg/>
            </div>
        )
    }
            }
      

  else if (props.value ==='sync' && props.focus ==='false')  {
     switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <SyncOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <SyncOffSvg/>
            </div>
        )
    }
            }
      
  else if (props.value ==='sync' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <SyncOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <SyncOnSvg/>
            </div>
        )
    }
            }
      
  
  else if (props.value ==='gig' && props.focus ==='false')  {
    switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <GigOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <GigOffSvg/>
            </div>
        )
    }
            }

  else if (props.value ==='gig' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={styles.standart}> 
                <GigOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={styles.big}> 
                <GigOnSvg/>
            </div>
        )
    }
            }
    else if (props.value ==='artst' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <ArtistOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <ArtistOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='artst' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <ArtistOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <ArtistOffSvg/>
                </div>
            )
        }
                }
     else if (props.value ==='venue' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <VenueOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <VenueOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='venue' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <VenueOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <VenueOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='gear' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <GearOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <GearOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='gear' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <GearOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <GearOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='settings' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <SettingsOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <SettingsOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='settings' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <SettingsOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <SettingsOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='search' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <SearchOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <SearchOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='search' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <SearchOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <SearchOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='muted')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <MutedSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <MutedSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='unmuted')  {
        switch(tier){
            case 'standart':return(
                <div className={styles.standart}> 
                    <UnmutedSvg/>
                </div>
                        )
            case 'big': return(
                <div className={styles.big}> 
                    <UnmutedSvg/>
                </div>
            )
        }
                }
            }
  

export default SvgSelector