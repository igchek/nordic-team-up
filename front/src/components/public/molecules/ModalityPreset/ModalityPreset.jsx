import React from 'react'
import classes from './ModalityPreset.modules.css';
import SvgSelector from '../../../common utils/SvgSelector'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

const ModalityPreset = () => {
  const [isVibePreset, setVibePreset] = useState('false')
  const [isSyncPreset, setSyncPreset] = useState('false')
  const [isGigPreset, setGigPreset] = useState('false')
  const dispatch = useDispacth()


  const vibeSet = (e) =>{
    if (isVibePreset==='false'){
      setVibePreset('true')
      dispatch(setSortByVibePreset(isVibePreset))
    }
    else {
      setVibePreset('false')
      dispatch(setSortByVibePreset(isVibePreset))
    }
  }

  const syncSet = (e) =>{
    if (isSyncPreset==='false'){
      setSyncPreset('true')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
    else {
      setSyncPreset('false')
      dispatch(setSortBySyncPreset(isSyncPreset))
    }
  }

  const gigSet = (e) =>{
    if (isGigPreset==='false'){
      setGigPreset('true')
      dispatch(setSortByGigPreset(isGigPreset))
    }
    else {
      setGigPreset('false')
      dispatch(setSortByGigPreset(isGigPreset))
    }
  }

  return (
    <div className={classes.wrapper}>
      <div onClick={vibeSet} className={classes.modalitySocketNormal}>
          <SvgSelector 
              value='vibe'
              focus={isVibePreset}
              tier='normal'

          />           
      </div>
      <div onClick={syncSet} className={classes.modalitySocketNormal}>
          <SvgSelector 
              value='sync'
              focus={isSyncPreset}
              tier='normal'

          />           
      </div>
      <div onClick={gigSet} className={classes.modalitySocketNormal}>
          <SvgSelector 
              value='gig'
              focus={isGigPreset}
              tier='normal'

          />           
      </div>
    </div>
  )
}

export default ModalityPreset