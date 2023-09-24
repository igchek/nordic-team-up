import React from 'react';
import styles from "./SearchInput.module.scss";
import {useState, useEffect} from 'react';




const SearchInput:React.FC = () => {
  const [searchValue, setSearch] = useState<string|null>(null)

  useEffect(() =>{
    // dispatch(setSearchIndexInput(searchValue))


  },[searchValue])



  
  return (
    <div className={styles.wrapper}>
        <input className={styles.input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch((e.target as HTMLInputElement).value)}} type="" />
    </div>
  )
}

export default SearchInput