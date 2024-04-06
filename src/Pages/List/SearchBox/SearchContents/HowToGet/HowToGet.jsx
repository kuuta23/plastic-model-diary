import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./HowToGet.module.css"
import { SearchBox } from '../../../../../Template'
import { searchHowToGetAction } from '../../../../../reducks/search/production/actions'

const HowToGet = () => {
    const [howToGet,setHowToGet]=useState("")
    const dispatch=useDispatch()
    const profile=useSelector(state=>state.profile)
    const radio=profile.howToGetProduction
    const inputHowToGet=useCallback((event)=>{
      setHowToGet(event.target.value)
      dispatch(searchHowToGetAction(event.target.value))
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
