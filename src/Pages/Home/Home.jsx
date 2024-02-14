import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { AllList, ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'
import { AdsCard } from '../../Template/AdsCard/AdsCard'
import { loadingAction } from '../../reducks/loading/actions'
import selectorSigleComment from '../../reducks/singleComments/operations/selectorSingleComment'
import uploadDateAsc from '../../Template/functions/uploadDateAsc'

const Home = () => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const productions=useSelector(state=>state.productions)
  const comments=useSelector(state=>state.comments)
  const profile=useSelector(state=>state.profile)
  useEffect(()=>{
    dispatch(selectorProductions(20));
    dispatch(selectorSigleComment())
    
  },[])
  
  return (
    <div
    className={styles.Frame}>
      <AllList
      productionList={productions.productions}
      commentList={comments.comments}/>
      <ProductionList
      id={"home"}
      userName={profile.name}
      productionList={productions.productions}
      deleteButton={false}/>
    </div>
  )
}

export default Home
