import React, { useCallback, useState } from 'react'
import { Enter, ProductionName } from '.'
import styles from "./InputContents.module.css"
import record from '../../../reducks/record/operations/record';
import { useDispatch, useSelector } from 'react-redux';
import { loadingAction } from '../../../reducks/loading/actions';
import ProductionComment from './ProductionComment/ProductionComment';
import LimitedItem from './LimitedItem/LimitedItem';

const InputContents = () => {
  const [productionName,setProductionName]=useState(""),
        [productionCommment,setProductionComment]=useState(""),
        [howToGetProduction,setHowToGetProduction]=useState("");
  const dispatch=useDispatch()
  const nameValueLimit=30,
        commentValueLimit=200,
        howToGetProductionLimit=30;

  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])
  const inputProductionComment=useCallback((event)=>{
    setProductionComment(event.target.value)
  },[setProductionComment])
  const inputHowToGetProduction=useCallback((event)=>{
    setHowToGetProduction(event.target.value)
  },[setHowToGetProduction])

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(record({
      name:productionName,
      nameValueLimit:30,
      comment:productionCommment,
      commentValueLimit:commentValueLimit,
      howToGetProduction:howToGetProduction,
      howToGetProductionLimit:howToGetProductionLimit
    }))

  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
          <ProductionName
          onChange={inputProductionName}
          valueCnt={[...productionName].length}
          nameValuelimit={nameValueLimit}/>
        </div>
        <div
        className={styles.ProductionComment}>
          <ProductionComment
          onChange={inputProductionComment}
          valueCnt={[...productionCommment].length}
          limit={commentValueLimit}/>
        </div>
        <div
        className={styles.HowToGetProduction}>
          <LimitedItem
          onChange={inputHowToGetProduction}
          valueCnt={[...howToGetProduction].length}
          limit={howToGetProductionLimit}/>
        </div>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default InputContents
