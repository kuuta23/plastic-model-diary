import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'

const Home = () => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const productions=useSelector(state=>state.productions)
  const profile=useSelector(state=>state.profile)
  useEffect(()=>{
    if(user.isSignedIn){
      dispatch(selectorProductions());
    }
  },[])
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      userName={profile.name}
      productionList={productions.productions}/>
    </div>
  )
}

export default Home
