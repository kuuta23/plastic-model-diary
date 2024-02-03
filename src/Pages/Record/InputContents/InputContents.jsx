import React, { useCallback, useState } from 'react'
import { Enter, ProductionName } from '.'
import styles from "./InputContents.module.css"
import record from '../../../reducks/record/operations/record';
import { useDispatch } from 'react-redux';
import { loadingAction } from '../../../reducks/loading/actions';
import ProductionComment from './ProductionComment/ProductionComment';

const InputContents = () => {
  const [productionName,setProductionName]=useState(""),
        [productionCommment,setProductionComment]=useState("");

  const [productionNameError,setProductionNameError]=useState(false);
  const dispatch=useDispatch()
  const nameValueLimit=30;
  const commentValueLimit=200;

  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])
  const inputProductionComment=useCallback((event)=>{
    setProductionComment(event.target.value)
  },[setProductionComment])

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(record({
      name:productionName,
      nameValueLimit:30,
      comment:productionCommment,
      commentValueLimit:commentValueLimit
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
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default InputContents
