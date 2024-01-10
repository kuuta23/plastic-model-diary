import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import productionsSave from '../../reducks/saveData/operations/productionSave'

const Home = () => {
  const dispatch=useDispatch();
  const selector=useSelector(state=>state);
  useEffect(()=>{
    dispatch(productionsSave(100));
  
  },[])
  const save=selector.save
  
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      productionList={save.productions}/>
    </div>
  )
}

export default Home
