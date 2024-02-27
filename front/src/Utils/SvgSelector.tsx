import React from 'react'
import styles from './SvgSelector.module.scss';
import VibeOffSvg from 'src/assets/svg/VibeOffSvg'
import VibeOnSvg from 'src/assets/svg/VibeOnSvg'
import SyncOffSvg from 'src/assets/svg/SyncOffSvg'
import SyncOnSvg from 'src/assets/svg/SyncOnSvg'
import GigOffSvg from 'src/assets/svg/GigOffSvg'
import GigOnSvg from 'src/assets/svg/GigOnSvg'
import SearchOnSvg from 'src/assets/svg/SearchOnSvg'
import SearchOffSvg from 'src/assets/svg/SearchOffSvg'
import SettingsOnSvg from 'src/assets/svg/SettingsOnSvg'
import ArtistOnSvg from 'src/assets/svg/ArtistOnSvg'
import ArtistOffSvg from 'src/assets/svg/ArtistOffSvg'
import MutedSvg from 'src/assets/svg/MutedSvg'
import UnmutedSvg from 'src/assets/svg/UnmutedSvg'
import GearOffSvg from 'src/assets/svg/GearOffSvg'
import GearOnSvg from 'src/assets/svg/GearOnSvg'
import VenueOffSvg from 'src/assets/svg/VenueOffSvg';
import VenueOnSvg from 'src/assets/svg/VenueOnSvg';
import SettingsOffSvg from 'src/assets/svg/SettingsOffSvg';
import LoginOnSvg from '@/assets/svg/LogInOnSvg';
import LoginOffSvg from '@/assets/svg/LoginOffSvg';
import ChatCreateOffSvg from '@/assets/svg/ChatCreateOffSvg';
import ChatCreateOnSvg from '@/assets/svg/ChatCreateOnSvg';
import PencilOnSvg from '@/assets/svg/PencilOnSvg';
import PencilOffSvg from '@/assets/svg/PencilOffSvg';
import NetworkingOnSvg from '@/assets/svg/NetworkOnSvg';
import NetworkingOffSvg from '@/assets/svg/NetworkOffSvg';
import TargetOnSvg from '@/assets/svg/TargetOnSvg';
import TargetOffSvg from '@/assets/svg/TargetOffSvg';
import PlusOffSvg from '@/assets/svg/PlusOffSvg';
import PlusOnSvg from '@/assets/svg/PlusOnSvg';
import DeleteOffSvg from '@/assets/svg/DeleteOffSvg';
import DeleteOnSvg from '@/assets/svg/DeleteOnSvg';
import BackOnSvg from '@/assets/svg/BackOnSvg';
import BackOffSvg from '@/assets/svg/BackOffSvg';
import DoneOnSvg from '@/assets/svg/DoneOn';
import DoneOffSvg from '@/assets/svg/DoneOff';
import UploadOnSvg from '@/assets/svg/UploadOnSvg';
import UploadOffSvg from '@/assets/svg/UploadOffSvg';

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
    else if (props.value ==='logIn' && props.focus===true)  {
        return(
            <div className={styles.standart}>
                <LoginOnSvg/>
            </div>
        )
        
            }
    else if (props.value ==='logIn' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <LoginOffSvg/>
            </div>
        )
        
            }
    else if (props.value ==='chatCreate' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <ChatCreateOffSvg/>
            </div>
        )
        
            }
    else if (props.value ==='chatCreate' && props.focus===true)  {
        return(
            <div className={styles.standart}>
                <ChatCreateOnSvg/>
            </div>
        )
        
            }

    else if (props.value ==='chatCreate' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <ChatCreateOffSvg/>
            </div>
        )
    }
    else if (props.value ==='pencil' && props.focus===true)  {
        return(
            <div className={styles.standart}>
                <PencilOnSvg/>
            </div>
        )
        
            }
    else if (props.value ==='pencil' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <PencilOffSvg/>
            </div>
        )
        
            }
    else if (props.value ==='networking' && props.focus===true)  {
        return(
            <div className={styles.standart}>
                <NetworkingOnSvg/>
            </div>
        )
        
            }
    else if (props.value ==='networking' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <NetworkingOffSvg/>
            </div>
        )
        
            }
    else if (props.value ==='target' && props.focus===true)  {
        return(
            <div className={styles.standart}>
                <TargetOnSvg/>
            </div>
        )
        
            }
    else if (props.value ==='target' && props.focus===false)  {
        return(
            <div className={styles.standart}>
                <TargetOffSvg/>
            </div>
        )
        
            }
    else if (props.value ==='plus' && props.focus===false){
        return(
            <div className={styles.standart}>
                <PlusOffSvg/>
            </div>
        )
    }
    else if (props.value ==='plus' && props.focus===true){
        return(
            <div className={styles.standart}>
                <PlusOnSvg/>
            </div>
        )
    }
    else if (props.value==='delete' && props.focus===false){
        return(
            <div className={styles.standart}>
                <DeleteOffSvg/>
            </div>
        )
    }
    else if (props.value==='delete' && props.focus===true){
        return(
            <div className={styles.standart}>
                <DeleteOnSvg/>
            </div>
        )
    }
    else if (props.value==='back' && props.focus===true){
        return(
            <div className={styles.standart}>
                <BackOnSvg/>
            </div>
        )
    }
    else if (props.value==='back' && props.focus===false){
        return(
            <div className={styles.standart}>
                <BackOffSvg/>
            </div>
        )
    }
    else if (props.value==='done' && props.focus===true){
        return(
            <div className={styles.standart}>
                <DoneOnSvg/>
            </div>
        )
    }
    else if (props.value==='done' && props.focus===false){
        return(
            <div className={styles.standart}>
                <DoneOffSvg/>
            </div>
        )
    }
    else if (props.value==='upload' && props.focus===true){
        return(
            <div className={styles.standart}>
                <UploadOnSvg/>
            </div>
        )
    }
    else if (props.value==='upload' && props.focus===false){
        return(
            <div className={styles.standart}>
                <UploadOffSvg/>
            </div>
        )
    }
            }
  

export default SvgSelector