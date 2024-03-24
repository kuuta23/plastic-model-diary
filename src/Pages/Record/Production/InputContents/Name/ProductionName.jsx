import React, { useCallback, useDebugValue, useEffect, useState } from 'react'
import styles from "./ProductionName.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { Error, ValueCnt } from '../../../../../Template';
import { recordProductionAction } from '../../../../../reducks/record/production/actions';
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../reducks/error/record/productions/actions';

const ProductionName = ({onChange,limit}) => {
  const dispatch=useDispatch();
  const [name,setName]=useState("");
  const production=useSelector(state=>state.recordProduction);
  useEffect(()=>{
    setName(production.name);
  },[])
  const inputName=useCallback((event)=>{
    setName(event.target.value);
    if([...event.target.value].length>30){
      dispatch(recordProdutionErrorAction())
    }else{
      dispatch(recordProductionErrorResetAction())
    }
    dispatch(recordProductionAction({
      ...production,
      ...{name:event.target.value}
    }));
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
      limit={limit}
      valueCnt={0}/>
      
    </div>
  )
}

export default ProductionName
