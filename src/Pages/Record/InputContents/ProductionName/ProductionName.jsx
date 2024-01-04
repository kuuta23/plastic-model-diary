import React from 'react'
import styles from "./ProductionName.module.css"

const ProductionName = ({error=false,onChange}) => {
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
        error?(
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
