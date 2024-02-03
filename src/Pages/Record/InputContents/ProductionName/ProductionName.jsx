import React, { useDebugValue } from 'react'
import styles from "./ProductionName.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { Error, ValueCnt } from '../../../../Template';
import { recordErrorResetAction } from '../../../../reducks/error/record/actions';

const ProductionName = ({error=false,onChange,nameValuelimit,valueCnt}) => {
  const selector=useSelector(state=>state);
  const recordError=selector.recordError;
  return (
    <div
    className={styles.Frame}>
      <input 
      className={styles.Input}
      type="text" 
      name="" 
      id=""
      placeholder='作品名'
      onChange={onChange} />
      <ValueCnt
      limit={nameValuelimit}
      valueCnt={valueCnt}/>
      <Error
      noValue={recordError.noValue}
      overValue={recordError.overValue}/>
      
    </div>
  )
}

export default ProductionName
