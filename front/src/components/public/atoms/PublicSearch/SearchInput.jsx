import React from 'react';
import styles from "./SearchInput.module.scss";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSearchIndexInput} from '../../../../store/publicContent';



const SearchInput = () => {
  const dispatch =useDispatch()
  const publicSearchSettings =useSelector(({publicContent}) => publicContent.publicSearchSettings)
  const [searchValue, setSearch] = useState('')

  useEffect(() =>{
    dispatch(setSearchIndexInput(searchValue))


  },[searchValue])



  
  return (
    <div className={styles.wrapper}>
        <input className={styles.input} onChange={(e)=>{setSearch(e.target.value)}} type="" />
    </div>
  )
}

export default SearchInput