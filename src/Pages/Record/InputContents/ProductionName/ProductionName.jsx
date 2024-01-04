import React from 'react'
import styles from "./ProductionName.module.css"

const ProductionName = () => {
  return (
    <div
    className={styles.Frame}>
      <input 
      className={styles.Input}
      type="text" 
      name="" 
      id=""
      placeholder='作品名' />
    </div>
  )
}

export default ProductionName
