import React from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'

const Production = ({name}) => {
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.ProductionName}>
            <ProductionName
            name={name}/>
        </div>
      
      <hr />
    </div>
  )
}

export default Production
