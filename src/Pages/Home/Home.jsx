import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'
import { AdsCard } from '../../Template/AdsCard/AdsCard'
import { loadingAction } from '../../reducks/loading/actions'

const Home = () => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const productions=useSelector(state=>state.productions)
  const profile=useSelector(state=>state.profile)
  useEffect(()=>{
    dispatch(selectorProductions(20));
  },[])
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      id={"home"}
      userName={profile.name}
      productionList={productions.productions}
      deleteButton={false}/>
    </div>
  )
}

export default Home
