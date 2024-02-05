import React, { useDebugValue } from 'react'
import styles from "./ProductionName.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { Error, ValueCnt } from '../../../../../Template';

const ProductionName = ({onChange,limit,value}) => {
  const recordError=useSelector(state=>state.recordError);
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
      limit={limit}
      valueCnt={[...value].length}/>
      <Error
      noValue={recordError.nameNoValue}
      overValue={recordError.nameOverValue}/>
      
    </div>
  )
}

export default ProductionName
