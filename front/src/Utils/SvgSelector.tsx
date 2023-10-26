import React from 'react'
import styles from './SvgSelector.module.scss';
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
import MutedSvg from '../../assets/svg/MutedSvg'
import UnmutedSvg from '../../assets/svg/UnmutedSvg'
import GearOffSvg from '../../assets/svg/GearOffSvg'
import GearOnSvg from '../../assets/svg/GearOnSvg'
import VenueOffSvg from '../../assets/svg/VenueOffSvg';
import VenueOnSvg from '../../assets/svg/VenueOnSvg';
import SettingsOffSvg from '../../assets/svg/SettingsOffSvg';

interface SvgSelectorI {
    value:string
    focus:Boolean
    tier:string
}

const SvgSelector:React.FC<SvgSelectorI> = (props) => {
  if (props.value ==='vibe' && !props.focus)  {
    switch(props.tier){
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
            
      

  else if (props.value ==='vibe' && props.focus )  {
    switch(props.tier){
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
      

  else if (props.value ==='sync' && !props.focus)  {
     switch(props.tier){
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
      
  else if (props.value ==='sync' && props.focus )  {
    switch(props.tier){
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
      
  
  else if (props.value ==='gig' && !props.focus)  {
    switch(props.tier){
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

  else if (props.value ==='gig' && props.focus )  {
    switch(props.tier){
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
    else if (props.value ==='artist' && props.focus )  {
        switch(props.tier){
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
    else if (props.value ==='artist' && !props.focus)  {
        switch(props.tier){
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
     else if (props.value ==='venue' && props.focus )  {
        switch(props.tier){
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
    else if (props.value ==='venue' && !props.focus)  {
        switch(props.tier){
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
    else if (props.value ==='gear' && props.focus )  {
        switch(props.tier){
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
    else if (props.value ==='gear' && !props.focus)  {
        switch(props.tier){
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
    else if (props.value ==='settings' && props.focus )  {
        switch(props.tier){
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
    else if (props.value ==='settings' && !props.focus)  {
        switch(props.tier){
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
    else if (props.value ==='search' && !props.focus)  {
        switch(props.tier){
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
    else if (props.value ==='search' && props.focus )  {
        switch(props.tier){
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
        switch(props.tier){
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
        switch(props.tier){
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
    else if (props.value ==='unmuted')  {
        switch(props.tier){
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
    else if (props.value ==='gear')  {
        switch(props.tier){
             case 'standart':return(
                <div className={styles.standart}> 
                    <GearOnSvg/>
                 </div>
                    )
            case 'big': return(
                <div className={styles.big}> 
                     <GearOffSvg/>
                </div>
                    )
         }
                 }
        
            }
  

export default SvgSelector