import React, { useEffect, useState } from 'react'
import styles from "./SearchBox.module.css"
import SearchButton from './SeachButton/SearchButton'
import SellectBox from './SellectBox/SellectBox'

const SearchBox = () => {
    const [click,setClick]=useState(false)
    useEffect(()=>{
        const element=document.getElementById('search-box')
        if(click){
            element.style.display="flex"
        }else{
            element.style.display="none"
        }
    },[click])
  return (
    <div
    className={styles.Frame}
    >
      <SearchButton
      onClick={()=>setClick(!click)}/>
      <div
      className={styles.SellectBox}
      id='search-box'>
        <SellectBox/>
      </div>

    </div>
  )
}

export default SearchBox
