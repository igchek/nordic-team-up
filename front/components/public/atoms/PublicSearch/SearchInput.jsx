import React from 'react';
import classes from './SearchInput.modules.css';
import {useState} from 'react';


const SearchInput = () => {
  const [searchValue, setSearch] = useState('')
  
  return (
    <div className={classes.wrapper}>
      <input className={classes.inputSocket} onChange={(e)=>{setSearch(e.target.value)}} type="" />
    </div>
  )
}

export default SearchInput