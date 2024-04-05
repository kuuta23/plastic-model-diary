import React, { useEffect, useState } from 'react'
import Name from './Name/Name'
import Radio from './Radio/Radio'
import styles from "./SearchBox.module.css"

const SearchBox = (
    {
        title="カラー",
        radioName="color",
        onChange,
        values=[],
        id="color"
    }
) => {
    const radioId=id+"-radio"
    const [click,setClick]=useState(false)
    useEffect(()=>{
        const radioElement =document.getElementById(radioId);
        radioElement.style.transition="0.3s"
        if(click){
            radioElement.style.height=(values.length+1)*32+"px"
        }else{
            radioElement.style.height=0+"px"
        }
    },[click])
    
  return (
    <div
    className={styles.Frame}>
        <div>
            <Name
            name={title}
            onClick={()=>setClick(!click)}/>
        </div>
        <div
        className={styles.Radio}
        id={radioId}>
            <Radio
            name={radioName}
            values={values}
            onChange={onChange}/>
        </div>
      
    </div>
  )
}

export default SearchBox
