import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./HowToGet.module.css"
import { SearchBox } from '../../../../../Template'

const HowToGet = () => {
    const [howToGet,setHowToGet]=useState("")
    const profile=useSelector(state=>state.profile)
    const radio=profile.howToGetProduction
    const inputHowToGet=useCallback((event)=>{
      setHowToGet(event.target.value)
    },[setHowToGet])
    return (
      <div
      className={styles.Frame}>
        <SearchBox
        onChange={inputHowToGet}
        title='入手方法'
        radioName='howToGet'
        id='howToGet'
        values={radio}/>
      </div>
    )
}

export default HowToGet
