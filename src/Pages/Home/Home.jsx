import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'

const Home = () => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const productions=useSelector(state=>state.productions)
  useEffect(()=>{
    if(user.isSignedIn){
      dispatch(selectorProductions());
    }
    
  
  },[])
  console.log(productions.productions);
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      productionList={productions.productions}/>
    </div>
  )
}

export default Home
