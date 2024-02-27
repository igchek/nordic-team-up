"use client"
import styles from './styles.module.scss';

import React from 'react'

interface MediaBlogI {

}

const MediaBlog:React.FC<MediaBlogI> = (props) => {
  return (
    <div className={styles.wrapper}>MediaBlog</div>
  )
}

export default MediaBlog