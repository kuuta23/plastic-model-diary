import React, { useCallback, useState } from 'react'
import { Enter, ProductionName } from '.'
import styles from "./InputContents.module.css"
import record from '../../../reducks/record/operations/record';
import { useDispatch } from 'react-redux';
import { loadingAction } from '../../../reducks/loading/actions';

const InputContents = () => {
  const [productionName,setProductionName]=useState("");

  const [productionNameError,setProductionNameError]=useState(false);
  const dispatch=useDispatch()
  const nameValueLimit=30;

  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(record({name:productionName,nameValueLimit:30}))

  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
            <ProductionName
            error={productionNameError}
            onChange={inputProductionName}
            valueCnt={[...productionName].length}
            nameValuelimit={nameValueLimit}/>
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
