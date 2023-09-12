import React from 'react';
import styles from "./SearchInput.module.scss";
import {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
// import {setSearchIndexInput} from '../../../../store/publicContent';



const SearchInput:React.FC = () => {
  const dispatch =useAppDispatch()
  const publicSearchSettings =useAppSelector(({publicContent}) => publicContent.publicSearchSettings)
  const [searchValue, setSearch] = useState<string|null>(null)

  useEffect(() =>{
    // dispatch(setSearchIndexInput(searchValue))


  },[searchValue])



  
  return (
    <div className={styles.wrapper}>
        <input className={styles.input} onChange={(e)=>{setSearch(e.target.value)}} type="" />
    </div>
  )
}

export default SearchInput