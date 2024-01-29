import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import selectorProductions from '../../reducks/productions/operations/selectorProduction'

const Home = () => {
  const dispatch=useDispatch();
  const selector=useSelector(state=>state);
  useEffect(()=>{
    if(selector.user.isSignedIn){
      dispatch(selectorProductions());
    }
    
  
  },[])
  console.log(selector.productions.productions);
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      productionList={selector.productions.productions}/>
    </div>
  )
}

export default Home
