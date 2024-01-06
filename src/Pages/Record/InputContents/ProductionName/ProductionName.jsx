import React from 'react'
import styles from "./ProductionName.module.css"
import { useSelector } from 'react-redux'

const ProductionName = ({error=false,onChange}) => {
  const selector=useSelector(state=>state);
  const recordError=selector.recordError
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
      {
        recordError.name?(
          <div
          className={styles.ErrorMessage}>
            ・未入力
          </div>
        ):(
          <></>
        )
      }
      
    </div>
  )
}

export default ProductionName
