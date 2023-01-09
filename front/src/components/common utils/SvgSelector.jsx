import React from 'react'
import classes from './SvgSelector.modules.css'
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
            <div className={classes.standart}> 
                <VibeOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <VibeOffSvg/>
            </div>
        )
    }
}
            
      

  else if (props.value ==='vibe' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={classes.standart}> 
                <VibeOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <VibeOnSvg/>
            </div>
        )
    }
            }
      

  else if (props.value ==='sync' && props.focus ==='false')  {
     switch(tier){
        case 'standart':return(
            <div className={classes.standart}> 
                <SyncOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <SyncOffSvg/>
            </div>
        )
    }
            }
      
  else if (props.value ==='sync' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={classes.standart}> 
                <SyncOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <SyncOnSvg/>
            </div>
        )
    }
            }
      
  
  else if (props.value ==='gig' && props.focus ==='false')  {
    switch(tier){
        case 'standart':return(
            <div className={classes.standart}> 
                <GigOffSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <GigOffSvg/>
            </div>
        )
    }
            }

  else if (props.value ==='gig' && props.focus ==='true')  {
    switch(tier){
        case 'standart':return(
            <div className={classes.standart}> 
                <GigOnSvg/>
            </div>
                    )
        case 'big': return(
            <div className={classes.big}> 
                <GigOnSvg/>
            </div>
        )
    }
            }
    else if (props.value ==='artst' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <ArtistOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <ArtistOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='artst' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <ArtistOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <ArtistOffSvg/>
                </div>
            )
        }
                }
     else if (props.value ==='venue' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <VenueOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <VenueOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='venue' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <VenueOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <VenueOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='gear' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <GearOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <GearOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='gear' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <GearOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <GearOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='settings' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <SettingsOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <SettingsOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='settings' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <SettingsOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <SettingsOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='search' && props.focus ==='false')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <SearchOffSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <SearchOffSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='search' && props.focus ==='true')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <SearchOnSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <SearchOnSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='muted')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <MutedSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <MutedSvg/>
                </div>
            )
        }
                }
    else if (props.value ==='unmuted')  {
        switch(tier){
            case 'standart':return(
                <div className={classes.standart}> 
                    <UnmutedSvg/>
                </div>
                        )
            case 'big': return(
                <div className={classes.big}> 
                    <UnmutedSvg/>
                </div>
            )
        }
                }
            }
  

export default SvgSelector