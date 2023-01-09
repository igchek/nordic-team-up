import React from 'react'
import SearchInput from '../../atoms/PublicSearch/SearchInput'
import SearchSettings from '../../atoms/PublicSearch/SearchSettings'
import classes from './PublicSearch.modules.css'

const PublicSearch = () => {
  return (
    <div className={classes.wrapper}>
        <SearchInput/>
        <SearchSettings/>
    </div>
  )
}

export default PublicSearch