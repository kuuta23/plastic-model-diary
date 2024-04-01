import React, { useCallback, useDebugValue, useEffect, useState } from 'react'
import styles from "./ProductionName.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { Error, ValueCnt, noString, overString } from '../../../../../Template';
import { recordProductionNameAction } from '../../../../../reducks/record/production/actions';
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../reducks/error/record/productions/actions';

const ProductionName = () => {
  const dispatch=useDispatch();
  const [name,setName]=useState("");
  const production=useSelector(state=>state.recordProduction);

  useEffect(()=>{
    setName(production.name);
  },[])
  const inputName=useCallback((event)=>{
    const value=event.target.value;
    setName(value);
    dispatch(recordProductionNameAction(value));
  },[setName])
  
  return (
    <div
    className={styles.Frame}>
      <input 
      className={styles.Input}
      type="text" 
      name="" 
      id=""
      value={name}
      placeholder='作品名'
      onChange={inputName} />
      <ValueCnt
      limit={30}
      valueCnt={name.length}/>
      
    </div>
  )
}

export default ProductionName
