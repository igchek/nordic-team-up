import React from 'react'
import SearchInput from '../../atoms/PublicSearch/SearchInput'
import SearchSettings from '../../atoms/PublicSearch/SearchSettings'
import styles from './PublicSearch.module.scss'

const PublicSearch = () => {
  return (
    <div className={styles.wrapper}>
        <SearchInput/>
        <SearchSettings/>
    </div>
  )
}

export default PublicSearch