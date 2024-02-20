import React from 'react'
import styles from "./ProductionName.module.css"
import { DisplayProductionName } from '../../../..'

const ProductionName = ({name,to}) => {
  return (
    <span
    className={styles.Frame}>
      <DisplayProductionName
      name={name}
      to={to}/>     
    </span>
  )
}

export default ProductionName
