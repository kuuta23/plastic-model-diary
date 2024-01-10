import React from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'
import DeleteButton from './DeleteButton/DeleteButton'

const Production = ({name}) => {
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.ProductionName}>
            <ProductionName
            name={name}/>
        </div>
        <div
        className={styles.DeleteButton}>
          <DeleteButton/>
        </div>
      <hr/>
    </div>
  )
}

export default Production
