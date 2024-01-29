import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'
import { useDispatch, useSelector } from 'react-redux'
import productionsSave from '../../reducks/saveData/operations/productionSave'
import productionDelete from '../../reducks/saveData/operations/productionDelete'

const Home = () => {
  const dispatch=useDispatch();
  const selector=useSelector(state=>state);
  useEffect(()=>{
    dispatch(productionsSave(100));
  
  },[selector.save.productions.length])

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
