import React from 'react';
import classes from './SearchInput.modules.css';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import publicContent from '../../../../store/publicContent';


const SearchInput = () => {
  const dispatch =useDispatch()
  const publicSearchSettings =useSelector(({publicContent}) => state.publicSearchSettings)
  const [searchValue, setSearch] = useState('')

  useEffect(() =>{
    dispatch(setSearchIndexInput(searchValue))


  },[searchValue])



  
  return (
    <div className={classes.wrapper}>
        <input className={classes.input} onChange={(e)=>{setSearch(e.target.value)}} type="" />
    </div>
  )
}

export default SearchInput