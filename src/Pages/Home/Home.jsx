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
import selectorMyProductions from '../../reducks/productions/operations/selectorMyProduction'

const Home = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(selectorMyProductions())
    dispatch(selectorProductions(20));
  },[])
  return (
    <div
    className={styles.Frame}>
      <AllPosts
      local={false}/>
    </div>
  )
}

export default Home
