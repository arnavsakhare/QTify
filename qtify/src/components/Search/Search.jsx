import React from 'react'
import styles from "./Search.module.css";
import {SearchIcon} from "../../assets/search-icon";


function Search({placeholder}) {
  return (
    <div className={styles.wrapper}>
        <input 
            type="text" 
            name="search"
            id="search"
            className={styles.search}
            placeholder={placeholder} 
        />
        <button className={styles.searchIcon}>
            <SearchIcon />
        </button>
    </div>
  )
}

export default Search