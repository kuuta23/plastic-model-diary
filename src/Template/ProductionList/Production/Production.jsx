import React from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'
import DeleteButton from './DeleteButton/DeleteButton'
import { useDispatch } from 'react-redux'

const Production = ({name,id}) => {
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
          <DeleteButton
          id={id}/>
        </div>
      <hr/>
    </div>
  )
}

export default Production
