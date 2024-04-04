import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { AllList, ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'
import { AdsCard } from '../../Template/AdsCard/AdsCard'
import { loadingAction } from '../../reducks/loading/actions'
import selectorSigleComment from '../../reducks/singleComments/operations/selectorSingleComment'
import uploadDateAsc from '../../Template/functions/uploadDateAsc'
import AllPosts from '../AllPosts/AllPosts'

const Home = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(selectorProductions(20));
    dispatch(selectorSigleComment())
  },[])
  return (
    <div
    className={styles.Frame}>
      <AllPosts/>
    </div>
  )
}

export default Home
